import React, { useRef, useMemo, useEffect, useCallback, useState, cloneElement } from 'react';
import type { FC, ReactElement, CSSProperties, ReactNode } from 'react';
import type VirtualListProps from './type';
import { ItemSizeGetter, ItemSize, Alignment, StyleCache, ItemStyle } from './type';
import { Direction } from './type';
import Manager from './Manager';

const STYLE_WRAPPER: React.CSSProperties = {
  overflow: 'auto',
  willChange: 'transform',
  WebkitOverflowScrolling: 'touch',
};

const STYLE_INNER: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '100%',
};

const STYLE_ITEM: ItemStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
};

/**
 * 获取可视区域的宽高属性
 *
 */
const viewSizeProps = {
  [Direction.HORIZONTAL]: 'width',
  [Direction.VERTICAL]: 'height',
};

/**
 * 获取可视窗口的滚动属性
 */
const viewScrollProps = {
  [Direction.HORIZONTAL]: 'scrollLeft',
  [Direction.VERTICAL]: 'scrollTop',
};

/**
 * 列表项
 */
const itemPositionProps = {
  [Direction.HORIZONTAL]: 'left',
  [Direction.VERTICAL]: 'top',
};

const VirtualList: FC<VirtualListProps> = (props: VirtualListProps): ReactElement => {
  const {
    itemCount,
    itemSize,
    width,
    height,
    onScroll,
    scrollOffset,
    scrollToIndex,
    scrollToAlignment = Alignment.AUTO,
    estimatedItemSize,
    overscanCount = 3,
    renderItem,
    scrollDirection = Direction.VERTICAL,
  } = props;

  const viewRef = useRef<any>(null);
  const [offset, setOffset] = useState<number>(typeof scrollOffset === 'number' ? scrollOffset : 0);
  const [range, setRange] = useState<{ start?: number; stop?: number }>({ start: 0, stop: 0 });
  const [styleCache, setStyleCache] = useState<StyleCache>({});

  /**
   * 获取列表项的大小-逻辑处理
   */
  const getItemSize = useCallback((index: number, itemSize: ItemSize) => {
    if (typeof itemSize === 'function') {
      return itemSize(index);
    }
    return Array.isArray(itemSize) ? itemSize[index] : itemSize;
  }, []);
  const itemSizeGetter = useCallback<ItemSizeGetter>(
    (index: number): number => getItemSize(index, itemSize),
    [itemSize],
  );

  /**
   * 获取预估的列表项大小
   */
  const estimatedItemSizeMemo = useMemo<number>(() => {
    if (typeof estimatedItemSize === 'number') return estimatedItemSize;
    if (typeof itemSize === 'number') return itemSize;
    return 50;
  }, [estimatedItemSize, itemSize]);

  const manager = useRef(
    new Manager({
      itemCount,
      itemSizeGetter,
      estimatedItemSize: estimatedItemSizeMemo,
    }),
  );

  /**
   * 滚动视窗的高度
   */
  const viewHeight = useMemo((): number | string => {
    const usefulFeild = ['string', 'number'];
    if (usefulFeild.indexOf(typeof height) === -1 || height === undefined) {
      return scrollDirection === Direction.VERTICAL ? 400 : '100%';
    }
    return height;
  }, [height, scrollDirection]);

  /**
   * 滚动视窗的宽度
   */
  const viewWidth = useMemo((): number | string => {
    const usefulFeild = ['string', 'number'];
    if (usefulFeild.indexOf(typeof width) === -1 || width === undefined) {
      return scrollDirection === Direction.VERTICAL ? '100%' : 400;
    }
    return width;
  }, [width, scrollDirection]);

  /**
   * 获取列表项的样式
   */
  const getItemStyle = useCallback(
    (index: number) => {
      const style = styleCache[index];
      if (style) return style;
      const { offset, size } = manager.current.getDataWithIndex(index);
      const targetIndexStyle = {
        ...STYLE_ITEM,
        [viewSizeProps[scrollDirection]]: size,
        [itemPositionProps[scrollDirection]]: offset,
      };
      setStyleCache({ ...styleCache, [index]: targetIndexStyle });
      return targetIndexStyle;
    },
    [styleCache],
  );

  const items: ReactNode[] = useMemo((): ReactNode[] => {
    const renderLists: ReactNode[] = [];
    if (typeof range.start !== 'undefined' && typeof range.stop !== 'undefined') {
      for (let i = range.start; i <= range.stop; i++) {
        const Element = renderItem(i);
        const PropsStyle = Element.props?.style ? Element.props?.style : {};
        renderLists.push(
          cloneElement(Element, {
            ...Element.props,
            style: {
              ...PropsStyle,
              ...getItemStyle(i),
            },
          }),
        );
      }
    }
    return renderLists;
  }, [range]);

  /**
   * 滚动控制事件
   */
  const scrollHandler = useCallback(
    (event: UIEvent) => {
      const viewScrollOffset: number = getViewScrollOffset();
      if (viewScrollOffset < 0 || viewScrollOffset === offset || event.target !== viewRef.current) {
        return;
      }
      setOffset(viewScrollOffset);
      if (typeof onScroll === 'function') {
        onScroll(event, offset);
      }
    },
    [onScroll],
  );

  /**
   * 滚动到某个滑动距离的列表项
   */
  const scrollTo = useCallback(
    (scrollLength: number) => {
      viewRef.current[viewScrollProps[scrollDirection]] = scrollLength;
    },
    [viewRef, scrollDirection],
  );

  /**
   * 处理scrollToIndex的props
   */
  const getOffsetWithIndex = useCallback((index: number) => {
    if (index < 0 || index > itemCount) {
      index = 0;
    }
    return manager.current.updateViewScrollOffset({
      align: scrollToAlignment,
      viewScrollOffset: offset || 0,
      viewScrollSize: viewRef.current[viewSizeProps[scrollDirection]],
      targetIndex: index,
    });
  }, []);

  /**
   *获取滚动条的滚动距离
   */
  const getViewScrollOffset = useCallback(() => {
    return viewRef.current[viewScrollProps[scrollDirection]];
  }, [scrollDirection]);

  /**
   * 加载初期为view视窗添加滚动控制事件，销毁就移除事件
   */
  useEffect(() => {
    viewRef.current?.addEventListener('scroll', scrollHandler);
    if (typeof scrollOffset === 'number') {
      scrollTo(scrollOffset);
    } else if (typeof scrollToIndex === 'number') {
      scrollTo(getOffsetWithIndex(scrollToIndex));
    }
    return () => {
      viewRef.current?.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    const { start, stop } = manager.current.getRenderRange({
      viewScrollOffset: offset,
      viewScrollSize:
        scrollDirection === Direction.VERTICAL ? (viewHeight as number) : (viewWidth as number),
      overscanCount,
    });
    setRange({ start, stop });
  }, [manager, offset, scrollDirection, viewHeight, viewWidth, overscanCount]);

  /**
   * 视窗的style
   */
  const viewStyle = useMemo(
    (): CSSProperties => ({
      ...STYLE_WRAPPER,
      width: viewWidth,
      height: viewHeight,
    }),
    [viewHeight, viewWidth],
  );

  /**
   * 列表的style
   */
  const listStyle = useMemo(
    () => ({
      ...STYLE_INNER,
      width: '100%',
      height: manager.current.getListTotleSize(),
    }),
    [viewHeight, viewWidth],
  );

  return (
    <div ref={viewRef} style={viewStyle}>
      <div style={listStyle}>{items}</div>
    </div>
  );
};

export default VirtualList;
