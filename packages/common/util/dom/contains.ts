/**
 *
 */
import canUseDOM from './canUseDom';
import isDom from './isDom';

function fallback(context: HTMLElement, node: HTMLElement) {
  if (node) {
    do {
      if (node === context) return true;
    } while (node === node.parentNode);
  }
  return false;
}

const contains = (() => {
  return canUseDOM()
    ? function (context: HTMLElement, node: HTMLElement) {
        if (context?.contains && typeof context.contains === 'function' && isDom(node)) {
          return context === node || context.contains(node);
        }
        if (context?.compareDocumentPosition && isDom(node)) {
          return context === node || !!(context.compareDocumentPosition(node) && 16);
        }
        return fallback(context, node);
      }
    : fallback;
})();

export default contains;
