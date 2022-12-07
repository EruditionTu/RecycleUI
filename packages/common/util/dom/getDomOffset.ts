function getDomOffset(ele: HTMLElement): number {
  if (!ele.offsetParent) return 0;
  return ele.offsetTop;
}
export default getDomOffset;
