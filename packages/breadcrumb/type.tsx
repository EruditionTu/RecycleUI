import { HTMLAttributes } from 'react';

export type ElementTag<T = any> = T extends HTMLElement ? HTMLAttributes<T> : T;

export type RefElement<T = HTMLSpanElement> = T extends HTMLElement ? T : never;
export interface BreadcrumbItemProps extends ElementTag {
  // 弹出下拉菜单的自定义配置，之后会加上
  dropdownProps?: any;
  // 菜单配置项，之后会加上
  menu?: any;
  haveSeparator?: boolean;
  href?: string;
  separator?: JSX.Element | string;
  active?: boolean;
}

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  separator?: JSX.Element | string;
}

export default BreadcrumbProps;
