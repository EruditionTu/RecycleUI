import { useEffect, useRef, useCallback } from 'react';

const useThrottle = (fn: Function, delay: number, dep: any[]): Function => {
  const { current } = useRef<{
    timer?: NodeJS.Timeout;
    fn?: Function;
  }>({});
  useEffect(() => {
    current.fn = fn;
  }, [fn]);
  return useCallback((...args) => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
    }
    current.fn?.call(this, ...args);
  }, dep);
};
export default useThrottle;
