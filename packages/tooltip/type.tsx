import type { ReactNode } from 'react';
import type { PlacementType } from '@/packages/common/util/hooks/usePlacement';

type PopupTrigger = 'hover' | 'click';

interface TooltipProps {
  title: ReactNode;
  arrowPointAtCenter?: boolean;
  color?: string;
  defaultOpen?: boolean;
  destroyTooltipOnHide?: boolean;
  getPopupContainer?: HTMLElement;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  placement?: PlacementType;
  trigger?: PopupTrigger;
  open?: boolean;
  zIndex?: number;
  onOpenChange?: (visible: boolean) => void;
}

export default TooltipProps;
