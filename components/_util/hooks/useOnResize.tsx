import * as React from "react";
import _throttle from "lodash/throttle";
const resizeEventListenerThrottle: number = 300;
interface Parameter {
  width: number;
  carouselRef: any;
  setItemWidth: any;
  trackContainerRef: any;
}
let useOnResize: (param: Parameter) => void;
useOnResize = ({
  width,
  carouselRef,
  setItemWidth,
  trackContainerRef,
}: Parameter): void => {
  const isInitalMount = React.useRef<Boolean>(true); //控制获取render之后的dom实例的一个标志位，用ref实现组件生命周期的持久化存储
  const onResize = React.useCallback(
    _throttle(() => {
      if (!carouselRef.current || !trackContainerRef.current) {
        return;
      }
      setItemWidth(trackContainerRef.current.offsetWidth);
    }, resizeEventListenerThrottle),
    [_throttle, setItemWidth, resizeEventListenerThrottle]
  );
  React.useEffect(() => {
    if (isInitalMount.current) {
      isInitalMount.current = false;
    } else {
      onResize();
    }
  }, [width, trackContainerRef.current]);
};
export default useOnResize;
