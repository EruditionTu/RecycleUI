export interface BordersSize extends CSSStyleDeclaration {
  [key: string]: any;
}

/**
 * 获取元素x轴或y轴的边框宽度
 * @param styles 样式
 * @param axis 横竖方向
 * @returns 返回的
 */
export default function getBordersSize(styles: BordersSize, axis: 'x' | 'y'): number {
  const sideA: string = axis === 'x' ? 'Left' : 'Top';
  const sideB: string = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles[`border${sideA}Width`]) + parseFloat(styles[`border${sideB}Width`]);
}
