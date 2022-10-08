import * as React from "react";

/**
 *
 */
let useEventlistener: (
  eventName: string,
  handler: Function,
  options?: any,
  element?: HTMLElement
) => void;

useEventlistener = (
  eventName: string,
  handler: Function,
  options?: any,
  element?: HTMLElement | typeof window
): void => {
  if (!element) {
    element = window;
  }
  if (!options) {
    options = {};
  }
  const savedHandler = React.useRef<Function>();
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = element?.addEventListener;
    if (isSupported) {
      const eventListener = (event) => savedHandler.current(event);

      element.addEventListener(eventName, eventListener, options);

      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }
  }, [eventName, element]);
};

export default useEventlistener;
