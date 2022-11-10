// Judge the obj is dom node or not
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
