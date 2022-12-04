import { useCallback } from 'react';

type PlacementType =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';
interface IUsePlacementProps {
  triggerRect: DOMRect;
  contentRect: DOMRect;
  placement: PlacementType;
  pointCenter: boolean;
}

interface IPosition {
  left: number;
  top: number;
}

const usePlacement = ({
  triggerRect,
  contentRect,
  placement,
  pointCenter,
}: IUsePlacementProps): IPosition => {
  const getPosition = useCallback(
    (triggerRect: DOMRect, contentRect: DOMRect, placement: PlacementType): IPosition => {
      const position: IPosition = {
        left: 0,
        top: 0,
      };
      if (pointCenter) {
        switch (placement) {
          case 'left':
          case 'leftTop':
          case 'leftBottom':
            position.left = triggerRect.left - contentRect.width;
            position.top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
            break;
          case 'right':
          case 'rightTop':
          case 'rightBottom':
            position.left = triggerRect.left + triggerRect.width;
            position.top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
            break;
          case 'top':
          case 'topLeft':
          case 'topRight':
            position.left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
            position.top = triggerRect.top - contentRect.height;
            break;
          case 'bottom':
          case 'bottomLeft':
          case 'bottomRight':
            position.left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
            position.top = triggerRect.top + contentRect.height;
            break;
          default:
            position.left = 0;
            position.top = 0;
        }
      } else {
        switch (placement) {
          case 'left':
            position.left = triggerRect.left - contentRect.width;
            position.top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
            break;
          case 'leftTop':
            position.left = triggerRect.left - contentRect.width;
            position.top = triggerRect.top + triggerRect.height * 0.25 - contentRect.height / 2;
            break;
          case 'leftBottom':
            position.left = triggerRect.left - contentRect.width;
            position.top = triggerRect.top + triggerRect.height * 0.75 - contentRect.height / 2;
            break;
          case 'right':
            position.left = triggerRect.left + triggerRect.width;
            position.top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
            break;
          case 'rightTop':
            position.left = triggerRect.left + triggerRect.width;
            position.top = triggerRect.top + triggerRect.height * 0.25 - contentRect.height / 2;
            break;
          case 'rightBottom':
            position.left = triggerRect.left + triggerRect.width;
            position.top = triggerRect.top + triggerRect.height * 0.75 - contentRect.height / 2;
            break;
          case 'top':
            position.left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
            position.top = triggerRect.top - contentRect.height;
            break;
          case 'topLeft':
            position.left = triggerRect.left + triggerRect.width * 0.25 - contentRect.width / 2;
            position.top = triggerRect.top - contentRect.height;
            break;
          case 'topRight':
            position.left = triggerRect.left + triggerRect.width * 0.75 - contentRect.width / 2;
            position.top = triggerRect.top - contentRect.height;
            break;
          case 'bottom':
            position.left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
            position.top = triggerRect.top + contentRect.height;
            break;
          case 'bottomLeft':
            position.left = triggerRect.left + triggerRect.width * 0.25 - contentRect.width / 2;
            position.top = triggerRect.top + contentRect.height;
            break;
          case 'bottomRight':
            position.left = triggerRect.left + triggerRect.width * 0.75 - contentRect.width / 2;
            position.top = triggerRect.top + contentRect.height;
            break;
          default:
            position.left = 0;
            position.top = 0;
        }
      }
      return position;
    },
    [],
  );
  return getPosition(triggerRect, contentRect, placement);
};

export default usePlacement;
export { PlacementType };
