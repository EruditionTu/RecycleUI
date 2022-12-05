import type { MouseEventHandler, CSSProperties, ReactElement, ButtonHTMLAttributes } from 'react';
import type { WithForwardRef } from '@/packages/common/util/toolType';

type NativeButtonAttributes = Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;

export interface ExtendButtonAttributes {
  type?: ButtonType;
  purpose?: ButtonPurpose;
  shape?: ButtonShape;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactElement;
  onClick?: MouseEventHandler<HTMLElement>;
}
export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string;
}
export type ButtonProps = WithForwardRef<NativeButtonAttributes & ExtendButtonAttributes>;
export type ButtonType = 'solid' | 'text' | 'link' | 'transparent';
export type ButtonPurpose = 'routine' | 'info' | 'danger' | 'warn';
export type ButtonShape = 'rect' | 'circle' | 'round';
export default ButtonProps;
