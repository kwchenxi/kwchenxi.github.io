---
name: ui-walkthrough
description: Automate 11-dimension UI walkthrough for desktop or web applications. Use when the user asks to walkthrough, audit, review, or check a UI/page/app for design compliance, responsiveness, accessibility, or design system adherence. Accepts an app URL, Electron app path, or screenshots folder as input. Outputs a standardized HTML walkthrough report with scoring.
---

# UI Walkthrough Skill

Automated 11-dimension UI walkthrough for any desktop or web application.

## Input

One of:
- **Web URL**: Use Playwright Browser Agent
- **Electron app path**: Use Playwright Electron API (fallback: Computer Use)
- **Screenshots folder**: Analyze pre-captured screenshots

Optional:
- **Spec file** (JSON): design token baseline (see `lingee-walkthrough-spec.json` for format)
- **Design system docs**: URL or markdown file

## 11-Dimension Framework

| Layer | Dimension | Weight | What to Check |
|-------|-----------|--------|---------------|
| **L1 基础** | 响应式布局 | ×0.4 | 最小窗口/最大窗口/中等宽度的布局变化 |
| | 设计规范对照 | ×0.4 | 间距、字号、颜色、圆角、阴影 vs 规范值 |
| **L2 进阶** | 极限边界 | ×0.35 | 超长文本、空数据、极大列表、无网络 |
| | 暗黑模式 | ×0.35 | 切换后对比度、色值是否正确 |
| | 空状态/错误 | ×0.35 | 空列表、加载失败、404 页面 |
| | 焦点/键盘 | ×0.35 | Tab 导航、focus ring、快捷键 |
| **L3 深度** | 国际化 | ×0.25 | 文本截断、RTL 布局、多语言 |
| | 无障碍 | ×0.25 | aria 属性、颜色对比度、可访问性 |
| | Token 绑定 | ×0.25 | CSS 变量使用率、硬编码检测 |
| | Variant 完整 | ×0.25 | 组件各 variant 是否都有实现 |
| | 跨页面一致性 | ×0.25 | 同一组件在不同页面的表现 |

## Scoring

```
每维度满分 = 100
扣分规则：严重 ×10 + 中等 ×5 + 轻微 ×2
单维度最低 0 分

总分 = Σ(维度得分 × 权重) / Σ(权重)

等级：A ≥ 90 | B ≥ 75 | C ≥ 60 | D ≥ 40 | F < 40
```

## Walkthrough Workflow

### Step 1: 准备

```
Task Progress:
- [ ] 确认输入（URL / app path / screenshots）
- [ ] 读取规范基准（spec JSON / 设计文档）
- [ ] 准备截图目录
- [ ] 确定走查范围（哪些页面/功能）
```

**如果输入是 URL**：用 Playwright Browser Agent 打开页面。
**如果输入是 Electron app**：
1. 尝试 Playwright Electron API
2. 若 macOS hardened runtime 阻止注入 → 兜底 Computer Use

### Step 2: 截取基准截图

对每个目标页面，系统性地截取：

| 状态 | 操作 | 目的 |
|------|------|------|
| 默认状态 | 截取正常视图 | 基准对比 |
| 最小窗口 | 拖拽到最小宽度 | 响应式测试 |
| 最大窗口 | 全屏/最大化 | 布局拉伸 |
| 输入聚焦 | 点击输入框，截取 focus 态 | 焦点状态 |
| 空状态 | 清空数据后截取 | 空状态设计 |
| 加载中 | 触发加载，截取 loading | 加载态设计 |
| 错误状态 | 触发错误（如断网） | 错误处理 |

### Step 3: 逐维度检查

对每个维度，对照规范基准逐项比对：

**L1 — 响应式布局**：
- 窗口从 1440px → 1024px → 768px → 最小宽度
- 记录：截断、溢出、列数不降、元素重叠

**L1 — 设计规范对照**：
- 从截图 + DOM 检查：间距、字号、颜色、圆角、按钮高度
- 与 spec 中的 token 值比对，标记偏差

**L2 — 交互状态**：
- 点击按钮、展开下拉、触发 Toast
- 快速连续操作，检查加载态和面板残留
- 检查 focus ring、hover 态

**L3 — Token 绑定**（如果有源码访问）：
- 运行 `node scripts/token-scan.js <source-dir>` 扫描
- 记录覆盖率、硬编码数量

### Step 4: 问题分级

| 严重级 | 定义 | 扣分 |
|--------|------|------|
| 严重 | 功能不可用或严重影响使用 | ×10 |
| 中等 | 视觉偏差明显但不影响功能 | ×5 |
| 轻微 | 微小瑕疵，几乎无感知 | ×2 |

### Step 5: 生成报告

使用 `walkthrough-template-v2.html` 模板（或参考其结构），生成包含：
1. 评分仪表盘（总分、等级、各维度得分）
2. 问题列表（严重/中等/轻微筛选、截图证据、修复建议）
3. 维度明细（每个维度的详细检查记录）
4. 相关报告链接

## Spec JSON 格式

规范基准文件结构（参考 `lingee-walkthrough-spec.json`）：

```json
{
  "design_tokens": {
    "color": { "primary": "#495DFF", ... },
    "typography": { "heading": { "h1": { "size": 36, "weight": 600 } } },
    "spacing": { "unit": "4px grid", "tokens": { "small": 12, "medium": 16 } },
    "radius": { "small": 4, "medium": 6, "large": 12 },
    "shadow": { ... }
  },
  "components": {
    "Button": { "height": { "md": 28, "lg": 36 } },
    "Dialog": { "width": [460, 640, 720] }
  }
}
```

## Electron 应用特殊处理

macOS hardened runtime 会阻止 Playwright 注入 Electron 应用：

```
尝试顺序：
1. npx @electron/asar extract <app.asar> → 静态代码分析（Token 扫描）
2. Playwright _electron.launch() → 如果被拒绝
3. Computer Use → 兜底方案（截屏+OCR+鼠标点击）
```

对于 Electron 应用，Token 静态扫描（`scripts/token-scan.js`）是可靠的降级方案。

## 输出文件

| 文件 | 说明 |
|------|------|
| `<app>-walkthrough.html` | 完整走查报告 |
| `<app>-screenshots/` | 截图目录 |
| `<app>-token-scan-result.html` | Token 扫描报告（Electron 应用） |

## 参考文件

- 报告模板：`walkthrough-template-v2.html`
- 报告样式：`walkthrough-v2.css`
- 灵基规范基准：`lingee-walkthrough-spec.json`
- Token 扫描工具：`scripts/token-scan.js`
- 灵基走查示例：`lingji-walkthrough-v2.html`、`lingji-walkthrough-chat-v2.html`
