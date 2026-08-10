---
name: ui-walkthrough
description: "配置驱动的 UI 走查自动化。读取 walkthrough-config.json，执行代码扫描、界面截图、Figma 对比，生成 Tab 式 HTML 走查报告。触发词：走查、walkthrough、UI 检查、走查报告。输入：页面名称（如 meeting、chat）或 all。"
user_invocable: true
---

# UI Walkthrough — 配置驱动走查

读取项目配置文件，自动执行完整走查流程，生成可直接修复的问题清单报告。

## 输入

`$ARGUMENTS` — 页面名称（如 `meeting`、`chat`、`calendar`），或 `all` 走查全部页面。

如果没有提供参数，列出 `walkthrough-config.json` 中的页面让用户选择。

## 第一步：读取配置

读取项目根目录的 `walkthrough-config.json`，获取：

- `project` — 项目名称、版本、logo/mascot 路径
- `app` — 应用类型（electron/web）、asar 路径、解包目录
- `design` — 规范站 URL、Figma 链接、Figma PAT
- `pages` — 可走查的页面列表及 Figma node ID
- `scripts` — token-scan.js 等脚本路径
- `output` — 报告输出目录、模板、CSS
- `deploy` — 部署仓库路径

**配置校验**：
- 检查 `app.path` 是否存在
- 检查 Figma PAT（`$FIGMA_PAT` 环境变量）
- 检查 `scripts.tokenScan` 脚本是否存在

## 第二步：读取设计规范

```bash
# 用 Browser Agent 访问规范站
Browser Agent → 打开 config.design.specUrl
→ 提取关键数值：间距网格、字号体系、圆角规则、按钮尺寸、颜色 token
```

**同时**读取本地的 `config.design.specFile`（如果存在）获取结构化 token 数据。

提取的数值作为后续走查的**判断基准**。

## 第三步：代码扫描

```bash
# 解包 app.asar（如果还没解包）
npx @electron/asar extract <app.path> <app.extractDir>

# 运行 token 扫描，输出 JSON
node <scripts.tokenScan> <app.extractDir> --json /tmp/walkthrough-scan.json
```

从 JSON 中提取：

1. **Token 覆盖率** — 总体和各模块的使用率
2. **硬编码色值** — 按文件分组，统计数量和具体色值
3. **硬编码圆角** — 不在 4px 网格上的值
4. **硬编码字号** — 不在规范字号体系中的值
5. **文件级统计** — 每个文件的 token 数和硬编码数

这些数据直接填入报告的"代码扫描"Tab。

## 第四步：界面截图 & 交互

使用 **Computer Use** 操控桌面应用：

```
Task Progress:
- [ ] 打开应用，截取默认窗口状态
- [ ] 拖拽到最小窗口，截图（响应式测试）
- [ ] 全屏/最大化，截图
- [ ] 导航到目标页面
- [ ] 点击筛选器/下拉框/搜索框，截图交互状态
- [ ] 在输入框中输入文字，截图
- [ ] 快速连续点击操作，检查面板残留
- [ ] 滚动列表，截图
```

截图保存到 `config.output.screenshotDir` 目录。

## 第五步：Figma 设计稿对比（可选）

**前提**：`config.design.figmaPAT` 已配置，且目标页面有 `figmaNodeId`。

```bash
# 通过 Figma API 获取节点图片
curl -s -H "X-Figma-Token: $FIGMA_PAT" \
  "https://api.figma.com/v1/images/<fileKey>?ids=<nodeId>&format=png" \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['images'])"

# 下载 Figma 渲染图
curl -o /tmp/figma-compare.png "<imageUrl>"
```

将 Figma 截图与实际页面截图逐项对比：
- 布局结构差异
- 文字内容差异
- 颜色/样式差异
- 缺失/多余的元素
- 状态缺失（如"已停用"状态）

## 第六步：生成走查报告

参考 `config.output.reportTemplate`（`lingji-rescan-report.html`）的结构，生成新报告。

### 报告结构（4 个 Tab）

```
┌─────────────────────────────────────┐
│  [Logo] 项目名称 — 走查报告          │
│  走查时间 | 版本                      │
├─────────────────────────────────────┤
│  数据卡片（可点击跳转）               │
│  [覆盖率] [色值] [圆角] [字号] ...    │
├─────────────────────────────────────┤
│  总览(N) | 代码扫描(N) | 设计还原(N) | 待验证(N) │
├─────────────────────────────────────┤
│                                     │
│  Tab 内容                            │
│                                     │
└─────────────────────────────────────┘
```

### 总览 Tab
按优先级列出所有问题：
- **严重** — 功能不可用或大面积影响
- **中等** — 明显偏差但不影响功能
- **轻微** — 微小瑕疵

### 代码扫描 Tab
- 模块级汇总（覆盖率、各模块硬编码数）
- 文件级详情（哪个文件、多少处、具体值是什么）

### 设计还原 Tab
- 实际截图 vs Figma 截图对比
- 逐项标注差异

### 待验证 Tab
- 因环境限制未能测试的项目
- 需要人工确认的项

### 关键技术要点

1. **数据卡片跳转**：`onclick="switchTab('tabId', 'scrollTarget')"`，没有 onclick 的卡片不加 `cursor:pointer`
2. **Tab 栏吸顶**：`position: sticky; top: 0`
3. **品牌元素**：header 加 logo，hero 加吉祥物（如果配置了）
4. **问题编号连续**：总览 Tab 的问题从 #1 开始编号

## 第七步：部署

```bash
# 复制到部署目录
cp <报告文件> <deploy.repo>
cp <截图目录>/* <deploy.repo>/
# 提交并推送
cd <deploy.repo> && git add -A && git commit -m "walkthrough: <page> 走查报告" && git push
```

## 完整执行清单

```
Walkthrough Progress:
- [ ] 1. 读取 walkthrough-config.json
- [ ] 2. 验证环境和依赖
- [ ] 3. Browser Agent 访问规范站，提取基准数值
- [ ] 4. 解包 app.asar（如需）
- [ ] 5. 运行 token-scan.js，解析 JSON 结果
- [ ] 6. Computer Use 打开应用，截取各状态截图
- [ ] 7. 导航到目标页面，进行交互测试
- [ ] 8. Figma API 获取设计稿截图（如配置了）
- [ ] 9. 对比 Figma 截图与实际截图
- [ ] 10. 整理问题清单，分级
- [ ] 11. 生成 Tab 式 HTML 报告
- [ ] 12. 复制到部署目录，git push
```

## 参考文件

| 文件 | 用途 |
|------|------|
| `walkthrough-config.json` | 项目配置（必读） |
| `lingji-rescan-report.html` | 报告结构参考 |
| `walkthrough-v2.css` | 报告样式 |
| `scripts/token-scan.js` | Token 扫描脚本 |
| `lingee-walkthrough-spec.json` | 设计 Token 基准 |
| `Lingee-unified-page-generation-spec.md` | 统一页面生成规范 |
| `assets/lingee-logo.png` | 品牌 Logo |
| `assets/lingee-mascot.png` | 品牌吉祥物 |
