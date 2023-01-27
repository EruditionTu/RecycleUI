import type { ReactElement } from 'react';
import OverlayProps from '../overlay/type';
/**
 * 延时打开关闭的时间
 */
export type Delay =
  | number
  | {
      show?: number;
      hide?: number;
    };

export type Placement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

// 弹窗的定位类型
export type OverlayStyle = {
  placement: Placement;
  top: number;
  bottom: number;
  left: number;
  right: number;
  zIndex: number;
};

// 触发的函数的类型
export interface TriggerProps {
  onClick?: (e: MouseEvent) => void;
  onFocus?: (e: MouseEvent) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default interface OverlayTriggerProps extends OverlayProps {
  overlay?: ReactElement;
  transitionName?: string;
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: 'click' | 'hover' | 'focus';
  delay?: Delay;
  usePortal?: boolean;
  disabled?: boolean;
  hoverOverlayClose?: boolean; // hover模式下，离开trigger元素就会关闭弹窗，包括移到overlay上面也会，为false，那么在overlay上不会关闭
  clickOverlayClose?: boolean; // click模式下，点击overlay遮盖层会关闭
  clickTriggerClose?: boolean; // click模式下，点击trigger可以关闭
  clickOutsideClose?: boolean; // click模式下，点击overlay和trigger之外的可以关闭
  autoAdjustOverflow?: boolean;
  destroyTooltipOnHide?: boolean;
  placement?: Placement;
  overlayContainer?: HTMLElement;
  onOpenChange?: (isVisbale: boolean) => void;
}
