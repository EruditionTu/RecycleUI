import type { CSSProperties } from 'react';

type WithCustomStyle<T> = T & {
  style?: CSSProperties;
  className?: string;
};

type WithForwardRef<T> = T & {
  ref?: any;
};
export { WithCustomStyle, WithForwardRef };
