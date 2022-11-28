function getRoot(): HTMLElement {
  const bodyDom: HTMLElement = document.getElementsByTagName('body')[0];
  return bodyDom || document.documentElement;
}
export default getRoot;
