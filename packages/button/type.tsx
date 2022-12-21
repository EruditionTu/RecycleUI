import type { MouseEventHandler, CSSProperties, ReactElement, ButtonHTMLAttributes } from 'react';
import type { WithForwardRef } from '@/packages/common/util/type';
import type { LoaderProps } from '../loader/index';

type NativeButtonAttributes = Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;

export interface ExtendButtonAttributes {
  type?: ButtonType;
  purpose?: ButtonPurpose;
  shape?: ButtonShape;
  disabled?: boolean;
  loading?: boolean;
  loadinfProps?: LoaderProps;
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
