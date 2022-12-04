import React, { useRef, RefObject, ReactNode } from 'react';
import type { PlacementType } from '../hooks/usePlacement';
import useClientRect from '../hooks/useClientRect';
import usePlacement from '../hooks/usePlacement';
import useResize from '../hooks/useResize';
import useScroll from '../hooks/useScroll';

interface IPositionProps {
  triggerRef: RefObject<HTMLElement | null>;
  children: ReactNode;
  placement?: PlacementType;
  extLeft?: number;
  extTop?: number;
  pointCenter?: boolean;
}

const Position = ({
  triggerRef,
  placement = 'bottomRight',
  children,
  extLeft = 0,
  extTop = 0,
  pointCenter = false,
}: IPositionProps) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const [triggerRect, updateTriggerRect] = useClientRect(triggerRef);
  const [contentRect] = useClientRect(contentEl);
  const defaultRect: DOMRect = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    toJSON: () => {},
  };

  // 给 trigger 元素和它的滚动父节点绑定 scroll 事件，更新它的 ClientRect
  useScroll(triggerRef, updateTriggerRect);
  // 监听 resize 事件，并更新 trigger 元素的 ClientRect
  useResize(updateTriggerRect);
  // 根据触发元素和内容元素的 ClientRect，以及摆放位置，计算出内容元素的坐标
  const position = usePlacement({
    triggerRect: triggerRect || defaultRect,
    contentRect: contentRect || defaultRect,
    placement,
    pointCenter,
  });

  return (
    <div
      style={{ position: 'absolute', left: position.left - extLeft, top: position.top - extTop }}
      ref={contentEl}
    >
      {children}
    </div>
  );
};

export default Position;
