# 日历模块弹窗完整清单与 Tab 切换关闭策略

> 梳理范围：calendar 项目 Lingee 品牌桌面端所有弹窗/浮层/对话框  
> 分类依据：切换外层 Tab（日历/会议/AI速记）回来后，弹窗是否应自动关闭  
> 核心原则：**含用户正在编辑的数据 → 不关闭；无编辑数据 → 可关闭**

---

## 一、应在 Tab 切换时关闭的弹窗（23 个）

### 1.1 导航 / 工具类 Popover（8 个）

| # | 弹窗名称 | 触发方式 | 触发元素 | 触发事件 | 状态变量 | 触发器文件 | 弹窗组件文件 |
|---|---------|---------|---------|---------|---------|-----------|-------------|
| 1 | **迷你日历 Popover** | 点击 ViewHeader 左侧的**日期标题按钮**（如"2026年8月24日 今天 ∨"） | 带下拉箭头的日期文本 `<button>` | Popover `open/onOpenChange` | `isMiniCalendarPopoverOpen` | `viewHeader/ui/lingee/ViewHeaderView.tsx` | 内联 Popover，hook: `hooks/useMiniCalendarPopover.ts` |
| 2 | **"我的日历" Popover** | 点击 ViewHeader 右侧工具栏的 **CalendarCog 齿轮图标按钮** | `<CalendarCog />` 图标 `<button>` | Popover `open/onOpenChange` | `isSettingPopoverOpen` | `viewHeader/ui/lingee/ViewHeaderView.tsx` | `CalendarSidebar` 组件 |
| 3 | **更多日程 Popover (+N)** | 在**月视图/周视图**中，某天日程过多时显示"更多 N 项"按钮，点击该按钮 | `<button>更多{count}项</button>` | `onClick` → `setHostedMoreEventsPopover` | `hostedMoreEventsPopover`（CalendarRoot 层） | `monthView/ui/lingee/WeekComponentView.tsx` (L360-396) | `components/moreEventsPopover/index.tsx` |
| 4 | **重复编辑范围 Popover** | 在 EventPanel 查看**循环日程**时，点击头部**编辑图标按钮**，弹出"仅此次/此后所有"选择 | 编辑图标 `<button>` | Popover `open/onOpenChange` | `showRepeatEditPopover` | `eventPanel/ui/lingee/EventPanelView.tsx` (L718-742) | 内联 Popover |
| 5 | **更多操作 Popover** | 在 EventPanel 头部点击 **"…"三点按钮** | `<ThreeDots />` 图标 | `onClick` → `setShowMoreActionsPopover` | `showMoreActionsPopover` | `eventPanel/ui/lingee/EventPanelView.tsx` | 内联 Popover |
| 6 | **拒绝理由 Popover** | 在 EventPanel 底部操作栏点击 **"拒绝"按钮** | "拒绝"文本 `<button>` | `onClick` → `handleDecline` | `showRefuseReasonSheet` | `eventPanel/ui/lingee/EventPanelView.tsx` (L335-354) | 内联 Popover/Sheet |
| 7 | **日历选择器 Popover** | 在**日程编辑对话框**中，点击**日历归属下拉**（选择日程属于哪个日历） | DatePicker 的 trigger 区域 | lingee-ui DatePicker 内部管理 | 组件内部 state | `eventDialog/EventTimeSection/` | lingee-ui DatePicker 内置下拉 |
| 8 | **忙闲视图日期 Popover** | 在**日程编辑 → 忙闲视图** Tab 中，点击**日期单元格**查看该日详情 | 日期数字 `<button>` | `onClick` | FreeBusy 相关 state | `eventDialog/EventFreeBusyDayView.tsx` | 内联 Popover |

### 1.2 侧边栏菜单类（2 个）

| # | 弹窗名称 | 触发方式 | 触发元素 | 触发事件 | 状态变量 | 触发器文件 | 弹窗组件文件 |
|---|---------|---------|---------|---------|---------|-----------|-------------|
| 9 | **日历广场管理菜单** | 在**日历广场**页面，点击日历卡片上的 **"管理"按钮**或卡片右上角"…" | 卡片操作按钮 | `onClick` | `deleteConfirmOpen` 等 | `views/common/calendarSquare/` | 内联 Dropdown |
| 10 | **CalendarSidebar 更多菜单** | 在左侧**日历侧边栏**中，鼠标悬浮到日历项时出现的 **"…"三点按钮** | `<Ellipsis />` DropdownTrigger | Dropdown `open/onOpenChange` | 每项本地 `open` state | `viewHeader/calendarSidebar/ui/lingee/DesktopCalendarSidebarView.tsx` (L43-114) | lingee-ui Dropdown 面板，含：分享、创建代理事件、申请代建、日历设置、取消关注、改色等菜单项 |

### 1.3 确认对话框类（10 个）

| # | 弹窗名称 | 触发方式 | 触发元素 | 触发事件 | 状态变量 | 触发器文件 | 弹窗组件文件 |
|---|---------|---------|---------|---------|---------|-----------|-------------|
| 11 | **删除确认对话框** | 在 EventPanel 点击 **"删除"按钮**（Trash 图标） | `<Trash />` 图标按钮 | `onClick` → `handleMeetingAction` | `showDeleteAlert` | `eventPanel/ui/lingee/EventPanelView.tsx` (L839-856) | ConfirmDialog 组件 |
| 12 | **放弃编辑确认** | 在 EventPanel **编辑模式下**，点击**关闭按钮**或**切换到其他操作**时弹出 | 关闭按钮 / 切换操作 | `onChange` / closing 事件 | `showUnsavedAlert` | `eventPanel/ui/lingee/EventPanelView.tsx` (L883-893) | ConfirmDialog 组件 |
| 13 | **发起群聊确认** | 在 EventPanel 点击 **"发起群聊"按钮** | `<ChatDots />` 图标 + 文本 | `onClick` → `requestStartGroupChatConfirm` | `showGroupChatConfirm` | `eventPanel/ui/lingee/EventPanelView.tsx` (L894-912) | ConfirmDialog 组件 |
| 14 | **任务完成确认** | 在 EventPanel 查看项目任务时，点击 **"完成任务"按钮** | `<CompleteActionIcon />` | `onClick` | `showProjectTaskCompleteAlert` | `eventPanel/ui/lingee/EventPanelView.tsx` (L857-868) | ConfirmDialog 组件 |
| 15 | **任务废弃确认** | 在 EventPanel 查看项目任务时，点击 **"废弃任务"按钮** | `<Trash />` 图标 | `onClick` | `showProjectTaskDiscardAlert` | `eventPanel/ui/lingee/EventPanelView.tsx` (L869-880) | ConfirmDialog 组件 |
| 16 | **切换日历确认** | 在**日程编辑对话框**中，更改日程所属日历时弹出 | 日历下拉选择不同日历 | `onChange` | `showCalendarChangeConfirm` | `eventDialog/hooks/useEventEditViewModel.ts` (L588) | ConfirmDialog 组件 |
| 17 | **过去时间确认** | 在**日程编辑对话框**中，将结束时间设置为过去时间后点击**保存** | "保存"按钮 | `onClick`，提交时检查 `isPastEventRange` | `showPastTimeConfirm` | `eventDialog/hooks/useEventEditViewModel.ts` (L589) | ConfirmDialog 组件 |
| 18 | **申请代建确认** | 在**日历侧边栏**的日历项菜单中，点击 **"申请代建"** | 菜单项"申请代建" | `onSelect` | `useOpenApplyCreateApprovalDialog` hook | `calendarSidebar/ui/lingee/DesktopCalendarSidebarView.tsx` (L67-74) | `CalendarRoot.tsx` (L180, L911) |
| 19 | **取消关注确认** | 在**日历侧边栏**的日历项菜单中，点击 **"取消关注"** | 菜单项"取消关注" | `onSelect` → `onRequestUnfollowConfirm` | 侧边栏本地 state | `calendarSidebar/ui/lingee/DesktopCalendarSidebarView.tsx` (L80-87) | ConfirmDialog 组件 |
| 20 | **催办确认** | 在**与会人列表对话框**中，对未响应的参会人点击 **"催办"按钮** | "催办"文本 `<button>` | `onClick` | 对话框本地 state | `participantsDialog/ui/lingee/ParticipantsDialogView.tsx` | ConfirmDialog 组件 |

### 1.4 信息展示对话框类（3 个）

| # | 弹窗名称 | 触发方式 | 触发元素 | 触发事件 | 状态变量 | 触发器文件 | 弹窗组件文件 |
|---|---------|---------|---------|---------|---------|-----------|-------------|
| 21 | **与会人列表对话框** | 在 **EventPanel/EventDetail** 中，点击**参会人数量**或参会人头像区域 | 参会人计数文本 / 头像组 | `onClick` | 对话框 `open` prop | `eventDetail/index.tsx` | `participantsDialog/index.tsx` → `ParticipantsDialogView.tsx` |
| 22 | **组织人列表对话框** | 在 **EventPanel/EventDetail** 中，点击**组织者名称** | 组织者名称文本 | `onClick` | 对话框 `open` prop | `eventDetail/index.tsx` | 复用 participants 组件 |
| 23 | **签到码对话框** | 在 **EventPanel/EventDetail** 中，点击**签到码入口** | 签到码链接 / 按钮 | `onClick` | 对话框 `open` prop | `eventDetail/index.tsx` | `eventDetail/CheckInQRCode.tsx` 或 `MobileCheckinQRCodeView.tsx` |

---

## 二、不应在 Tab 切换时关闭的弹窗（8 个）

> 这些弹窗包含用户正在编辑的表单数据，关闭会导致数据丢失。

| # | 弹窗名称 | 触发方式 | 触发元素 | 触发事件 | 状态变量 | 不关闭原因 | 文件位置 |
|---|---------|---------|---------|---------|---------|-----------|---------|
| 1 | **日程编辑对话框 (EventEdit)** | ① **双击**日程网格空白区域 ② 点击 ViewHeader **"新建"按钮** ③ 在 EventPanel 点击**编辑图标** | 日程网格 / "新建"按钮 / 编辑图标 | `onDoubleClick` / `onClick` | `dialogEdit`（EventEdit 组件） | 用户可能已填写标题、时间、参会人、地点、描述等 | 入口: `CalendarRoot.tsx`; 组件: `eventDialog/EventEdit.tsx` → `ui/lingee/EventEditView.tsx`; Hook: `hooks/useEventEditViewModel.ts` |
| 2 | **日程详情/编辑面板 (EventPanel 编辑模式)** | 先**单击**日程打开详情面板，再点击面板中的**编辑图标**切换到编辑模式 | 日程卡片 → 编辑图标 | `onClick` | `editType = EditType.Edit` | 编辑模式含完整表单（标题、时间、参会人、提醒等） | `eventPanel/index.tsx` → `ui/lingee/EventPanelView.tsx` |
| 3 | **腾讯会议设置子对话框** | 在 **EventEdit 日程编辑对话框**中，勾选"腾讯会议"后点击**会议设置按钮** | 腾讯会议设置链接/按钮 | `onClick` | `showTencentMeetingSettingsDialog` (L590) | 用户正在配置会议密码、等候室、安全选项等 | `eventDialog/hooks/useEventEditViewModel.ts` |
| 4 | **发布日历对话框** | 在**日历广场**页面，点击**"创建日历"按钮**或已有日历的**"编辑"按钮** | "创建日历"/"编辑"按钮 | `onClick` | `useCalendarSquareViewModel` 中管理 | 用户正在编辑日历名称、描述、封面、订阅范围等 | `viewHeader/publishCalendar/ui/lingee/PublishCalendarDialogView.tsx`; 状态: `views/common/calendarSquare/hooks/useCalendarSquareViewModel.ts` |
| 5 | **日历设置对话框** | 在**日历侧边栏**中，点击某个日历的**"设置"按钮**（齿轮图标） | `<Settings />` 图标 / "设置"文本 | `onClick` → `onOpenSettings` | Dialog `open` prop | 用户正在修改日历颜色、名称、共享权限、默认提醒等 | 触发: `calendarSidebar/ui/lingee/DesktopCalendarSidebarView.tsx` (L184-197); 组件: `viewHeader/ui/lingee/CalendarSettingsDialogView.tsx` |
| 6 | **申请代建审批对话框** | 在日历侧边栏菜单点击**"申请代建"**后，确认申请 → 弹出审批表单 | "申请代建"确认后的表单弹窗 | 确认后自动打开 | `useOpenApplyCreateApprovalDialog` hook 管理 | 用户正在填写审批表单（审批人、理由等） | Hook: `hooks/useOpenApplyCreateApprovalDialog.tsx`; 渲染: `CalendarRoot.tsx` (L911) |
| 7 | **AI 速记弹窗** | 点击 ViewHeader 或侧边栏的 **"AI速记"入口按钮**，打开独立窗口 | "AI速记"/"新建速记"按钮 | `onClick` → `openAiNotesDialog()` | `useOpenQingDialog` 管理的外部窗口 | 可能正在进行录音，独立窗口不受 Tab 切换影响 | `hooks/useOpenAiNotesDialog.ts`，通过 `openQingDialog` 打开外部窗口 |
| 8 | **外部 Qing 弹窗** | 通过多个入口打开的**宿主容器弹窗**（如会议室选择、任务编辑、全局设置等） | 各种入口按钮 | `onClick` → `useOpenQingDialog()` | `useOpenQingDialog` 管理 | 由宿主容器管理生命周期，calendar 项目无法控制其关闭 | `hooks/useOpenQingDialog.ts`，被多处引用 |

---

## 三、特殊情况（3 个）

| # | 弹窗名称 | 触发方式 | 当前行为 | 建议 | 说明 |
|---|---------|---------|---------|------|------|
| 1 | **EventPanel 查看模式** | **单击**日程卡片打开详情面板 | 切 Tab 后关闭 | ✅ **可以关闭** | 仅展示日程详情（时间、地点、参会人），无编辑数据，状态: `detailPanelEventId`（CalendarRoot L185-221） |
| 2 | **EventPanel 编辑模式** | 查看模式下点击**编辑图标** | 切 Tab 后保留 | ❌ **不能关闭** | 含表单数据，同"日程详情/编辑面板" |
| 3 | **安全验证二维码对话框** | 执行需要安全校验的操作时自动弹出 | 切 Tab 后保留 | ❌ **不建议关闭** | 正在进行安全校验流程，关闭会中断验证。组件: `securityQRCodeDialog/index.tsx`，Hook: `useSecurityQRCodeVerification` |

---

## 四、Tab 切换感知机制

calendar 项目通过以下方式感知外层 Tab 切换：

```
// 监听页面重新出现（从其他 Tab 切回日历）
subscribeQingEvent("appear", () => {
  // 刷新数据、关闭轻量弹窗
});

// 监听页面离开（切到其他 Tab）
subscribeQingEvent("disappear", () => {
  // 停止轮询等
});
```

- 关键文件：`hooks/useCalendarRuntimeController.ts`、`hooks/useRightPanel.ts`
- 兜底方案：`document.visibilitychange` 事件

**已实现的关闭逻辑**（会话 `a14a2471` 中修复）：
- `useViewHeaderViewModel.tsx` 中订阅 `appear` 事件，自动关闭"迷你日历 Popover"和"我的日历 Popover"

---

## 五、状态管理架构

| 管理层级 | 管理的弹窗 | 文件 |
|---------|-----------|------|
| `CalendarRoot` | EventPanel 全局状态、MoreEventsPopover | `core/CalendarRoot.tsx` |
| `useViewHeaderViewModel` | 迷你日历、我的日历 Popover | `viewHeader/hooks/useViewHeaderViewModel.tsx` |
| `useEventPanelViewModel` | EventPanel 所有子弹窗（13+个状态变量） | `eventPanel/hooks/useEventPanelViewModel.ts` |
| `useEventEditViewModel` | EventEdit 所有子弹窗（5+个状态变量） | `eventDialog/hooks/useEventEditViewModel.ts` |
| `useCalendarSquareViewModel` | 日历广场相关弹窗 | `views/common/calendarSquare/hooks/useCalendarSquareViewModel.ts` |
| 组件本地 state | Sidebar 菜单、广场卡片菜单等 | 各组件文件内 |
| `useOpenQingDialog` | 外部宿主弹窗（AI速记、会议室等） | `hooks/useOpenQingDialog.ts` |

---

## 六、统计汇总

| 类别 | 数量 | Tab 切换时行为 |
|------|:----:|--------------|
| 导航/工具类 Popover | 8 | ✅ 关闭 |
| 侧边栏菜单类 | 2 | ✅ 关闭 |
| 确认对话框类 | 10 | ✅ 关闭 |
| 信息展示对话框类 | 3 | ✅ 关闭 |
| 含编辑数据的 Dialog | 6 | ❌ 保留 |
| 外部独立窗口 | 2 | ❌ 不受影响 |
| 特殊情况 | 3 | 视情况而定 |
| **总计** | **34** | — |
