import type { ReactNode, CSSProperties } from 'react';

export type MessageType = 'success' | 'info' | 'error' | 'warn' | 'loading' | 'normal';

export interface MessageConfig {
  className?: string;
  content?: ReactNode;
  clearable?: boolean;
  position?: 'top' | 'bottom';
  duration?: number;
  icon?: ReactNode;
  key?: string | number;
  style?: CSSProperties;
  onClick?: Function;
  onClose?: Function;
}

export interface MessageOptions {
  duration?: number;
  getContainer?: () => HTMLElement;
  maxCount?: number;
  top?: number;
}

export type MessageController = (config: MessageConfig) => void;

export interface MessageStaticType {
  config: (config: MessageOptions) => void;
  open: (type: MessageType, config: MessageConfig) => void;
  destroy: (key: string | number) => void;
  success: MessageController;
  normal: MessageController;
  error: MessageController;
  info: MessageController;
  warn: MessageController;
  loading: MessageController;
}
