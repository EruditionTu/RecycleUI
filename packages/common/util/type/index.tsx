import type { CSSProperties, HTMLAttributes } from 'react';

export type WithCustomStyle<T> = T & {
  style?: CSSProperties;
  className?: string;
};

export type WithForwardRef<T> = T & {
  ref?: any;
};

export type HTMLDivProps = HTMLAttributes<HTMLDivElement>;
