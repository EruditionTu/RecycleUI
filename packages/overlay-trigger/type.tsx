import type { ReactElement } from 'react';
// import type { OverlayProps } from '../overlay';

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

export type OverlayTriggerRef = {
  hide: () => void;
  show: () => void;
  overlayRef: React.MutableRefObject<HTMLElement | undefined>;
};

export default interface OverlayTriggerProps {
  overlay?: ReactElement;
  transitionName?: string;
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: 'click' | 'hover' | 'focus';
  delay?: Delay;
  usePortal?: boolean;
  disabled?: boolean;
  isOutside?: boolean;
  isClickOutside?: boolean;
  autoAdjustOverflow?: boolean;
  destroyTooltipOnHide?: boolean;
  placement?: Placement;
  overlayContainer?: HTMLElement;
  onOpenChange?: (isVisbale: boolean) => void;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
}
