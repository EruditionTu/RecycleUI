type ConditionType = (dom: Element | null) => boolean;
/**
 * if the function find that dom satisfy the condition will return the node otherwise if will return undefined
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
