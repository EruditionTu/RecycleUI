import type { ReactElement } from 'react';

type ItemSizeGetter = (index: number) => number;

type ItemSize = number | Array<number> | ItemSizeGetter;

type ItemPosition = 'absolute' | 'sticky';
/**
 * 滚动到第x个列表项时，第x个列表显示的位置
 */
enum Alignment {
  AUTO = 'auto',
  START = 'start',
  CENTER = 'center',
  END = 'end',
}

/**
 * 列表滚动的方向
 */
enum Direction {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

/**
 * 列表项的渲染函数
 */
interface RenderItem {
  (index: number): ReactElement;
}

/**
 * 滚动事件函数
 */
interface OnScroll {
  (event: UIEvent, offset: number): void;
}

/**
 * 列表项的样式接口
 */
interface ItemStyle {
  position?: ItemPosition;
  top?: number;
  left?: number;
  width?: string | number;
  height?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  zIndex?: number;
}

/**
 * 样式缓存接口
 */
interface StyleCache {
  [index: number]: ItemStyle;
}

interface VirtualListProps {
  itemCount: number;
  renderItem: RenderItem;
  itemSize: ItemSize;
  width?: number | string;
  height?: number | string;
  scrollToAlignment?: Alignment;
  scrollDirection?: Direction;
  scrollOffset?: number;
  scrollToIndex?: number;
  stickyIndices?: Array<number>;
  overscanCount?: number;
  estimatedItemSize?: number;
  onItemsRendered?: Function;
  onItemsRender?: number;
  onScroll?: OnScroll;
}
export {
  Direction,
  RenderItem,
  Alignment,
  ItemSizeGetter,
  ItemPosition,
  ItemSize,
  ItemStyle,
  StyleCache,
  OnScroll,
};
export default VirtualListProps;
