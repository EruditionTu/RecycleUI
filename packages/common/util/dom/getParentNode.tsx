/**
 * 该函数用于获取一个元素的父节点
 * @param element 元素
 * @returns 元素的父节点
 */
function getParentNode(element: Element): Element {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || (element as any).host;
}
export default getParentNode;
