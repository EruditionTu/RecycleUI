import { useEffect, useRef, useCallback } from "react";
let useDebounce: (fn: Function, delay: number, dep: Array<any>) => Function;
useDebounce = (fn: Function, delay: number, dep: Array<any> = []): Function => {
  const { current } = useRef({
    fn,
    timer: null,
  });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);
  return useCallback((...args) => {
    if (!current.timer) {
      clearTimeout(current.timer);
      current.timer = null;
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
};
export default useDebounce;
