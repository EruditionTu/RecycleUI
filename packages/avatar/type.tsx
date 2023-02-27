import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';

export default interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  style?: React.CSSProperties;
  className?: string;
  icon?: ReactNode;
  alt?: string;
  src?: string;
  size?: 'large' | 'default' | 'small' | 'mini';
  shape?: 'square' | 'circle';

  gap?: number;
  srcSet?: string;
  draggable?: boolean;
  crossOrigin?: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
}

export interface AvatarGroupProps {
  maxCount?: number;
  maxPopoverPlacement?: string;
  maxPopoverTrigger?: string;
  maxStyle?: CSSProperties;
  size?: string;
}
