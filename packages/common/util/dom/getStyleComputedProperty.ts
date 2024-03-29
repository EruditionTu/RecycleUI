/**
 * 获取指定元素指定css属性的属性值
 * @param element 目标元素
 * @param property 属性键名
 * @returns
 */
function getStyleComputedProperty(element: Element, property?: keyof CSSStyleDeclaration) {
  if (element.nodeType !== 1) {
    return [];
  }
  const window = element.ownerDocument!.defaultView!;
  const css: any = (window as Window).getComputedStyle(element, null);
  return property ? css[property] : css;
}
export default getStyleComputedProperty;
