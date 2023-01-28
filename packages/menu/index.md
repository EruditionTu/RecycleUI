---
title: Menu
nav:
  title: Components
  path: /components
group:
  title: Navigation
---

# Menu

A versatile menu for navigation.

## When To Use

Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently. Ant Design offers two navigation options: top and side. Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website.

## Notes for developers

* MenuDivider，MenuItem，SubMenu，MenuGroup must be used in Menu。

## Top Navigation

Horizontal top navigation menu.

<code src='./demo/headNav.tsx'/>


## Inline menu

Vertical menu with inline submenus.

<code src='./demo/inline.tsx' />

## Collapsed inline menu

Inline menu could be collapsed.

<code src='./demo/collapsed.tsx'/>

## Open current submenu only

Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.

<code src='./demo/onlyCurFather.tsx'/>

## Vertical menu

Submenus open as pop-ups.


<code src='./demo/vertical.tsx' />

## Menu Themes


There are two built-in themes: light and dark. The default value is light.

<code src='./demo/theme.tsx'/>

## Sub-menu theme


You can config SubMenu theme with theme prop to enable different theme color effect. This sample is dark for root and light for SubMenu.

<code src='./demo/subTheme.tsx'/>

## Switch the menu type

Show the dynamic switching mode (between inline and vertical).

<code src='./demo/changeType.tsx'/>

## API


### Menu API

| Name      | Description      | Type                                       | Default   |
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


