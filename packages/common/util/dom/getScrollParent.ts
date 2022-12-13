import getStyleComputedProperty from './getStyleComputedProperty';
import getParentNode from './getParentNode';

/**
 * 该函数用于获取目标节点的相对滚动祖先节点
 * @param element 目标元素
 * @returns 返回滚动祖先节点
 */
function getScrollParent(element?: Element): Element {
  if (!element) {
    return document.body;
  }

  // eslint-disable-next-line default-case
  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument!.body;
    case '#document':
      return (element as any).body as Element;
  }

  // Firefox want us to check `-x` and `-y` variations as well
  const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element) as any);
}

/**
 * 该函数用于获取目标节点的全部滚动父节点
 * @param element
 * @returns
 */
function getScrollParents(element?: Element): Element[] {
  const scrollParents: Element[] = [];

  let scrollParent = getScrollParent(element);

  while (scrollParent.nodeName !== 'BODY') {
    scrollParents.push(scrollParent);
    scrollParent = getScrollParent(scrollParent.parentNode as Element);
  }

  scrollParents.push(scrollParent);

  return scrollParents;
}
export { getScrollParent, getScrollParents };
