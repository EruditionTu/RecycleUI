import type {
  MouseEventHandler,
  ButtonHTMLAttributes,
  CSSProperties,
} from 'react';

type NativeButtonAttributes = Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;
export interface ExtendButtonAttributes {
  type?: ButtonType;
  purpose?: ButtonPurpose;
  shape?: ButtonShape;
  disabled?: boolean;
  loading?: boolean;
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
