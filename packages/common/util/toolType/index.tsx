import type { CSSProperties } from 'react';

type WithCustomStyle<T> = T & {
  style?: CSSProperties;
  className?: string;
};
export { WithCustomStyle };
