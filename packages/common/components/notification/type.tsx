import type { ReactNode, CSSProperties, Key, HTMLAttributes, MouseEventHandler } from 'react';

export interface NoticeConfig {
  content?: ReactNode;
  duration?: number;
  closeIcon?: ReactNode;
  closable?: boolean;
  className?: string;
  style?: CSSProperties;
  props?: HTMLAttributes<HTMLDivElement> & Record<string, any>;
  onClose?: () => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface NoticeProps extends Omit<NoticeConfig, 'onClose'> {
  prefixCls: string;
  className?: string;
  style?: CSSProperties;
  eventKey: Key;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onNoticeClose?: (key: Key) => void;
}
