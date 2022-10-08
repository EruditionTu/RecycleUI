import { ReactNode } from "react";
import { ItemObject } from "./MenuTypes";
export interface SubMenuObjectTypes {
  disabled?: boolean; //是否禁用
  icon?: ReactNode; //菜单图标
  label?: ReactNode | string; //菜单项标题
  popupOffset?: [number, number]; //子菜单偏移量
  onTitleClick?: Function; //点击子菜单标题
  theme?: "dark" | "light"; //子菜单主题
}
export interface SubMenuPropTypes extends SubMenuObjectTypes {
  name?: string;
  children?: ItemObject[];
  index: number;
  path?: Array<string>; //sub子菜单的路径
}

export interface PopupTypes {
  path?: Array<string>; //子菜单的路径
  index?: number; //子孙弹窗弹窗的下标，第一层弹窗没有
  depth?: number; //弹窗的深度
  children?: Array<any>; //弹窗中渲染的项目
  actived?: boolean; //弹窗是否活跃/展示
  name?: string; //弹窗的名字
}
