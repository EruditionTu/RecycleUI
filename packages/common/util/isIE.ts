import isBrowser from './isBroswer';

interface Document {
  documentMode?: any;
}

interface Window {
  MSInputMethodContext?: any;
}

const isIE11 =
  isBrowser() && !!((window as Window).MSInputMethodContext && (document as Document).documentMode);
const isIE10 = isBrowser() && /MSIE 10/.test(navigator.userAgent);

/**
 * 判断当前环境是不是IE10或IE11
 * @param version 需要检查的版本
 * @returns
 */
export default function isIE(version: number) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
