import type { HTMLAttributes, ReactNode } from 'react';

export default interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  icon?: ReactNode;
  alt?: string;
  src?: string;
  size?: 'large' | 'default' | 'small' | 'mini';
  shape?: 'square' | 'circle';
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
}
