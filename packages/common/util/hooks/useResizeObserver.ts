import { useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';

// const DEFAULT_OPTIONS = {};

export default function useResizeOberver(
  targetEl: HTMLElement | null,
  cb: ResizeObserverCallback,
  options: { config?: ResizeObserverOptions; debounceTime?: number },
  canObserve = true,
) {
  const observeRef = useRef<ResizeObserver>();
  useEffect(() => {
    if (!cb || typeof cb !== 'function') return;
    const { debounceTime } = options;
    observeRef.current = new ResizeObserver(
      (debounceTime || 0) > 0 ? debounce(cb, debounceTime) : cb,
    );
  }, [cb, options, targetEl]);

  useEffect(() => {
    if (!targetEl || !targetEl?.nodeType) return;

    const { config } = options;
    try {
      if (canObserve) observeRef.current?.observe(targetEl, config);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, [targetEl, options]);
  useEffect(
    () => () => {
      observeRef.current?.disconnect();
    },
    [],
  );
  return observeRef.current;
}
