import { ReactNode } from "react";
export interface MenuItemObjectTypes {
  danger?: boolean; //展示错误状态样式
  disabled?: boolean; //是否禁用
  icon?: ReactNode; //菜单图标
  title?: string; //设置收缩时展示的悬浮标题
  label?: ReactNode | string; //菜单项标题
  name?: string; //Item的唯一标识
}
export interface MenuItemPropTypes extends MenuItemObjectTypes {
  path: Array<string>; //路径
  index: number; //下标
}
