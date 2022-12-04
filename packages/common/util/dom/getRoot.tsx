/**
 * 该函数用于获取页面的根节点
 * @returns 页面根节点
 */
function getRoot(): HTMLElement {
  const bodyDom: HTMLElement = document.getElementsByTagName('body')[0];
  return bodyDom || document.documentElement;
}
export default getRoot;
