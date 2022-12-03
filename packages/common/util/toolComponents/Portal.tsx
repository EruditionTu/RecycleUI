import { forwardRef, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

type PortalRef = {};

interface PortalProps {
  children?: ReactNode;
  getContainer: () => HTMLElement;
  destroyTooltipOnHide?: boolean;
}

const Portal = forwardRef<PortalRef, PortalProps>((props, ref) => {
  const { children, getContainer, destroyTooltipOnHide = false } = props;
  const parentRef = useRef<ParentNode | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const initRef = useRef(false);

  if (!initRef.current || !destroyTooltipOnHide) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current?.parentNode;
    initRef.current = true;
  }

  useEffect(() => {
    return () => {
      if (destroyTooltipOnHide) containerRef.current?.parentNode?.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? createPortal(children, containerRef.current) : null;
});

export default Portal;
export { PortalProps, PortalRef };
