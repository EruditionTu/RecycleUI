import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * 当前环境是否可以操作dom
 * */
export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export interface PortalProps {
  /**
   * 渲染的组件
   * @default null
   */
  children?: React.ReactNode;
  /**
   * children被挂载的HTML节点
   * @default document.body
   */
  container?: HTMLElement;
}

export default function Portal(props: PortalProps) {
  const { container, children } = props;
  const defaultNode = useRef<HTMLDivElement>();
  const containerRef = useRef<HTMLElement | undefined>(container);

  useEffect(() => {
    return () => {
      if (defaultNode.current && containerRef.current) {
        containerRef.current.removeChild(defaultNode.current);
        defaultNode.current = undefined;
      }
    };
  }, []);

  if (!canUseDOM) {
    return null;
  }
  if (!containerRef.current) {
    containerRef.current = document.body;
  }
  if (!defaultNode.current) {
    defaultNode.current = document.createElement('div');
    containerRef.current.appendChild(defaultNode.current);
  }
  return createPortal(children, defaultNode.current);
}
