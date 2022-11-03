import { useEffect, useRef, useCallback } from 'react';
import _throttle from 'lodash/throttle';

const resizeEventListenerThrottle: number = 300;
interface Parameter {
  width: number;
  carouselRef: any;
  setItemWidth: any;
  trackContainerRef: any;
}
const useOnResize = ({
  width,
  carouselRef,
  setItemWidth,
  trackContainerRef,
}: Parameter): void => {
  const isInitalMount = useRef<Boolean>(true); // 控制获取render之后的dom实例的一个标志位，用ref实现组件生命周期的持久化存储
  const onResize = useCallback(
    _throttle(() => {
      if (carouselRef.current != null || trackContainerRef.current != null) {
        return;
      }
      setItemWidth(trackContainerRef.current.offsetWidth);
    }, resizeEventListenerThrottle),
    [_throttle, setItemWidth, resizeEventListenerThrottle],
  );
  useEffect(() => {
    if (isInitalMount.current) {
      isInitalMount.current = false;
    } else {
      onResize();
    }
  }, [width, trackContainerRef.current, isInitalMount.current]);
};
export default useOnResize;
