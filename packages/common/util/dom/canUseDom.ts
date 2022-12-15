/**
 * 是否可以操作dom
 * @returns
 *
 */
const canUseDOM = () =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement);
export default canUseDOM;
