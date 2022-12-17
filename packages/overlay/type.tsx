import { TransitionProps } from 'react-transition-group/Transition';
import type { HTMLProps } from 'react';
import { PortalProps } from '../common/components/portal';

export default interface OverlayProps extends Omit<TransitionProps, 'timeout'> {
  timeout?: TransitionProps['timeout'];
  containerDom?: HTMLElement;
  open?: boolean;
  usePortal?: boolean;
  maskClosable?: boolean;
  dialogProps?: HTMLProps<HTMLElement>;
  backdropProps?: HTMLProps<HTMLDivElement>;
  portalProps?: PortalProps;
  hasBackdrop?: boolean;
  destroyTooltipOnHide?: boolean;
  transitionName?: string;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
  onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
  onExit?: (node: HTMLElement) => void;
  onExiting?: (node: HTMLElement) => void;
  onExited?: (node: HTMLElement) => void;
  onClose?: (evn: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
