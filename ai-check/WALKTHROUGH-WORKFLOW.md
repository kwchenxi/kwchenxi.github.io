# AI UI 走查 — 使用流程

> 每次走查按以下流程执行，方括号 `[ ]` 内为默认值（灵基），换项目时替换。

---

## 0. 项目信息确认

每次走查前先确认/修改 `walkthrough-config.json` 中的以下字段：

| 字段 | 说明 | 默认值（灵基） |
|------|------|----------------|
| `project.name` | 项目名称 | `金蝶灵基` |
| `project.version` | 应用版本 | `v0.1.3` |
| `app.type` | 应用类型 | `electron`（Web 应用填 `web`） |
| `app.path` | asar 路径（Electron 专属） | `/Applications/金蝶灵基.app/Contents/Resources/app.asar` |
| `design.specUrl` | 设计规范站地址 | `https://kingdee.github.io/lingee-ui` |
| `design.specFile` | Token 规范 JSON | `lingee-walkthrough-spec.json` |
| `design.unifiedSpecMd` | Figma 合约 MD 文件 | `Lingee-unified-page-generation-spec.md` |
| `design.figmaUrl` | Figma 设计稿链接 | `https://www.figma.com/design/4pDYsPKRBSOGm66x6CGq0A/...` |
| `pages` | 要检查的页面列表 | meeting / chat / calendar / task |

> **换项目时**：修改以上字段即可，其余流程不变。

---

## 1. 读取设计规范

```
输入：design.specUrl + design.unifiedSpecMd
工具：Browser Agent
产出：走查基准数值（间距、字号、圆角、颜色 Token 等）
```

**操作**：AI 访问设计规范站，提取关键数值，与 `lingee-walkthrough-spec.json` 交叉验证。

**换项目时**：提供新的规范站 URL 和规范文件。

---

## 2. 代码扫描（静态分析）

```
输入：app.path（app.asar 路径）
工具：@electron/asar + scripts/token-scan.js
产出：硬编码统计 JSON + HTML 报告
```

**步骤**：

```bash
# 2.1 解包 app.asar
npx @electron/asar extract "[app.path]" ./lingee-extracted

# 2.2 运行 Token 扫描（使用走查配置，自动读取 spec 中的 Token 定义）
node scripts/token-scan.js ./lingee-extracted --config walkthrough-config.json --html --json result.json

# 2.2b 或使用自定义 Token 前缀的新项目
node scripts/token-scan.js ./src --token-prefix --ds- --config my-spec.json --html
```

**产出内容**：
- 硬编码颜色数量及文件位置
- 非 Token 圆角/字号统计
- Token 覆盖率（按模块）

**Web 应用**：跳过此步（无 asar），改为扫描项目源码目录。

**换项目时**：
- 替换 `app.path` 指向新的 `.app` 或 `.asar`
- 提供新项目的 spec.json（包含 `design_tokens` 字段），用 `--config` 加载即可
- 如 Token 变量前缀不同（非 `--lg-*`），用 `--token-prefix` 指定，无需改代码

---

## 3. 界面截图 & 交互（Computer Use）

```
输入：已安装的目标应用
工具：Computer Use
产出：多状态截图（存入 screenshots/ 目录）
```

**每个页面截取以下状态**：

| 状态 | 说明 |
|------|------|
| 默认窗口 | 应用启动后的初始状态 |
| 最小窗口 | 拖到最窄，检查响应式 |
| 最大窗口 | 全屏/最大化，检查拉伸 |
| 输入聚焦 | 输入框 focus 态 |
| 空状态 | 无数据时的展示 |
| 列表/滚动 | 有数据时的列表渲染和滚动行为 |
| 右键/下拉 | 上下文菜单、下拉选择等交互态 |
| 加载中 | loading 状态截图 |

**换项目时**：无需改动，Computer Use 通用。只需告诉 AI 要检查哪些页面。

---

## 4. Figma 设计稿对比（可选）

```
输入：design.figmaUrl + Figma PAT
工具：Figma API
产出：设计稿截图 + 差异标注
```

**步骤**：
1. 通过 Figma API 获取指定 page/node 的设计截图
2. 与步骤 3 的实际截图进行视觉对比
3. 标注差异区域（布局偏差、状态缺失、命名不规范等）

**换项目时**：替换 Figma 链接和 file key。

---

## 5. 生成走查报告

```
输入：步骤 1-4 的所有数据
模板：walkthrough-template-v2.html + walkthrough-v2.css
产出：独立的 HTML 走查报告
```

**报告包含**：
- 综合评分（A/B/C/D/F）+ 各维度评分
- 问题清单（严重/中等/轻微分级）
- 文件级定位（哪个文件、哪个值要改）
- Token 覆盖率数据
- Figma 还原对比截图

**11 维度走查框架**（定义在 `lingee-walkthrough-spec.json` 的 `walkthrough_dimensions`）：

| 层级 | 维度 | 权重 |
|------|------|------|
| L1 基础 | 响应式布局、设计规范对照 | ×0.4 |
| L2 进阶 | 极限边界、暗黑模式、空状态/错误、焦点/键盘 | ×0.35 |
| L3 深度 | 国际化、无障碍、Token 绑定、Variant 完整性、跨页面一致性 | ×0.25 |

**换项目时**：报告模板和评分体系通用，无需修改。

---

## 6. 部署（可选）

```bash
# 将报告复制到部署目录
cp [报告文件].html /tmp/kwchenxi.github.io/ai-check/

# 本地预览
cd ai-check && python3 -m http.server 8765
# 访问 http://localhost:8765
```

---

## 快速参考：换项目 Checklist

| # | 要改的东西 | 改在哪里 |
|---|-----------|--------|
| 1 | 项目名称、版本 | `walkthrough-config.json` → `project` |
| 2 | 应用路径（Electron）或 URL（Web） | `walkthrough-config.json` → `app` |
| 3 | 设计规范站地址 | `walkthrough-config.json` → `design.specUrl` |
| 4 | Token 规范 JSON | 新建一份 spec.json，替换 `design.specFile` |
| 5 | Figma 链接（可选） | `walkthrough-config.json` → `design.figmaUrl` |
| 6 | 待检查页面列表 | `walkthrough-config.json` → `pages` |
| 7 | Token 变量前缀（如不是 `--lg-*`） | CLI 参数 `--token-prefix` 或 config 中的 `design.tokenPrefix` |

---

## 注意事项

1. **macOS Electron 应用**：Playwright 无法注入已签名应用，使用静态分析（步骤 2）替代运行时扫描
2. **Windows / 未签名 Electron**：可直接用 Playwright Electron API 做运行时扫描，精度更高
3. **Web 应用**：直接用 Playwright，跳过 asar 解包，直接扫描 DOM
4. **Token 扫描工具**（`token-scan.js`）零外部依赖，纯 Node.js，任何项目都能跑
5. **Computer Use** 不限制应用类型，桌面端、Web 均可
