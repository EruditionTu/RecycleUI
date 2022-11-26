import type { ReactNode } from 'react';

type AlertType = 'info' | 'warn' | 'success' | 'error';

type CloseFunctionType = (e: MouseEvent) => void;

interface AlertProps {
  action?: ReactNode;
  type?: AlertType;
  banner?: boolean;
  message?: ReactNode;
  description?: ReactNode;
  closeIcon?: ReactNode;
  showCloseIcon?: boolean;
  icon?: ReactNode;
  showIcon?: boolean;
  onClose?: CloseFunctionType;
}

export { AlertType, CloseFunctionType };

export default AlertProps;
