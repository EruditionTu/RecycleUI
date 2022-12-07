import React, { useRef, useState, useLayoutEffect } from 'react';
import type { RefObject, ReactNode } from 'react';
import type { PlacementType } from '../getPlacement';
import useResize from '../hooks/useResize';
import getPlacement from '../getPlacement';

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
  const triggerRect = triggerRef.current?.getBoundingClientRect();
  const contentRect = contentEl.current?.getBoundingClientRect();

  const [flag, setFlag] = useState(false);

  useLayoutEffect(() => {
    setFlag(!flag);
  }, [triggerRef.current]);

  // 监听 resize 事件，并更新 trigger 元素的 ClientRect
  useResize(() =>
    setFlag((flag) => {
      return !flag;
    }),
  );
  // 根据触发元素和内容元素的 ClientRect，以及摆放位置，计算出内容元素的坐标
  const position =
    triggerRect && contentRect
      ? getPlacement({
          triggerRect,
          contentRect,
          placement,
          pointCenter,
        })
      : null;

  return (
    <div
      style={{
        position: 'absolute',
        left: position ? position.left - extLeft : 0,
        top: position ? position.top - extTop : 0,
      }}
      ref={contentEl}
    >
      {children}
    </div>
  );
};

export default Position;
