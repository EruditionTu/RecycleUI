import type { HTMLAttributes, ReactNode } from 'react';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'default' | 'large';
  loading?: boolean;
  fullscreen?: boolean;
  color?: string;
  bgColor?: string;
  vertical?: boolean;
  tip?: ReactNode;
  indicator?: ReactNode;
}
export default LoaderProps;
