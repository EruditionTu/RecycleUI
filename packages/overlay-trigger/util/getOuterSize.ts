export type Sizes = {
  width: number;
  height: number;
};
/**
 * 获取元素的外部大小，包含偏移距离和margin
 * @param element
 * @returns
 */
export default function getOuterSizes(element: HTMLElement): Sizes {
  const rect = element.getBoundingClientRect();
  const result: Sizes = {
    width: element.offsetWidth || element.scrollWidth || rect.width || 0,
    height: element.offsetHeight || element.scrollHeight || rect.height || 0,
  };
  return result;
}
