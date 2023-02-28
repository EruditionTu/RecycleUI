import type { ReactElement, CSSProperties } from 'react';

type ItemSizeGetter = (index: number) => number;

type ItemSize = number | Array<number> | ItemSizeGetter;

type ItemPosition = 'absolute' | 'sticky';

/**
 * 列表每一项相关配置
 * */
export interface Options {
  itemCount: number;
  itemSizeGetter: ItemSizeGetter;
  estimatedItemSize: number;
}

enum SCROLL_CHANGE_REASON {
  OBSERVED = 'observed',
  REQUESTED = 'requested',
}

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
  estimatedItemSize?: number;
  height: number;
  itemCount: number;
  itemSize: ItemSize;
  onScroll?: OnScroll;
  renderItem: RenderItem;
  onItemsRendered?: Function;
  overscanCount?: number;
  width?: number;
  scrollOffset?: number;
  scrollToAlignment?: Alignment;
  scrollDirection?: Direction;
  scrollToIndex?: number;
  stickyIndices?: Array<number>;
  onItemsRender?: number;
  style?: CSSProperties;
}
export {
  SCROLL_CHANGE_REASON,
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
