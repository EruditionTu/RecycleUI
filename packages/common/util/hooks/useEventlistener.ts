import { useRef, useEffect } from 'react';

const useEventlistener = (
  eventName: string,
  handler: Function,
  options?: any,
  element?: HTMLElement | typeof window,
): void => {
  if (element == null) {
    element = window;
  }
  options = options != null ? options : {};
  const savedHandler = useRef<Function>(() => {});
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element?.addEventListener;
    if (isSupported != null) {
      const eventListener = (event: any): any => savedHandler.current(event);

      element?.addEventListener(eventName, eventListener, options);

      return () => {
        element?.removeEventListener(eventName, eventListener);
      };
    }
  }, [eventName, element]);
};

export default useEventlistener;
