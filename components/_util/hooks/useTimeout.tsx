import { useRef, MutableRefObject } from "react";
//在函数组件中使用setTimeout并且timeout不会被重新赋值为null
let useTimeout: (callback: Function, delay: number) => NodeJS.Timeout | null;
useTimeout = (callback: Function, delay: number) => {
  const timeout: MutableRefObject<NodeJS.Timeout | null> = useRef(null);
  timeout.current = setTimeout(() => {
    timeout.current = null;
    callback();
  }, delay);
  return timeout.current;
};
export default useTimeout;
