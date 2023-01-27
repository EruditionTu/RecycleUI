export function transformPrePath(path: Array<Number | string>) {
  if (!path || path.length === 0) return '';
  return `${path.reduce((prev, cur) => {
    return `${prev}-${cur}`;
  })}-`;
}

export function findCanVisible(parent: HTMLDivElement, node: HTMLUListElement) {
  const [rangeLow, rangeHigh] = [
    parent.getBoundingClientRect().left,
    parent.getBoundingClientRect().left + node.getBoundingClientRect().width,
  ];
  for (let i = node.childNodes.length - 1; i >= 0; i--) {
    const RENDER_RANGE =
      (node.childNodes[i] as HTMLElement).offsetLeft +
      (node.childNodes[i] as HTMLElement).getBoundingClientRect().width;

    if (RENDER_RANGE > rangeLow && RENDER_RANGE < rangeHigh) {
      return i;
    }
  }
}
