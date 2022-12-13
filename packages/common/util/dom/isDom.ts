/**
 * 判断目标节点是否是dom节点
 * @param target 目标节点
 * @returns 目标节点是否是dom节点
 */
function isDom(target: any) {
  const isHTMLNode =
    typeof HTMLElement === 'object'
      ? function (dom: any) {
          return dom instanceof HTMLElement;
        }
      : function (dom: any) {
          return (
            dom && typeof dom === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string'
          );
        };
  return isHTMLNode(target);
}
export default isDom;
