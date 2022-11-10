type ConditionType = (dom: Element | null) => boolean;
// if the function find that dom satisfy the condition will return the node otherwise if will return undefined
function findChildInDom(container: HTMLElement, condition: ConditionType) {
  const { children } = container;
  for (let i = 0; i < children.length; i++) {
    if (condition(children[i])) {
      return children[i];
    }
  }
}
export default findChildInDom;
