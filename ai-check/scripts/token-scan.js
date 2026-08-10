#!/usr/bin/env node
/**
 * Lingee Token Scan — 静态扫描工具
 * 扫描 Electron 应用（app.asar 解包后）的 CSS/JS 文件，
 * 检测 Design Token 使用率与硬编码色值/间距/圆角/字体/阴影。
 *
 * 用法:
 *   node token-scan.js <目录>                   # 扫描已解包的目录
 *   node token-scan.js <目录> --html            # 同时生成 HTML 报告
 *   node token-scan.js <目录> --json out.json   # 输出 JSON 到文件
 *
 * 解包 app.asar:
 *   npx @electron/asar extract /path/to/app.asar ./extracted
 */

const fs = require('fs');
const path = require('path');

// ─── 配置 ─────────────────────────────────────────────────────
const CONFIG = {
  // 从 spec.json 提取的已知 Token 色值（这些出现在 token 定义中不算硬编码）
  knownTokenColors: [
    '495DFF', '6D80FF', '3B47F2', 'B7C1FF',   // primary
    'F12234', 'DA0B20',                          // danger
    'FF8B00',                                    // warning
    '00B578', '00B42A', '27C346',                // success
    '95A2FF', '272F9C', '2F37C7',                // primary shades
    'E5F2FF',                                    // blue-25
  ],
  // spacing token 值（4px grid）
  spacingTokenValues: [2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 48, 72],
  // radius token 值
  radiusTokenValues: [4, 6, 8, 12, 16, 20, 24, 28, 32, 999],
  // typography token font-sizes
  fontSizeTokenValues: [10, 12, 14, 16, 18, 20, 24, 36],
  // 扫描文件扩展名
  scanExtensions: ['.css', '.js'],
  // 排除目录
  excludeDirs: ['node_modules', '.git', 'assets/fonts', 'assets/images'],
  // 文件最大大小（跳过超大 minified 文件的全文分析）
  maxFileSize: 5 * 1024 * 1024, // 5MB
};

// ─── 正则 ─────────────────────────────────────────────────────
const RE = {
  // Token 使用（好）
  tokenVar: /var\(--lg-[a-zA-Z0-9_-]+/g,
  // 按类别的 token 使用
  tokenColor: /var\(--lg-(?:g-(?:fg|bg|border)-color|primary|blue|black|white|red|orange|green|grey|yellow)[a-zA-Z0-9_-]*/g,
  tokenSpacing: /var\(--lg-(?:g-spacing|s-)[a-zA-Z0-9_.-]*/g,
  tokenRadius: /var\(--lg-(?:g-radius|r-)[a-zA-Z0-9_.-]*/g,
  tokenShadow: /var\(--lg-(?:g-shadow|shadow)[a-zA-Z0-9_-]*/g,
  tokenTypography: /var\(--lg-(?:typography|g-text)[a-zA-Z0-9_-]*/g,
  tokenTransition: /var\(--lg-(?:transition|g-transition)[a-zA-Z0-9_-]*/g,

  // 硬编码颜色
  hexColor: /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g,
  rgbColor: /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/g,

  // 硬编码间距（在 CSS 属性上下文中）
  spacingProp: /(?:padding|margin|gap|top|left|right|bottom|width|height|min-height|min-width|max-width)\s*:\s*([^;{}]+)/g,

  // 硬编码圆角
  radiusProp: /border-radius\s*:\s*([^;{}]+)/g,

  // 硬编码阴影
  shadowProp: /box-shadow\s*:\s*([^;{}]+)/g,

  // 硬编码字体大小
  fontSizeProp: /font-size\s*:\s*([^;{}]+)/g,
};

// ─── 分类引擎 ─────────────────────────────────────────────────

/**
 * 判断硬编码颜色的上下文类型
 * @returns 'token_def' | 'fallback' | 'tailwind' | 'hardcode'
 */
function classifyColorContext(line, hex) {
  // Token 定义: --lg-primary-600: #495DFF
  if (/--lg-[a-zA-Z0-9_-]+\s*:\s*#/i.test(line)) return 'token_def';
  // Lingee/YUI alias token 定义: --yui-primary-blue: var(--lg-primary-600, #495dff)
  if (/--(?:yui|lingee|rv)-[a-zA-Z0-9_-]+\s*:\s*#/i.test(line)) return 'token_def';

  // CSS fallback: var(--lg-*, #495dff)
  if (/var\([^)]*#/i.test(line)) return 'fallback';

  // Tailwind arbitrary: .text-\[\#495DFF\] 或 border-\[\#495DFF\]
  if (/\\?#\w{3,8}\\?\]|class.*\[#/i.test(line)) return 'tailwind';
  if (/\[#\\?[0-9a-fA-F]{3,8}/i.test(line)) return 'tailwind';

  return 'hardcode';
}

/**
 * 判断硬编码间距值是否匹配 token grid
 */
function isSpacingOnGrid(pxValue) {
  return CONFIG.spacingTokenValues.includes(Math.abs(pxValue));
}

/**
 * 判断圆角值是否匹配 token
 */
function isRadiusInToken(pxValue) {
  return CONFIG.radiusTokenValues.includes(Math.abs(pxValue));
}

/**
 * 判断 font-size 是否匹配 typography token
 */
function isFontSizeInToken(pxValue) {
  return CONFIG.fontSizeTokenValues.includes(Math.abs(pxValue));
}

// ─── 文件遍历 ─────────────────────────────────────────────────

function walkDir(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (CONFIG.excludeDirs.some(d => full.includes(d))) continue;
      walkDir(full, results);
    } else if (CONFIG.scanExtensions.includes(path.extname(e.name))) {
      const stat = fs.statSync(full);
      if (stat.size <= CONFIG.maxFileSize) {
        results.push(full);
      }
    }
  }
  return results;
}

// ─── 核心扫描 ─────────────────────────────────────────────────

function scanFile(filePath, baseDir) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rel = path.relative(baseDir, filePath);
  const ext = path.extname(filePath);
  const result = {
    file: rel,
    ext,
    tokens: { color: 0, spacing: 0, radius: 0, shadow: 0, typography: 0, transition: 0 },
    hardcoded: {
      colors: [],
      spacing: [],
      radius: [],
      fontSize: [],
    },
  };

  // ── Token 使用统计（全文匹配，不需要分行）──
  const countMatches = (re) => { const m = content.match(re); return m ? m.length : 0; };
  result.tokens.color = countMatches(RE.tokenColor);
  result.tokens.spacing = countMatches(RE.tokenSpacing);
  result.tokens.radius = countMatches(RE.tokenRadius);
  result.tokens.shadow = countMatches(RE.tokenShadow);
  result.tokens.typography = countMatches(RE.tokenTypography);
  result.tokens.transition = countMatches(RE.tokenTransition);

  // 每个文件每种硬编码类型最多记录 N 条
  const MAX_PER_CATEGORY = 20;

  // ── 硬编码颜色检测 ──
  // 用全文匹配，但要检查上下文
  const hexRe = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;
  let hm;
  while ((hm = hexRe.exec(content)) !== null) {
    const hex = hm[1].toUpperCase();
    if (/^(0{3,6}|F{3,6}|0{3,8}|F{3,8})$/i.test(hex)) continue;
    if (hex.length < 3 || hex.length > 8) continue;
    if (hex.length === 8 && parseInt(hex.slice(6, 8), 16) < 50) continue;

    const matchIdx = hm.index;
    const prefix = content.slice(Math.max(0, matchIdx - 80), matchIdx);

    // JS 文件上下文过滤
    if (ext === '.js') {
      const pt = prefix.replace(/["']$/, '');
      // SVG 属性
      if (/\bfill=$/.test(pt) || /\bstroke=$/.test(pt)) {
        if (result.hardcoded.colors.length < MAX_PER_CATEGORY * 3) {
          result.hardcoded.colors.push({ value: '#' + hex, context: 'svg', isKnownToken: false, line: 0, snippet: '' });
        }
        continue;
      }
      // 跳过 hash/ID
      if (/[a-zA-Z0-9]$/.test(prefix.replace(/["'\s]/g, ''))) continue;
      // 跳过 URL
      if (/href=["']?$/.test(pt) || /url\(["']?$/.test(pt)) continue;
      // 只保留 CSS-like 上下文
      if (!/[:=]\s*["']?$/.test(prefix) && !/color|background|border/i.test(prefix)) continue;
    }

    const ctx = classifyColorContext(content.slice(matchIdx - 20, matchIdx + 40), hex);
    if (ctx !== 'hardcode' && ctx !== 'tailwind') continue;

    if (result.hardcoded.colors.filter(c => c.context !== 'svg').length >= MAX_PER_CATEGORY) continue;

    const isKnownToken = CONFIG.knownTokenColors.some(tc => tc.toUpperCase() === hex);
    // CSS 文件提取 snippet，JS 大文件跳过
    let snippet = '';
    if (ext === '.css') {
      const s = Math.max(0, matchIdx - 30);
      snippet = content.slice(s, Math.min(content.length, matchIdx + hex.length + 40)).replace(/\s+/g, ' ').trim();
    }
    result.hardcoded.colors.push({
      value: '#' + hex, context: ctx, isKnownToken, line: 0, snippet,
    });
  }

  // ── 硬编码圆角 / 字号（仅 CSS 文件，JS 不检测）──
  if (ext === '.css') {
    const radiusRe = /border-radius\s*:\s*([^;{}]+)/g;
    let rm;
    while ((rm = radiusRe.exec(content)) !== null) {
      const val = rm[1].trim();
      if (/var\(/.test(val) || /^(0|none|inherit|initial|unset)$/.test(val)) continue;
      const pxM = val.match(/(\d+(?:\.\d+)?)\s*px/);
      if (!pxM) continue;
      const px = parseFloat(pxM[1]);
      if (px === 0) continue;
      if (result.hardcoded.radius.length < MAX_PER_CATEGORY) {
        result.hardcoded.radius.push({ value: px + 'px', inToken: isRadiusInToken(px), line: 0 });
      }
    }

    const fontRe = /font-size\s*:\s*([^;{}]+)/g;
    let fm;
    while ((fm = fontRe.exec(content)) !== null) {
      const val = fm[1].trim();
      if (/var\(/.test(val) || /^(inherit|initial|unset)$/.test(val)) continue;
      const pxM = val.match(/(\d+(?:\.\d+)?)\s*px/);
      if (!pxM) continue;
      const px = parseFloat(pxM[1]);
      if (px === 0) continue;
      if (result.hardcoded.fontSize.length < MAX_PER_CATEGORY) {
        result.hardcoded.fontSize.push({ value: px + 'px', inToken: isFontSizeInToken(px), line: 0 });
      }
    }
  }

  return result;
}

// ─── 汇总报告 ─────────────────────────────────────────────────

function generateReport(scanResults, baseDir) {
  const tokens = { color: 0, spacing: 0, radius: 0, shadow: 0, typography: 0, transition: 0 };
  const hardcoded = {
    colors: { hardcode: [], tailwind: [], svg: 0 },
    radius: { offGrid: [], onGrid: [] },
    fontSize: { offGrid: [], onGrid: [] },
  };
  const fileStats = [];

  for (const r of scanResults) {
    // 累计 token
    for (const k of Object.keys(tokens)) {
      tokens[k] += r.tokens[k] || 0;
    }
    // 累计硬编码颜色
    for (const c of r.hardcoded.colors) {
      if (c.context === 'hardcode') hardcoded.colors.hardcode.push({ file: r.file, ...c });
      else if (c.context === 'tailwind') hardcoded.colors.tailwind.push({ file: r.file, ...c });
      else if (c.context === 'svg') hardcoded.colors.svg = (hardcoded.colors.svg || 0) + 1;
    }
    // 累计硬编码圆角
    for (const r2 of r.hardcoded.radius) {
      const entry = { file: r.file, ...r2 };
      if (r2.inToken) hardcoded.radius.onGrid.push(entry);
      else hardcoded.radius.offGrid.push(entry);
    }
    // 累计硬编码字体
    for (const f of r.hardcoded.fontSize) {
      const entry = { file: r.file, ...f };
      if (f.inToken) hardcoded.fontSize.onGrid.push(entry);
      else hardcoded.fontSize.offGrid.push(entry);
    }
    // 文件级统计
    const tokenTotal = Object.values(r.tokens).reduce((a, b) => a + b, 0);
    const hardcodeTotal = r.hardcoded.colors.length + r.hardcoded.radius.length + r.hardcoded.fontSize.length;
    if (tokenTotal > 0 || hardcodeTotal > 0) {
      fileStats.push({
        file: r.file,
        tokens: tokenTotal,
        hardcodes: hardcodeTotal,
      });
    }
  }

  const totalTokenUsage = Object.values(tokens).reduce((a, b) => a + b, 0);
  const totalHardcodeColors = hardcoded.colors.hardcode.length + hardcoded.colors.tailwind.length;
  const svgColorCount = hardcoded.colors.svg || 0;

  // 覆盖率计算
  const colorCoverage = totalTokenUsage + totalHardcodeColors > 0
    ? (tokens.color / (tokens.color + totalHardcodeColors) * 100).toFixed(1)
    : '100.0';

  return {
    meta: {
      scanTime: new Date().toISOString(),
      baseDir: baseDir,
      filesScanned: scanResults.length,
    },
    summary: {
      tokenUsage: tokens,
      tokenTotal: totalTokenUsage,
      hardcodedColors: {
        trueHardcode: hardcoded.colors.hardcode.length,
        tailwind: hardcoded.colors.tailwind.length,
        svg: svgColorCount,
        total: totalHardcodeColors,
      },
      hardcodedRadius: {
        offGrid: hardcoded.radius.offGrid.length,
        onGrid: hardcoded.radius.onGrid.length,
      },
      hardcodedFontSize: {
        offGrid: hardcoded.fontSize.offGrid.length,
        onGrid: hardcoded.fontSize.onGrid.length,
      },
      colorCoverage: parseFloat(colorCoverage),
    },
    details: {
      hardcodedColors: hardcoded.colors,
      hardcodedRadius: hardcoded.radius,
      hardcodedFontSize: hardcoded.fontSize,
    },
    fileStats: fileStats.sort((a, b) => b.hardcodes - a.hardcodes),
  };
}

// ─── HTML 报告生成 ─────────────────────────────────────────────

function generateHTML(report) {
  const { summary, details, meta, fileStats } = report;
  const grade = summary.colorCoverage >= 98 ? 'A' :
                summary.colorCoverage >= 95 ? 'B' :
                summary.colorCoverage >= 90 ? 'C' :
                summary.colorCoverage >= 80 ? 'D' : 'F';
  const gradeColor = { A: '#00B578', B: '#495DFF', C: '#FF8B00', D: '#F12234', F: '#F12234' }[grade];

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lingee Token Scan Report</title>
<style>
  :root { --primary: #495DFF; --bg: #F7F7F8; --surface: #FFF; --text: rgba(0,0,0,0.82); --muted: rgba(0,0,0,0.45); --border: rgba(0,0,0,0.08); --success: #00B578; --danger: #F12234; --warning: #FF8B00; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, "PingFang SC", sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; padding: 32px; }
  .container { max-width: 960px; margin: 0 auto; }
  h1 { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
  .meta { font-size: 13px; color: var(--muted); margin-bottom: 32px; }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 20px; }
  .card h2 { font-size: 16px; font-weight: 600; margin-bottom: 16px; }
  .grade { display: inline-flex; align-items: center; gap: 8px; font-size: 36px; font-weight: 700; color: ${gradeColor}; }
  .grade small { font-size: 14px; font-weight: 400; color: var(--muted); }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; margin: 20px 0; }
  .stat { text-align: center; padding: 16px; background: var(--bg); border-radius: 8px; }
  .stat .num { font-size: 28px; font-weight: 700; color: var(--primary); }
  .stat .label { font-size: 12px; color: var(--muted); margin-top: 4px; }
  .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; }
  .badge-ok { background: rgba(0,181,120,0.1); color: var(--success); }
  .badge-warn { background: rgba(255,139,0,0.1); color: var(--warning); }
  .badge-err { background: rgba(241,34,52,0.1); color: var(--danger); }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; padding: 8px 12px; background: var(--bg); border-bottom: 1px solid var(--border); font-weight: 600; }
  td { padding: 8px 12px; border-bottom: 1px solid var(--border); vertical-align: top; }
  td code { background: rgba(0,0,0,0.04); padding: 1px 4px; border-radius: 3px; font-size: 12px; font-family: "SF Mono", monospace; }
  .snippet { max-width: 400px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: var(--muted); }
  .token-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; }
  .token-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: var(--bg); border-radius: 8px; }
  .token-item .name { font-size: 13px; font-weight: 500; }
  .token-item .count { font-size: 18px; font-weight: 700; color: var(--primary); }
  .section-label { font-size: 12px; font-weight: 600; color: var(--primary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
</style>
</head>
<body>
<div class="container">
  <h1>Lingee Token Scan Report</h1>
  <div class="meta">扫描时间：${meta.scanTime.replace('T', ' ').slice(0, 19)} &middot; 扫描文件：${meta.filesScanned} 个 &middot; 目录：${meta.baseDir}</div>

  <div class="card">
    <div style="display:flex;align-items:center;gap:24px">
      <div class="grade">${grade} <small>${parseFloat(summary.colorCoverage).toFixed(1)}% 覆盖率</small></div>
    </div>
    <div class="stats">
      <div class="stat"><div class="num">${summary.tokenTotal.toLocaleString()}</div><div class="label">Token 使用次数</div></div>
      <div class="stat"><div class="num" style="color:${summary.hardcodedColors.trueHardcode > 0 ? 'var(--danger)' : 'var(--success)'}">${summary.hardcodedColors.trueHardcode}</div><div class="label">硬编码颜色</div></div>
      <div class="stat"><div class="num" style="color:${summary.hardcodedColors.tailwind > 0 ? 'var(--warning)' : 'var(--success)'}">${summary.hardcodedColors.tailwind}</div><div class="label">Tailwind 色值</div></div>
      <div class="stat"><div class="num" style="color:var(--muted)">${summary.hardcodedColors.svg}</div><div class="label">SVG 图标色</div></div>
      <div class="stat"><div class="num" style="color:${summary.hardcodedRadius.offGrid > 0 ? 'var(--warning)' : 'var(--success)'}">${summary.hardcodedRadius.offGrid}</div><div class="label">非 Token 圆角</div></div>
      <div class="stat"><div class="num" style="color:${summary.hardcodedFontSize.offGrid > 0 ? 'var(--warning)' : 'var(--success)'}">${summary.hardcodedFontSize.offGrid}</div><div class="label">非 Token 字号</div></div>
    </div>
  </div>

  <div class="card">
    <div class="section-label">Token 使用分布</div>
    <h2>各类 Token 使用次数</h2>
    <div class="token-grid">
      ${Object.entries(summary.tokenUsage).map(([k, v]) =>
        `<div class="token-item"><span class="name">${k}</span><span class="count">${v.toLocaleString()}</span></div>`
      ).join('\n      ')}
    </div>
  </div>

  ${details.hardcodedColors.hardcode.length > 0 ? `
  <div class="card">
    <div class="section-label">需要修复</div>
    <h2>硬编码颜色（${details.hardcodedColors.hardcode.length} 处）</h2>
    <table>
      <tr><th>色值</th><th>文件</th><th>行号</th><th>代码片段</th></tr>
      ${details.hardcodedColors.hardcode.map(c =>
        `<tr><td><code style="color:${c.value};border-left:3px solid ${c.value};padding-left:6px">${c.value}</code></td><td>${c.file}</td><td>${c.line}</td><td class="snippet">${escapeHtml(c.snippet)}</td></tr>`
      ).join('\n      ')}
    </table>
  </div>` : '<div class="card"><h2>✅ 未发现硬编码颜色</h2></div>'}

  ${details.hardcodedColors.tailwind.length > 0 ? `
  <div class="card">
    <div class="section-label">低风险</div>
    <h2>Tailwind Arbitrary 色值（${details.hardcodedColors.tailwind.length} 处）</h2>
    <p style="font-size:13px;color:var(--muted);margin-bottom:12px">Tailwind 编译产物中的 arbitrary value 类名，如 <code>.text-\\[\\#495DFF\\]</code>。建议改用 Token 对应的 Tailwind 类。</p>
    <table>
      <tr><th>色值</th><th>文件</th><th>行号</th><th>代码片段</th></tr>
      ${details.hardcodedColors.tailwind.map(c =>
        `<tr><td><code>${c.value}</code></td><td>${c.file}</td><td>${c.line}</td><td class="snippet">${escapeHtml(c.snippet)}</td></tr>`
      ).join('\n      ')}
    </table>
  </div>` : ''}

  ${details.hardcodedRadius.offGrid.length > 0 ? `
  <div class="card">
    <div class="section-label">圆角偏差</div>
    <h2>非 Token 圆角值（${details.hardcodedRadius.offGrid.length} 处）</h2>
    <table>
      <tr><th>值</th><th>文件</th><th>行号</th><th>代码片段</th></tr>
      ${details.hardcodedRadius.offGrid.map(r =>
        `<tr><td><code>${r.value}</code></td><td>${r.file}</td><td>${r.line}</td><td class="snippet">${escapeHtml(r.snippet)}</td></tr>`
      ).join('\n      ')}
    </table>
  </div>` : ''}

  ${details.hardcodedRadius.onGrid.length > 0 ? `
  <div class="card">
    <h2>硬编码圆角但匹配 Token（${details.hardcodedRadius.onGrid.length} 处）</h2>
    <p style="font-size:13px;color:var(--muted)">这些值虽然匹配 Token 数值，但直接写了 px 而非用 <code>var(--lg-r-*)</code>，建议统一改用 Token。</p>
  </div>` : ''}

  ${details.hardcodedFontSize.offGrid.length > 0 ? `
  <div class="card">
    <div class="section-label">字号偏差</div>
    <h2>非 Token 字号值（${details.hardcodedFontSize.offGrid.length} 处）</h2>
    <table>
      <tr><th>值</th><th>文件</th><th>行号</th></tr>
      ${details.hardcodedFontSize.offGrid.map(f =>
        `<tr><td><code>${f.value}</code></td><td>${f.file}</td><td>${f.line}</td></tr>`
      ).join('\n      ')}
    </table>
  </div>` : ''}

  <div class="card">
    <h2>文件级统计（Top 20）</h2>
    <table>
      <tr><th>文件</th><th>Token 数</th><th>硬编码数</th></tr>
      ${fileStats.slice(0, 20).map(f =>
        `<tr><td style="font-size:12px">${f.file}</td><td>${f.tokens}</td><td><span class="badge ${f.hardcodes > 5 ? 'badge-err' : f.hardcodes > 0 ? 'badge-warn' : 'badge-ok'}">${f.hardcodes}</span></td></tr>`
      ).join('\n      ')}
    </table>
  </div>

</div>
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── CLI ──────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
Lingee Token Scan — Design Token 静态扫描工具

用法:
  node token-scan.js <目录>                  扫描并输出 JSON 到 stdout
  node token-scan.js <目录> --html           同时生成 HTML 报告
  node token-scan.js <目录> --json out.json  输出 JSON 到文件
  node token-scan.js <目录> --html --json out.json

示例:
  # 先解包 app.asar
  npx @electron/asar extract "/Applications/金蝶灵基.app/Contents/Resources/app.asar" ./extracted
  # 再扫描
  node token-scan.js ./extracted --html
`);
    process.exit(0);
  }

  const dir = args[0];
  const wantHtml = args.includes('--html');
  const jsonIdx = args.indexOf('--json');
  const jsonOut = jsonIdx >= 0 ? args[jsonIdx + 1] : null;

  if (!fs.existsSync(dir)) {
    console.error(`错误：目录不存在 → ${dir}`);
    process.exit(1);
  }

  console.error(`▶ 扫描目录：${dir}`);
  const files = walkDir(dir);
  console.error(`▶ 发现 ${files.length} 个 CSS/JS 文件`);

  const results = [];
  for (const f of files) {
    try {
      results.push(scanFile(f, dir));
    } catch (e) {
      console.error(`  ⚠ 跳过 ${path.relative(dir, f)}: ${e.message}`);
    }
  }

  const report = generateReport(results, dir);

  // 控制台摘要
  console.error('\n════════════════════════════════════════');
  console.error(`Token 使用总计: ${report.summary.tokenTotal.toLocaleString()}`);
  Object.entries(report.summary.tokenUsage).forEach(([k, v]) => {
    if (v > 0) console.error(`  ${k}: ${v.toLocaleString()}`);
  });
  console.error(`\n硬编码颜色: ${report.summary.hardcodedColors.trueHardcode} (Tailwind: ${report.summary.hardcodedColors.tailwind}, SVG: ${report.summary.hardcodedColors.svg})`);
  console.error(`圆角偏差: ${report.summary.hardcodedRadius.offGrid} (匹配Token: ${report.summary.hardcodedRadius.onGrid})`);
  console.error(`字号偏差: ${report.summary.hardcodedFontSize.offGrid} (匹配Token: ${report.summary.hardcodedFontSize.onGrid})`);
  console.error(`\n颜色 Token 覆盖率: ${report.summary.colorCoverage}%  →  等级 ${
    report.summary.colorCoverage >= 98 ? 'A' :
    report.summary.colorCoverage >= 95 ? 'B' :
    report.summary.colorCoverage >= 90 ? 'C' :
    report.summary.colorCoverage >= 80 ? 'D' : 'F'
  }`);
  console.error('════════════════════════════════════════\n');

  // 输出 JSON
  const jsonStr = JSON.stringify(report, null, 2);
  if (jsonOut) {
    fs.writeFileSync(jsonOut, jsonStr, 'utf-8');
    console.error(`▶ JSON 报告已写入: ${jsonOut}`);
  } else if (!wantHtml) {
    console.log(jsonStr);
  }

  // 输出 HTML
  if (wantHtml) {
    const htmlPath = jsonOut ? jsonOut.replace(/\.json$/, '.html') : 'token-scan-report.html';
    fs.writeFileSync(htmlPath, generateHTML(report), 'utf-8');
    console.error(`▶ HTML 报告已写入: ${htmlPath}`);
  }
}

main();
