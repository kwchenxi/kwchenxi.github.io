# AI UI 走查实验

> 用 AI Agent（Computer Use / Playwright）自动走查桌面应用 UI，输出结构化报告。

**线上地址**: https://kwchenxi.github.io/ai-check/index.html

---

## 项目目标

探索「用 AI 做 UI 走查」的可行性，验证 AI 能否像真人测试员一样：打开应用、操作界面、截取不同状态、对照设计规范、输出结构化报告。

## 四个实施方向（ABCD）

| 方向 | 说明 | 状态 |
|------|------|------|
| **A. 报告升级** | 统一模板、评分系统（综合评分+维度评分）、代码扫描、Figma 还原对比 | ✅ 已完成 |
| **B. 自动化流程** | 沉淀为可复用 Skill/脚本，输入 URL 自动跑走查 | ✅ 已完成 |
| **C. 技术栈切换** | 从 Computer Use 切换到 Playwright（Web→PW，Electron→PW Electron API） | 🔄 进行中 |
| **D. 设计稿对比** | 引入 Figma 设计稿作为基准 | ✅ 已完成 |

---

## 已完成工作

### A. 报告升级（已完成）

**11 维度走查框架**：

| 层级 | 维度 | 权重 |
|------|------|------|
| L1 基础 | 响应式布局、设计规范对照 | ×0.4 |
| L2 进阶 | 极限边界、暗黑模式、空状态/错误、焦点/键盘 | ×0.35 |
| L3 深度 | 国际化、无障碍、Token 绑定、Variant 完整性、跨页面一致性 | ×0.25 |

**评分体系**：严重×10 + 中等×5 + 轻微×2 扣分，每维度满分 100，加权平均，A/B/C/D/F 五档。

**双层规范基准**：
- Layer 1：线上文档 kingdee.github.io/lingee-ui（组件 API、具体数值）
- Layer 2：MD 合约 Lingee-unified-page-generation-spec.md（Figma 节点、Token 绑定、variant 拓扑）

**产出文件**：

| 文件 | 说明 |
|------|------|
| `lingji-note-walkthrough.html` | AI速记 走查报告（v0.1.3，评分 58/C，16 个问题，代码扫描+Figma 还原对比） |
| `lingji-rescan-report.html` | 会议室+对话模块 走查报告（v0.1.3，评分 68/C，11 个问题，代码扫描+Figma 还原对比） |
| `lingji-token-report.html` | Token 扫描说明（全应用扫描原理和数据） |
| `walkthrough-v2.css` | 报告共享 CSS（评分仪表盘、Tab 切换、卡片布局） |
| `index.html` | 项目首页，介绍 AI 走查方案 |

### C. 技术栈切换（进行中）

**金蝶灵基技术确认**：
- Electron 应用（Electron Framework.framework）
- Bundle ID: `com.Kingdee.lingee`，版本 0.1.2
- 代码打包在 `app.asar`（34MB）

**Playwright Electron 启动问题**：
- macOS hardened runtime 阻止 Playwright 注入 Electron 进程
- `_electron.launch()` 报错 "Process failed to launch!"
- 加 `--no-sandbox` 也无效

**替代方案：静态分析 app.asar**（已封装为工具）：

```bash
# 1. 解包
npx @electron/asar extract "/Applications/金蝶灵基.app/Contents/Resources/app.asar" ./lingee-extracted

# 2. 扫描（生成 JSON + HTML 报告）
node scripts/token-scan.js ./lingee-extracted --html --json result.json
```

**Token 扫描工具** (`scripts/token-scan.js`)：
- 零外部依赖，纯 Node.js
- 扫描 6 类 Token：color / spacing / radius / shadow / typography / transition
- 硬编码分类：真硬编码 / Tailwind arbitrary / SVG 图标 / Token 定义 / CSS fallback
- JS 文件上下文感知（过滤 SVG fill、hash ID、URL 等误报）
- 输出 JSON + HTML 可视化报告

**灵基扫描结果**：

| 指标 | 数值 |
|------|------|
| Token 使用总计 | 4,729 次（color: 4603, shadow: 66, transition: 60） |
| 硬编码颜色 | 521 处（含第三方 UI 库，每文件上限 20） |
| SVG 图标色 | 322 处（单独分类，不计入主硬编码） |
| Tailwind 色值 | 33 处 |
| 非 Token 圆角 | 109 处（匹配 Token 值: 310） |
| 非 Token 字号 | 122 处（匹配 Token 值: 367） |
| 颜色 Token 覆盖率 | 88~89%（核心模块，不同模块略有差异） |

> 以上数据与 `lingji-token-report.html` / `token-scan-data.html` 一致，扫描时间 2026-08-11，应用版本 v0.1.3。

**脚本文件**：
- `scripts/token-scan.js` — 静态扫描工具（主力）
- `scripts/check-token-binding.js` — Playwright Electron 运行时扫描脚本（macOS 下因 hardened runtime 无法启动，备用）

---

## 技术决策记录

| 决策 | 选择 | 原因 |
|------|------|------|
| Web 应用走查 | Playwright | DOM 级操作，精度高、速度快 |
| Electron 应用走查 | Playwright Electron API（优先）+ Computer Use（兜底） | PW 能操作 DOM，Computer Use 兜底签名/hardened 问题 |
| 规范基准 | 双层：线上文档 + MD 合约 | 互补：线上有 API 数值，MD 有 Figma 节点/Token 绑定 |
| 硬编码检测 | 静态分析 app.asar | macOS hardened runtime 阻止动态注入 |

---

## 目录结构

```
ai-check/
├── index.html                          # 项目首页
├── lingji-note-walkthrough.html        # AI速记 走查报告（v0.1.3）
├── lingji-rescan-report.html           # 会议室+对话模块 走查报告（v0.1.3）
├── lingji-token-report.html            # Token 扫描说明（全应用）
├── token-scan-data.html                # 全应用扫描数据（v0.1.3）
├── project-comparison.html             # 新旧方案对比页
├── walkthrough-v2.css                  # 报告共享样式
├── walkthrough-template-v2.html        # 可复用报告模板
├── lingji-report-images/               # 走查截图
├── scripts/
│   ├── token-scan.js                   # Token 静态扫描工具（主力）
│   └── check-token-binding.js          # Playwright Electron 运行时扫描（备用）
└── README.md                           # 本文件
```

---

## 下一步计划

### B. 自动化走查流程
- 把走查流程沉淀为 Qoder Skill
- 输入：目标应用 URL / 路径
- 输出：标准化 v2 走查报告 HTML
- 自动读取 `lingee-walkthrough-spec.json` 作为规范基准

### C. 技术栈切换（续）
- 解决 Playwright Electron 启动问题（尝试 codesign --remove-signature 或 dev 模式）
- 实现运行时 DOM 级扫描（比静态分析更精确，能检测实际渲染后的值）
- 对比静态分析 vs 运行时扫描结果差异

### D. 设计稿对比
- 接入 Figma API
- 自动截图 + 像素级对比
- 输出差异标注报告

---

## 本地开发

```bash
# 启动本地预览
cd ai-check && python3 -m http.server 8765
# 访问 http://localhost:8765

# Token 静态扫描（需要先解包 app.asar）
npx @electron/asar extract "/Applications/金蝶灵基.app/Contents/Resources/app.asar" ./lingee-extracted
# 然后用 grep 扫描，详见上方"静态分析"部分
```

## 部署

GitHub Pages，仓库 `kwchenxi/kwchenxi.github.io` 的 `ai-check/` 子目录。
线上地址：https://kwchenxi.github.io/ai-check/index.html
