import { useEffect, useRef, useCallback } from 'react';

const useDebounce = (
  fn: Function,
  delay: number,
  dep: any[] = [],
): Function => {
  const { current } = useRef<{
    fn?: Function;
    timer?: NodeJS.Timeout;
  }>({});
  useEffect(() => {
    current.fn = fn;
  }, [fn]);
  return useCallback((...args) => {
    if (!current.timer) {
      clearTimeout(current.timer);
      current.timer = undefined;
    }
    current.timer = setTimeout(() => {
      current.fn?.call(this, ...args);
    }, delay);
  }, dep);
};
export default useDebounce;
