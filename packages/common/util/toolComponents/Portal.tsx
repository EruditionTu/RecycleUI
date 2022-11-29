import { forwardRef, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

type PortalRef = {};

interface PortalProps {
  children?: ReactNode;
  getContainer: () => HTMLElement;
}

const Portal = forwardRef<PortalRef, PortalProps>((props, ref) => {
  const { children, getContainer } = props;

  const parentRef = useRef<ParentNode | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const initRef = useRef(false);

  if (!initRef.current) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  }

  useEffect(() => {
    if (containerRef.current?.parentNode === null && parentRef.current !== null) {
      parentRef.current.appendChild(containerRef.current);
    }
    return () => {
      containerRef.current?.parentNode?.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? createPortal(children, containerRef.current) : null;
});

export default Portal;
export { PortalProps, PortalRef };
