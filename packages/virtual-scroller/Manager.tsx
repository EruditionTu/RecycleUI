import { ItemSizeGetter, Alignment } from './type';

type ListItemDataType = {
  [index: number]: {
    offset: number;
    size: number;
  };
};

interface GetRenderRangeParams {
  viewScrollSize: number;
  viewScrollOffset: number;
  overscanCount: number;
}

interface GetRenderRangeReturn {
  start?: number;
  stop?: number;
}

interface BinarySearchParams {
  low: number;
  high: number;
  offset: number;
}

interface ExponentialSearchParams {
  startIndex: number;
  offset: number;
}

interface UpdateViewScrollOffsetParams {
  align?: Alignment;
  viewScrollSize: number;
  viewScrollOffset: number;
  targetIndex: number;
}
interface ManagerOptions {
  itemCount: number;
  itemSizeGetter: ItemSizeGetter;
  estimatedItemSize: number;
}

class VirtualListManager {
  private itemSizeGetter: ItemSizeGetter;

  private itemCount: number;

  private estimatedItemSize: number;

  private lastMeasuredIndex: number;

  private listItemData: ListItemDataType;

  constructor(options: ManagerOptions) {
    this.itemCount = options.itemCount;
    this.itemSizeGetter = options.itemSizeGetter;
    this.estimatedItemSize = options.estimatedItemSize;

    this.lastMeasuredIndex = -1;
    this.listItemData = {};
  }

  /**
   * 根据offset获取下标
   */
  private getIndexWithOffset(offset: number) {
    if (isNaN(offset)) {
      throw Error(`Invalid offset ${offset} specified`);
    }
    offset = Math.max(0, offset);

    const lastMeasuredDate = this.getDataOfLastMeasuredItem();
    const lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);

    if (offset <= lastMeasuredDate.offset) {
      return this.binarySearch({ low: 0, high: lastMeasuredIndex, offset });
    }
    return this.exponentialSearch({ startIndex: lastMeasuredIndex, offset });
  }

  /**
   * 二分查找指定offset的下标-只能查找到计算过的列表项信息
   */
  private binarySearch({ low, high, offset }: BinarySearchParams) {
    let middle = 0,
      middleOffset = 0;
    while (low <= high) {
      middle = low + Math.floor((high - low) / 2);
      middleOffset = this.getDataWithIndex(middle)?.offset;
      if (middleOffset === offset) {
        return middle;
      }
      if (middleOffset < offset) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
    if (low > 0) {
      return low - 1;
    }
    return 0;
  }

  /**
   * 扩展二分查找-如果没有计算过，就循环计算并存储列表项的offset和size
   */
  private exponentialSearch({ startIndex, offset }: ExponentialSearchParams) {
    let interval = 1;
    while (startIndex < this.itemCount && this.getDataWithIndex(startIndex).offset < offset) {
      startIndex += interval;
      interval *= 2;
    }

    return this.binarySearch({
      high: Math.min(startIndex, this.itemCount - 1),
      low: Math.floor(startIndex / 2),
      offset,
    });
  }

  /**
   * 获取最后一个测量过的列表项的数据
   */
  private getDataOfLastMeasuredItem() {
    return this.lastMeasuredIndex >= 0
      ? this.listItemData[this.lastMeasuredIndex]
      : { offset: 0, size: 0 };
  }

  /**
   * 根据下标获取列表项的信息
   */
  public getDataWithIndex(index: number) {
    if (index < 0 || index >= this.itemCount) {
      throw Error(`Requested index ${index} is outside of range 0..${this.itemCount}`);
    }
    if (index > this.lastMeasuredIndex) {
      const lastMeasuredItemData = this.getDataOfLastMeasuredItem();
      let offset = lastMeasuredItemData.offset + lastMeasuredItemData.size;
      for (let i = this.lastMeasuredIndex + 1; i <= index; i++) {
        const size = this.itemSizeGetter(i);

        if (size == null || isNaN(size)) {
          throw Error(`Invalid size returned for index ${i} of value ${size}`);
        }

        this.listItemData[i] = {
          offset,
          size,
        };

        offset += size;
      }

      this.lastMeasuredIndex = index;
    }
    return this.listItemData[index];
  }

  /**
   * 获取列表的总长度
   */
  public getListTotleSize(): number {
    const lastMeasuredSizeAndPosition = this.getDataOfLastMeasuredItem();

    return (
      lastMeasuredSizeAndPosition.offset +
      lastMeasuredSizeAndPosition.size +
      (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize
    );
  }

  /**
   * 获取渲染的dom列表项范围
   */
  public getRenderRange({
    viewScrollSize,
    viewScrollOffset,
    overscanCount,
  }: GetRenderRangeParams): GetRenderRangeReturn {
    const listTotalSize = this.getListTotleSize();
    if (listTotalSize === 0) {
      return {};
    }
    const startOffset = viewScrollOffset;
    const maxOffset = viewScrollOffset + viewScrollSize;
    let start = this.getIndexWithOffset(startOffset);
    if (typeof start === 'undefined') {
      throw Error(`Invalid offset ${viewScrollOffset} specified`);
    }

    const startItem = this.getDataWithIndex(start);
    let offset = startItem.offset + startItem.size;
    let stop = start;

    while (offset < maxOffset && stop < this.itemCount - 1) {
      stop++;
      offset += this.getDataWithIndex(stop).size;
    }

    if (overscanCount) {
      start = Math.max(0, start - overscanCount);
      stop = Math.min(stop + overscanCount, this.itemCount - 1);
    }

    return {
      start,
      stop,
    };
  }

  /**
   * 更新列表的offset
   */
  public updateViewScrollOffset({
    align,
    viewScrollOffset,
    viewScrollSize,
    targetIndex,
  }: UpdateViewScrollOffsetParams): number {
    const targetItemData = this.getDataWithIndex(targetIndex);
    const maxOffset = targetItemData.offset;
    const minOffset = maxOffset - viewScrollOffset + targetItemData.size;

    let idealOffset;

    switch (align) {
      case Alignment.END:
        idealOffset = minOffset;
        break;
      case Alignment.CENTER:
        idealOffset = maxOffset - (viewScrollSize - targetItemData.size) / 2;
        break;
      case Alignment.START:
        idealOffset = maxOffset;
        break;
      default:
        idealOffset = Math.max(minOffset, Math.min(maxOffset, viewScrollOffset));
    }

    const totalSize = this.getListTotleSize();

    return Math.max(0, Math.min(totalSize - viewScrollSize, idealOffset));
  }
}

export { ListItemDataType };

export default VirtualListManager;
