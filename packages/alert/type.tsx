import type { ReactNode } from 'react';

type AlertType = 'info' | 'warn' | 'success' | 'error';

type CloseFunctionType = (e: MouseEvent) => void;

interface AlertProps {
  type?: AlertType;
  message?: string;
  content?: string;
  closeable?: boolean;
  closeElement?: ReactNode;

  description?: ReactNode;
  icon?: ReactNode;
  showIcon?: boolean;
  onClose?: CloseFunctionType;
}

export { AlertType, CloseFunctionType };

export default AlertProps;
