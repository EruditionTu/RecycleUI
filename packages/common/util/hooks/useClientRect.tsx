import { RefObject, useState, useEffect, useMemo } from 'react';

const useClientRect = (ele: RefObject<HTMLElement | null>) => {
  const [clientRect, setClientRect] = useState<DOMRect | null>(null);
  const updateClientRect = useMemo(() => {
    return () => {
      setClientRect(ele.current!.getBoundingClientRect());
    };
  }, []);
  // 只有当 React 组件 didMount 时，
  // 才能取到元素的 ClientRect，
  // 所以这里要使用 useEffect，
  // 因为在tooltip这种组件里面是使用
  // useLayoutEffect来添加container，
  // 在这里如果使用useLayoutEffect就会
  // 导致这里先获取rect元素，然后再添加进入dom，
  // 出现一个问题就是dom必须加入到真实dom里去才能获取正确的rect元素
  // 所以使用useEffect等前面的useLayoutEffect执行完毕加入了真实dom
  useEffect(() => {
    if (ele.current) {
      updateClientRect();
    }
  }, []);

  return [clientRect, updateClientRect] as [typeof clientRect, typeof updateClientRect];
};

export default useClientRect;
