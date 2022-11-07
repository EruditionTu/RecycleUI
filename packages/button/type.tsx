import type { MouseEventHandler, ButtonHTMLAttributes, CSSProperties, ReactElement } from 'react';

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
export type ButtonProps = NativeButtonAttributes & ExtendButtonAttributes;
export type ButtonType = 'solid' | 'text' | 'link' | 'transparent';
export type ButtonPurpose = 'routine' | 'info' | 'danger' | 'warn';
export type ButtonShape = 'rect' | 'circle' | 'round';
export default ButtonProps;
