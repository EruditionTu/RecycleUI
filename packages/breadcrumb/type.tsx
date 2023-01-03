import { HTMLAttributes } from 'react';

export type ElementTag<T = any> = T extends HTMLElement ? HTMLAttributes<T> : T;

export type RefElement<T = HTMLSpanElement> = T extends HTMLElement ? T : never;
export interface BreadcrumbItemProps<T = any> extends ElementTag {
  tagName?: T extends HTMLElement ? keyof JSX.IntrinsicElements : T;
  separator?: JSX.Element | string;
  active?: boolean;
  'data-separator'?: JSX.Element | string;
}

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  separator?: JSX.Element | string;
}

export default BreadcrumbProps;
