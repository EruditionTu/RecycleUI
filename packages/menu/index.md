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
| className        |The class style of the root node  | `string`         | ` ` |
| defaultOpenKeys        | Array with the keys of default opened sub menus when menu if inline mode| `string[]`         | `--` |
defaultSelectedKeys    | Array with the keys of default selected menu items   | `string[]` | `--`   |
| expendIcon        | custom expand icon of submenu        | `ReactNode`    | `--` |
| forceSubMenuRender    | Render submenu into DOM before it becomes visible when menu is not inline mode| `boolean` | `false`   |
| inlineCollapsed	      | Specifies the collapsed status when menu is inline mode   | `boolean`                   | `false`   |
| inlineIndent     | Indent (in pixels) of inline menu items on each level    | `number` | `24`|
| items        | 	Menu item content       | `ItemType[]` | `[]`   |
| mode | Type of menu | `vertical\horizontal\inline`   | `inline`      |
| multiple    | Allows selection of multiple items  | `boolean` | `false`    |
| openKeys     | Array with the keys of currently opened sub-menus when menu is inline mode  | `string[]` | `[]` |
| overflowedIndicator     | Customized the ellipsis icon when menu is collapsed horizontally  | `ReactNode` | `...`    |
| selectable     | Allows selecting menu items  | `boolean` | `true`    |
| selectedKeys     | Array with the keys of currently selected menu items  | `string[]` | `[]`    |
| style     | Root node style  | `CSSProperties` | `{}`    |
| subMenuCloseDelay     |  When the user's mouse leaves the submenu in non-inline mode and the trigger mode is hover, the closing delay is in milliseconds | `number` | `300`    |
| subMenuOpenDelay     | When the user's mouse enters the submenu in non-inline mode and the trigger mode is hover, the start delay is in milliseconds  | `number` | `300`    |
| theme     | Color theme of the menu  | `light\dark` | `light`    |
| triggerSubMenuAction     | Which action can trigger submenu open/close  | `hover\click` | `hover`    |
| onClick     | Called when a menu item is clicked  | `function({ item, key, keyPath, domEvent })` | `()=>{}`    |
| onDeselect     |Called when a menu item is deselected (multiple mode only)  | `function({ item, key, keyPath, selectedKeys, domEvent })` | `()=>{}`    |
| onOpenChange     | Callback for SubMenu expansion/closing in inline mode, and openKeys cannot trigger the execution of this function  | `function(openKeys: string[])` | `()=>{}`    |
| onSelect     | 	Called when selected  | `function({ item, key, keyPath, selectedKeys, domEvent })` | `()=>{}`    |

### MenuItem API

| Name      | Description      | Type                                      | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| disabled    | Whether menu item is disabled   | `boolean` | `false`   |
| icon        | The icon of the menu item         | `ReactNode`    | `--` |
| value    | Unique identifier of item (key can also be used as the unique identifier, and the priority of key will be higher, otherwise the component will generate one by itself, which will consume performance) | `string\number` | `--`   |
| label    | Menu label | `ReactNode` | `--`   |
| title    | Set display title for collapsed item | `string` | ` `   |

### SubMenu API

| Name      | Desscription      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| disabled    | Whether sub-menu is disabled   | `boolean` | `false`   |
| icon        |    	Icon of sub menu      | `ReactNode`    | `--` |
| value    | Unique identifier of item (key can also be used as the unique identifier, and the priority of key will be higher, otherwise the component will generate one by itself, which will consume performance) | `string\number` | `--`   |
| label    | Menu label | `ReactNode` | `--`   |
| popupClassName    |Sub-menu class name, not working when mode="inline" | `string` | `--`   |
| popupStyle    | Sub-menu style, not working when mode="inline" | `CSSProperties` | ` {}`   |
| onTitleClick    | 	Callback executed when the sub-menu title is clicked | `function({ key, domEvent })` | `()=>{}`   |
| theme    | Color theme of the SubMenu (inherits from Menu by default) | `light\dark` | `light`   |


### MenuGroup API

| Name      | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| label    | The title of the group  | `ReactNode` | `--`   |

### MenuDivider API
| Name      | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| dashed    | Whether line is dashed   | `boolean` | `false`   |

⚠，same key error。


