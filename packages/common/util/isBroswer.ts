/**
 * 判断是否是浏览器环境
 */
export default () => typeof window !== 'undefined' && typeof document !== 'undefined';
