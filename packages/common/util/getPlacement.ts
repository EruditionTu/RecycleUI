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

const getPosition = (
  triggerRect: DOMRect,
  contentRect: DOMRect,
  placement: PlacementType,
  pointCenter: boolean,
) => {
  const position = {
    top: document.documentElement.scrollTop,
    left: document.documentElement.scrollLeft,
  };
  if (triggerRect && contentRect) {
    if (pointCenter) {
      switch (placement) {
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          position.left += triggerRect.left - contentRect.width;
          position.top += triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          position.left += triggerRect.left + triggerRect.width;
          position.top += triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
          break;
        case 'top':
        case 'topLeft':
        case 'topRight':
          position.left += triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
          position.top += triggerRect.top - contentRect.height;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          position.left += triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
          position.top += triggerRect.top + contentRect.height;
          break;
        default:
          position.left += 0;
          position.top += 0;
      }
    } else {
      switch (placement) {
        case 'left':
          position.left += triggerRect.left - contentRect.width;
          position.top += triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
          break;
        case 'leftTop':
          position.left += triggerRect.left - contentRect.width;
          position.top += triggerRect.top;
          break;
        case 'leftBottom':
          position.left += triggerRect.left - contentRect.width;
          position.top += triggerRect.top + triggerRect.height - contentRect.height;
          break;
        case 'right':
          position.left += triggerRect.left + triggerRect.width;
          position.top += triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
          break;
        case 'rightTop':
          position.left += triggerRect.left + triggerRect.width;
          position.top += triggerRect.top;
          break;
        case 'rightBottom':
          position.left += triggerRect.left + triggerRect.width;
          position.top += triggerRect.top + triggerRect.height - contentRect.height;
          break;
        case 'top':
          // console.log('原始', position);
          position.left += triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
          position.top += triggerRect.top - contentRect.height;
          // console.log('triggerRect', triggerRect);
          // console.log('contentRect', contentRect);
          // console.log('之后', position);
          break;
        case 'topLeft':
          position.left += triggerRect.left;
          position.top += triggerRect.top - contentRect.height;
          break;
        case 'topRight':
          // console.log('原始', position);
          position.left += triggerRect.left + triggerRect.width - contentRect.width;
          position.top += triggerRect.top - contentRect.height;
          // console.log('triggerRect', triggerRect);
          // console.log('contentRect', contentRect);
          // console.log('之后', position);
          break;
        case 'bottom':
          position.left += triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
          position.top += triggerRect.top + contentRect.height;
          break;
        case 'bottomLeft':
          position.left += triggerRect.left;
          position.top += triggerRect.top + contentRect.height;
          break;
        case 'bottomRight':
          position.left += triggerRect.left + triggerRect.width - contentRect.width;
          position.top += triggerRect.top + contentRect.height;
          break;
        default:
          position.left += 0;
          position.top += 0;
      }
    }
  }
  return { ...position };
};

const getPlacement = ({
  triggerRect,
  contentRect,
  placement,
  pointCenter,
}: IUsePlacementProps): IPosition => getPosition(triggerRect, contentRect, placement, pointCenter);

export default getPlacement;
export { PlacementType, IPosition, IUsePlacementProps };
