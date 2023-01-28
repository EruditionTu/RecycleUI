---
title: Menu 菜单
nav:
  title: 组件
  path: /components
group:
  title: 导航
---


# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 开发者注意事项

* MenuDivider，MenuItem，SubMenu，MenuGroup等组件都应该在Menu中使用。

## 顶部导航

水平的顶部导航菜单。

<code src='./demo/headNav.tsx'/>


## 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

<code src='./demo/inline.tsx' />

## 缩起内嵌菜单

内嵌菜单可以被缩起/展开。

<code src='./demo/collapsed.tsx'/>

## 只用展开当前父级菜单

点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

<code src='./demo/onlyCurFather.tsx'/>

## 垂直菜单

子菜单是弹出的形式。

<code src='./demo/vertical.tsx' />

## 主题

内建了两套主题 light 和 dark，默认 light。

<code src='./demo/theme.tsx'/>

## 子菜单主题

你可以通过 theme 属性来设置 SubMenu 的主题从而达到不同目录树下不同主题色的效果。该例子默认为根目录深色，子目录浅色效果。

<code src='./demo/subTheme.tsx'/>

## 切换菜单类型

展示动态切换模式。

<code src='./demo/changeType.tsx'/>

## API


### Menu API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | 根节点的class样式 | `string`         | ` ` |
| defaultOpenKeys        | inline模式初始展开的 SubMenu 菜单项 key 数组 | `string[]`         | `--` |
| defaultOpenKeys    | 初始选中的菜单项 key 数组   | `string[]` | `--`   |
| expendIcon        | 自定义展开图标         | `ReactNode`    | `--` |
| forceSubMenuRender    | 在子菜单展示之前就渲染进 DOM（子菜单为弹窗形式时） | `boolean` | `false`   |
| inlineCollapsed	      | inline 时菜单是否收起状态   | `boolean`                   | `false`   |
| inlineIndent     | inline 模式的菜单缩进宽度    | `number` | `24`|
| items        | 菜单内容       | `ItemType[]` | `[]`   |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical\horizontal\inline`   | `inline`      |
| multiple    | 是否允许多选  | `boolean` | `false`    |
| openKeys     | inline模式当前展开的 SubMenu 菜单项 key 数组  | `string[]` | `[]` |
| overflowedIndicator     | 用于自定义 Menu 水平空间不足时的省略收缩的图标  | `ReactNode` | `...`    |
| selectable     | 是否允许选中  | `boolean` | `true`    |
| selectedKeys     | 当前选中的菜单项 key 数组  | `string[]` | `[]`    |
| style     | 根节点样式  | `CSSProperties` | `{}`    |
| subMenuCloseDelay     | 非inline模式，且触发模式为hover时用户鼠标离开子菜单后关闭延时，单位：毫秒  | `number` | `300`    |
| subMenuOpenDelay     | 非inline模式，且触发模式为hover时用户鼠标进入子菜单后开启延时，单位：毫秒  | `number` | `300`    |
| theme     | 主题颜色  | `light\dark` | `light`    |
| triggerSubMenuAction     | 非inline模式的SubMenu 展开/关闭的触发行为  | `hover\click` | `hover`    |
| onClick     | 点击 MenuItem 调用此函数  | `function({ item, key, keyPath, domEvent })` | `()=>{}`    |
| onDeselect     | 取消选中时调用，仅在 multiple 生效  | `function({ item, key, keyPath, selectedKeys, domEvent })` | `()=>{}`    |
| onOpenChange     | inline模式下SubMenu 展开/关闭的回调，且openKeys不能触发这个函数的执行  | `function(openKeys: string[])` | `()=>{}`    |
| onSelect     | 	被选中时调用  | `function({ item, key, keyPath, selectedKeys, domEvent })` | `()=>{}`    |

### MenuItem API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| disabled    | 是否禁用   | `boolean` | `false`   |
| icon        | 菜单图标         | `ReactNode`    | `--` |
| value    | item 的唯一标志（也可以使用key作为唯一标识，key的优先级会更高，否则组件内部会自己生成一个，耗费性能） | `string\number` | `--`   |
| label    | 菜单项标题 | `ReactNode` | `--`   |
| title    | 设置收缩时展示的悬浮标题 | `string` | ` `   |

### SubMenu API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| disabled    | 是否禁用   | `boolean` | `false`   |
| icon        | 菜单图标         | `ReactNode`    | `--` |
| value    | item 的唯一标志（也可以使用key作为唯一标识，key的优先级会更高，否则组件内部会自己生成一个，耗费性能） | `string\number` | `--`   |
| label    | 菜单项标题 | `ReactNode` | `--`   |
| title    | 设置收缩时展示的悬浮标题 | `string` | ` `   |
| popupClassName    | 子菜单样式，mode="inline" 时无效 | `string` | `--`   |
| popupStyle    | 子菜单样式，mode="inline" 时无效 | `CSSProperties` | ` {}`   |
| onTitleClick    | 点击子菜单标题 | `function({ key, domEvent })` | `()=>{}`   |
| theme    | 设置子菜单的主题，默认从 Menu 上继承 | `light\dark` | `light`   |


### MenuGroup API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| label    | 分组标题   | `ReactNode` | `--`   |

### MenuDivider API
| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| dashed    | 是否虚线   | `boolean` | `false`   |

⚠，same key error。


