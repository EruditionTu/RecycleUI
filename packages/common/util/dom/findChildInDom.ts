type ConditionType = (dom: Element | null) => boolean;
/**
 * 如果发现dom节点满足condition的条件，那么将会返回这个dom节点，否则返回undefined
 * @param container 容器节点
 * @param condition 条件
 * @returns 容器中满足条件的子节点
 */
function findChildInDom(container: HTMLElement, condition: ConditionType) {
  const { children } = container;
  for (let i = 0; i < children.length; i++) {
    if (condition(children[i])) {
      return children[i];
    }
  }
}
export default findChildInDom;
