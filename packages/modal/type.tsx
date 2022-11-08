import type { ReactNode, CSSProperties, MouseEventHandler } from 'react';
import type { ButtonProps } from '../button';

// type ModalContainer = HTMLElement | false;
interface ModalProps {
  visible: boolean;
  title: string;
  centered?: boolean;
  contentWidth?: string | number;
  okButtonProps?: ButtonProps;
  okText?: string;
  cancelButtonProps?: ButtonProps;
  cancelText?: string;
  closable?: boolean;
  closeIcon?: ReactNode;
  destroyOnClose?: boolean;
  footer?: ReactNode;
  needFooter?: boolean;
  keyboard?: boolean;
  maskClosable?: boolean;
  // getContainer?: ModalContainer;
  maskStyle?: CSSProperties;
  maskClass?: string;
  contentClass?: string;
  contentStyle?: CSSProperties;
  onCancel?: MouseEventHandler<HTMLElement>;
  onOk?: MouseEventHandler<HTMLElement>;
}
export default ModalProps;
