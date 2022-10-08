let simulateEvent: (event: any) => void;
enum touchEventMap {
  touchstart = "mousedown",
  touchmove = "mousemove",
  touchend = "mouseup",
}
simulateEvent = (event: any): void => {
  const touch: any = event.changedTouches[0];
  const { screenX, screenY, clientX, clientY } = touch;
  const simulatedEvent = new MouseEvent(touchEventMap[event.type], {
    bubbles: true,
    cancelable: true,
    view: window,
    detail: 1,
    screenX,
    screenY,
    clientX,
    clientY,
  });
  touch.target.dispatchEvent(simulatedEvent);
};

export default simulateEvent;
