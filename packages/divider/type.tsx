import type { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  dashed?: boolean;
  align?: 'left' | 'right' | 'center';
  type?: 'horizontal' | 'vertical';
  orientationMargin?: number;
}
export default DividerProps;
