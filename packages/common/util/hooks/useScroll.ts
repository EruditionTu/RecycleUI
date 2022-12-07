import { RefObject, useRef } from 'react';
import { getScrollParents } from '../dom/getScrollParent';

// Why pass ref object instead of HTMLElement?
const useScroll = (
  ele: RefObject<HTMLElement | null>,
  onScroll: (evt: Event) => void,
  deps: any[] = [],
) => {
  const initRef = useRef(false);
  if (!initRef.current) {
    const handleScroll = (evt: Event) => {
      onScroll(evt);
    };
    // dom element 动态创建的场景
    if (ele.current) {
      const parentElements = getScrollParents(ele.current);

      parentElements.forEach((parentElement) => {
        (parentElement as HTMLElement).onscroll = handleScroll;
      });
    }
    initRef.current = true;
  }
  // useLayoutEffect(() => {

  //     // return function cleanup() {
  //     //   parentElements.forEach((parentElement) => {
  //     //     (parentElement as HTMLElement).onscroll = null;
  //     //   });
  //     // };
  //   }
  // }, deps);
};
export default useScroll;
