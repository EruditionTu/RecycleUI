import { RefObject, useState, useLayoutEffect, useMemo } from 'react';

const useClientRect = (ele: RefObject<HTMLElement | null>) => {
  const [clientRect, setClientRect] = useState<DOMRect | null>(null);

  // 更新元素的 ClientRect，使用 useMemo 确保只创建一次 updateClientRect 方法
  const updateClientRect = useMemo(() => {
    return () => {
      setClientRect(ele.current!.getBoundingClientRect());
    };
  }, []);

  // 只有当 React 组件 didMount 时，才能取到元素的 ClientRect，所以这里要使用 useLayoutEffect
  useLayoutEffect(() => {
    if (ele.current) {
      updateClientRect();
    }
  }, []);

  return [clientRect, updateClientRect] as [typeof clientRect, typeof updateClientRect];
};

export default useClientRect;
