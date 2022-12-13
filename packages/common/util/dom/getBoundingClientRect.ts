import getScrollLength from './getScrollLength';
import getStyleComputedProperty from './getStyleComputedProperty';
import getBordersSize from './getBordersSize';
import getWindowSizes, { WindowSize } from './getWindowSize';
import isIE from '../isIE';

export interface IBoundingClientRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
  offsetLeft?: number;
  offsetTop?: number;
}

function getClientRect(offsets: DOMRect): DOMRect {
  return {
    ...offsets,
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height,
  };
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
export default function getBoundingClientRect(element: HTMLElement) {
  let rect = {} as IBoundingClientRect;

  // 兼容IE
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      const scrollTop = getScrollLength(element, true);
      const scrollLeft = getScrollLength(element);
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
    // eslint-disable-next-line
  } catch (e) {}

  const result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
  } as IBoundingClientRect;

  // 减去滚动条的宽高
  const sizes: WindowSize =
    element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument!) : {};
  const width = sizes.width || element.clientWidth || result.right - result.left;
  const height = sizes.height || element.clientHeight || result.bottom - result.top;

  let horizScrollbar = element.offsetWidth - width;
  let vertScrollbar = element.offsetHeight - height;

  result.offsetLeft = element.offsetLeft || element.scrollLeft || 0;
  result.offsetTop = element.offsetTop || element.offsetTop || 0;

  // 如果存在滚动条的宽高，那么需要判断是不是计算上了border的宽高，减去border之后的宽高才是滚动条的宽高
  if (horizScrollbar || vertScrollbar) {
    const styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result as DOMRect) as IBoundingClientRect;
}
