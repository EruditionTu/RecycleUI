import { ReactNode } from "react";
import { MenuItemObjectTypes } from "./MenuItemTypes";
import { SubMenuObjectTypes } from "./SubMenuTypes";
export type ModeTypes = "vertical" | "horizontal" | "inline"; //Menu的模式
export type ThemeTypes = "light" | "dark"; //Menu的主题
export type TriggerSubMenuActionTypes = "hover" | "click"; //SubMenu展开关闭的触发形式
export type ItemObject = MenuItemObjectTypes &
  SubMenuObjectTypes & {
    key: string;
    type: string; //("MenuItem"|"SubMenu"|"MenuItemGroup"|"MenuDivider"),
    children?: Array<ItemObject>;
  };
export interface MenuAttributesType {
  items: ItemObject[]; //渲染的菜单项
  mode?: ModeTypes; //Menu的模式
  theme?: ThemeTypes; //Menu的主题
  defaultOpenKeys?: Array<string>; //初始展开的SubMenu菜单项
  defaultSelectedKeys?: Array<string>; //初始选中的MenuItem菜单项
  triggerSubMenuAction?: TriggerSubMenuActionTypes; //SubMenu展开/关闭的触发行为
  expandIcon?: ReactNode; //自定义展开图标
  multiple?: boolean; //是否允许多选
  forceSubMenuRender?: Boolean; //在子菜单展示之前就渲染进Dom
  inlineCollapsed?: Boolean; //inline时菜单是否收起状态
  inlineIndent?: number; //inline 模式的菜单缩进宽度
  openKeys?: Array<string>; //当前展开的SubMenu菜单项
  overflowedIndicator?: ReactNode; //用于自定义 Menu 水平空间不足时的省略收缩的图标
  selectable?: boolean; //是否允许选中
  selectedKeys?: Array<string>; //当前选中的菜单项key数组
  subMenuCloseDelay?: number; //用户鼠标离开子菜单后关闭延时，单位：秒
  subMenuOpenDelay?: number; //用户鼠标进入子菜单后开启延时，单位：秒
}
export interface MenuEventsType {
  onClick?: (e: { item; key; keyPath; domEvent }) => void;
  onSelect?: (e: { item; key; keyPath; selectedKeys; domEvent }) => void;
  onOpenChange?: (openKeys: string[]) => void;
  onDeselect?: (e: { item; key; keyPath; selectedKeys; domEvent }) => void;
}
