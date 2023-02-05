import type { CSSProperties, HTMLAttributes } from 'react';

export const tuple = <T extends string[]>(...args: T) => args;

export type WithCustomStyle<T> = T & {
  style?: CSSProperties;
  className?: string;
};

export type WithForwardRef<T> = T & {
  ref?: any;
};

export type HTMLDivProps = HTMLAttributes<HTMLDivElement>;
