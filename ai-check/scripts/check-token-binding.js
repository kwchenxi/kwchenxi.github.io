// 灵基 Token 绑定检测（Playwright · Electron）
// 启动金蝶灵基 → 扫描各窗口 CSS → 统计 var(--lg-*) token 用法 vs 硬编码 #495DFF
const { _electron } = require('playwright-core');

const APP = '/Applications/金蝶灵基.app/Contents/MacOS/金蝶灵基';

(async () => {
  console.log('▶ 启动灵基…（会弹出一个窗口，结束后自动关闭）');
  const app = await _electron.launch({ executablePath: APP });
  try {
    await app.firstWindow();
    console.log('▶ 首个窗口已出现，等待界面加载 6 秒…');
    await app.waitForTimeout(6000);

    const windows = app.windows().filter(Boolean);
    console.log(`▶ 当前窗口数：${windows.length}\n`);

    let total = { token: 0, hex: 0 };
    for (let i = 0; i < windows.length; i++) {
      const w = windows[i];
      let res = null, title = '', url = '';
      try {
        title = await w.title().catch(() => '');
        url = w.url();
        res = await w.evaluate(() => {
          const TOKEN = /var\(--lg/i, HEX = /#495dff/i;
          const acc = { token: 0, hex: 0, tokenSamples: [], hexSamples: [], sheets: 0, skipped: 0 };
          for (const sheet of Array.from(document.styleSheets)) {
            let rules;
            try { rules = sheet.cssRules; } catch (e) { acc.skipped++; continue; }
            acc.sheets++;
            (function walk(rs) {
              if (!rs) return;
              for (const r of Array.from(rs)) {
                const t = r.cssText || '';
                if (TOKEN.test(t)) {
                  acc.token++;
                  if (acc.tokenSamples.length < 3) acc.tokenSamples.push(t.replace(/\s+/g, ' ').slice(0, 130));
                }
                if (HEX.test(t)) {
                  acc.hex++;
                  if (acc.hexSamples.length < 6) acc.hexSamples.push(t.replace(/\s+/g, ' ').slice(0, 130));
                }
                if (r.cssRules) walk(r.cssRules); // 递归进 @media / @layer
              }
            })(rules);
          }
          // 内联 style 里的硬编码主色
          acc.inlineHex = Array.from(document.querySelectorAll('[style]'))
            .filter(el => /495dff/i.test(el.getAttribute('style') || '')).length;
          return acc;
        });
      } catch (e) {
        console.log(`  窗口 ${i} 扫描失败: ${String(e.message).split('\n')[0]}`);
      }
      if (!res) continue;
      total.token += res.token; total.hex += res.hex;
      console.log(`— 窗口 ${i}: ${title || '(无标题)'}  [${(url || '').slice(0, 50)}]`);
      console.log(`    样式表 ${res.sheets} 个（跨域跳过 ${res.skipped}）`);
      console.log(`    ✓ var(--lg*)  token 用法：${res.token} 处`);
      console.log(`    ✗ 硬编码 #495DFF        ：${res.hex} 处（内联 ${res.inlineHex}）`);
      if (res.tokenSamples[0]) console.log(`    token 示例：${res.tokenSamples[0]}`);
      res.hexSamples.forEach(s => console.log(`    硬编码示例：${s}`));
      console.log('');
    }

    console.log('════════════════════════════════════════');
    console.log(`汇总：token ${total.token} 处  /  硬编码 ${total.hex} 处`);
    if (total.token === 0 && total.hex === 0) {
      console.log('未检测到主色相关样式 —— 可能首屏是登录页，CSS 还没加载完。');
      console.log('改进：登录进入功能页后再扫，或调大上面的等待时间。');
    } else if (total.hex > 0) {
      console.log(`结论：发现 ${total.hex} 处硬编码主色 → Token 绑定有缺口 ❌（这些地方主色改了不会跟着变）`);
    } else {
      console.log('结论：主色全部走 token，未发现硬编码 ✅');
    }
    console.log('════════════════════════════════════════');
  } finally {
    await app.close().catch(() => {});
    console.log('\n▶ 灵基已关闭。');
  }
})().catch(e => {
  console.error('\n✗ 启动失败:', String(e.message).split('\n')[0]);
  console.error('  （签名/ hardened runtime 可能阻止注入；可改用静态扫 app.asar 的方式）');
  process.exit(1);
});
