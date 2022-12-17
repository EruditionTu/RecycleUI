import type { ReactNode } from 'react';
import type { OverlayTriggerProps } from '../overlay-trigger';

interface TooltipProps extends Omit<OverlayTriggerProps, 'overlay'> {
  visibleArrow?: boolean;
  content?: ReactNode;
  arrowPointAtCenter?: boolean;
  color?: string;
}

export default TooltipProps;
