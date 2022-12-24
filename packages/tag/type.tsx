import type { ReactNode, HTMLAttributes, MouseEvent } from 'react';

export type TagSize = 'small' | 'default' | 'large';
export type TagEffect = 'dark' | 'light';

export interface CheckableTagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: TagSize;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  closable?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  closeIcon?: ReactNode;
  color?: string;
  visible?: boolean;
  title?: ReactNode;
  size?: TagSize;
  effect?: TagEffect;
  onClose?: (event: MouseEvent<HTMLElement>) => void;
}
export default TagProps;
