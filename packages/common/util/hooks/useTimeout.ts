import type { MutableRefObject } from 'react';
import { useRef } from 'react';

const useTimeout = (callback: Function, delay: number): NodeJS.Timeout => {
  const timeout: MutableRefObject<NodeJS.Timeout | null> = useRef(null);
  timeout.current = setTimeout(() => {
    timeout.current = null;
    callback();
  }, delay);
  return timeout.current;
};
export default useTimeout;
