import type { ReactNode, CSSProperties, MouseEventHandler } from 'react';
import type { ButtonProps } from '../button';

type ModalContainer = HTMLElement | false;
type ModalType = 'info' | 'success' | 'error' | 'confirm' | 'warning';

interface ModalOptions {
  title?: string;
  centered?: boolean;
  contentWidth?: string | number;
  okButtonProps?: ButtonProps;
  okText?: string;
  cancelButtonProps?: ButtonProps;
  cancelText?: string;
  closable?: boolean;
  closeIcon?: ReactNode;
  destroyOnClose?: boolean;
  content?: ReactNode;
  footer?: ReactNode;
  needFooter?: boolean;
  keyboard?: boolean;
  maskClosable?: boolean;
  getContainer?: ModalContainer; //
  maskStyle?: CSSProperties;
  maskClass?: string;
  contentClass?: string;
  contentStyle?: CSSProperties;
  afterClose?: () => void;
  onCancel?: MouseEventHandler<HTMLElement>;
  onOk?: MouseEventHandler<HTMLElement> | (() => Promise<any>);
}
interface DialogProps extends ModalOptions {
  type?: ModalType;
}
interface ModalProps extends ModalOptions {
  visible: boolean;
}
interface DialogModalMethod {
  (options: ModalOptions): void;
}
interface ModalMethod {
  (options: DialogProps): void;
}
export { ModalContainer, DialogModalMethod, ModalMethod, DialogProps, ModalOptions };
export default ModalProps;
