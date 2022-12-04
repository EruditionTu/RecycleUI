import React, {
  useCallback,
  useRef,
  useState,
  useMemo,
  cloneElement,
  useLayoutEffect,
  useEffect,
} from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type TooltipProps from './type';
import findChildInDom from '@/packages/common/util/dom/findChildInDom';
import getRoot from '@/packages/common/util/dom/getRoot';
import Portal from '@/packages/common/util/toolComponents/Portal';
import Position from '@/packages/common/util/toolComponents/Position';
import withDefault from '@/packages/common/util/withDefault';
import isDom from '@/packages/common/util/dom/isDom';

type WithChildren<T> = T & { children: ReactElement };

const Tooltip: FC<WithChildren<TooltipProps>> = (
  props: WithChildren<TooltipProps>,
): ReactElement => {
  const {
    title = '',
    color,
    open,
    trigger = 'hover',
    mouseEnterDelay = 20,
    mouseLeaveDelay = 20,
    placement = 'top',
    defaultOpen = false,
    arrowPointAtCenter = false,
    destroyTooltipOnHide = false,
    getPopupContainer = null,
    zIndex = 200,
    onOpenChange = () => {},
    children = <></>,
  } = props;

  const [visible, setVislble] = useState<boolean>(
    typeof defaultOpen === 'boolean' ? defaultOpen : false,
  );

  const childrenRef = useRef<HTMLElement | null>(null);
  const tooltipRoot = useRef<HTMLElement | null>(null);
  const container = useRef<HTMLElement | null>(null);
  const initRef = useRef(false);

  const classFirstName = useMemo(() => 'recycle-ui-tooltip', []);
  const getClassName = useCallback((baseName) => `${classFirstName}-${baseName}`, [classFirstName]);

  // 获取弹窗类组件的根节点函数
  const getTooltipRoot = useCallback(() => {
    if (tooltipRoot.current) return tooltipRoot.current;
    const rootDom: HTMLElement = isDom(getPopupContainer)
      ? (getPopupContainer as HTMLElement)
      : getRoot();
    const tooltipRootExisted = findChildInDom(
      rootDom,
      (item) => item?.id === 'recycle-ui-popup-root',
    );
    if (tooltipRootExisted) {
      tooltipRoot.current = tooltipRootExisted as HTMLElement;
      return tooltipRootExisted;
    }
    tooltipRoot.current = document.createElement('div');
    tooltipRoot.current.style.position = 'absolute';
    tooltipRoot.current.style.top = '0';
    tooltipRoot.current.style.left = '0';
    tooltipRoot.current.style.width = '100%';
    tooltipRoot.current.id = 'recycle-ui-popup-root';
    rootDom.appendChild(tooltipRoot.current);
    return tooltipRoot.current;
  }, [tooltipRoot, getPopupContainer]);

  const withDefaultPlacement = useMemo(
    () =>
      withDefault(
        placement,
        [
          'top',
          'topLeft',
          'topRight',
          'left',
          'leftTop',
          'leftBottom',
          'right',
          'rightTop',
          'rightBottom',
          'bottom',
          'bottomLeft',
          'bottomRight',
        ],
        'top',
      ),
    [],
  );
  // 不显示销毁
  const withDefaultDestoryTooltipOnHide = useMemo(
    () => (typeof destroyTooltipOnHide === 'boolean' ? destroyTooltipOnHide : false),
    [destroyTooltipOnHide],
  );
  // 角标指向中间
  const withDefaultArrowPointAtCenter = useMemo(
    () => (typeof arrowPointAtCenter === 'boolean' ? arrowPointAtCenter : false),
    [arrowPointAtCenter],
  );
  // tooltip 是否可见，open的props更加优先
  const tooltipVisible = useMemo(() => {
    return typeof open === 'boolean' ? open : visible;
  }, [open, visible]);
  // tooltip角标的class
  const arrowClasses = useMemo(
    () =>
      classNames(getClassName('arrow'), {
        [getClassName('top')]: withDefaultPlacement.startsWith('top'),
        [getClassName('left')]: withDefaultPlacement.startsWith('left'),
        [getClassName('right')]: withDefaultPlacement.startsWith('right'),
        [getClassName('bottom')]: withDefaultPlacement.startsWith('right'),
      }),
    [withDefaultPlacement],
  );
  // tooltip显示
  const openTooltip = useCallback((): void => {
    if (typeof open === 'boolean' || visible) return;
    setVislble(true);
  }, [open, visible]);
  // tooltip关闭
  const closeTooltip = useCallback((): void => {
    if (typeof open === 'boolean' || !visible) return;
    setVislble(false);
  }, [open, visible]);
  // hover 鼠标进入触发
  const hoverOpen = useCallback((): void => {
    if (trigger === 'hover') {
      setTimeout(openTooltip, typeof mouseEnterDelay === 'number' ? mouseEnterDelay : 20);
    }
  }, [trigger, openTooltip]);
  // hover 鼠标移除关闭
  const hoverClose = useCallback((): void => {
    if (trigger === 'hover') {
      setTimeout(closeTooltip, typeof mouseLeaveDelay === 'number' ? mouseLeaveDelay : 20);
    }
  }, [trigger, closeTooltip]);
  // click 点击打开
  const clickOpen = useCallback((): void => {
    if (trigger === 'click') {
      openTooltip();
    }
  }, [trigger, openTooltip]);
  // 触发元素的额外属性
  const triggerProps = useMemo(
    () => ({
      ref: childrenRef,
      onMouseEnter: hoverOpen,
      onMouseLeave: hoverClose,
      onClick: clickOpen,
    }),
    [childrenRef, hoverClose, hoverOpen],
  );
  const PositoinExt = useMemo(() => {
    switch (withDefaultPlacement) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        return { extTop: 10 };
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        return { extTop: -10 };
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        return { extLeft: 10 };
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        return { extLeft: -10 };
      default:
        return {};
    }
  }, [withDefaultPlacement]);
  // 角标相对于弹窗的位置
  const arrowRelativePositoin = useMemo(() => {
    switch (withDefaultPlacement) {
      case 'topLeft':
      case 'bottomLeft':
        return { left: '25%' };
      case 'topRight':
      case 'bottomRight':
        return { left: '75%' };
      case 'leftTop':
      case 'rightTop':
        return { top: '25%' };
      case 'leftBottom':
      case 'rightBottom':
        return { top: '75%' };
      default:
        return {};
    }
  }, [withDefaultPlacement]);
  // tooltip的弹窗
  const TooltipPopup = useMemo(() => {
    if (withDefaultDestoryTooltipOnHide) {
      return (
        <>
          {tooltipVisible && (
            <Portal getContainer={() => container.current as HTMLElement} destroyTooltipOnHide>
              <Position
                triggerRef={childrenRef}
                placement={withDefaultPlacement}
                {...PositoinExt}
                pointCenter={withDefaultArrowPointAtCenter}
              >
                <div className={getClassName('content')}>
                  <div
                    className={arrowClasses}
                    style={{ borderColor: color, zIndex, ...arrowRelativePositoin }}
                  />
                  <div className={getClassName('inner')} style={{ backgroundColor: color, zIndex }}>
                    {title}
                  </div>
                </div>
              </Position>
            </Portal>
          )}
        </>
      );
    }
    return (
      <Portal getContainer={() => container.current as HTMLElement}>
        <Position
          triggerRef={childrenRef}
          placement={withDefaultPlacement}
          {...PositoinExt}
          pointCenter={withDefaultArrowPointAtCenter}
        >
          <div className={getClassName('content')}>
            <div
              className={arrowClasses}
              style={{ borderColor: color, zIndex, ...arrowRelativePositoin }}
            />
            <div className={getClassName('inner')} style={{ backgroundColor: color, zIndex }}>
              {title}
            </div>
          </div>
        </Position>
      </Portal>
    );
  }, [
    withDefaultDestoryTooltipOnHide,
    withDefaultPlacement,
    withDefaultArrowPointAtCenter,
    arrowRelativePositoin,
    PositoinExt,
    tooltipVisible,
    arrowClasses,
    zIndex,
    color,
    title,
    childrenRef,
    container,
  ]);

  // tooltip显示于消失的回调，如果可见需要将dom节点加入，至于移除container节点是Portal组件实现的
  useLayoutEffect(() => {
    if (tooltipVisible) {
      if (withDefaultDestoryTooltipOnHide) {
        const tooltipRootDom = tooltipRoot.current || getTooltipRoot();
        tooltipRootDom.appendChild(container.current as HTMLElement);
      } else {
        (container.current as HTMLElement).style.display = 'block';
      }
    } else {
      if (!withDefaultDestoryTooltipOnHide && container.current) {
        container.current.style.display = 'none';
      }
    }
    onOpenChange(tooltipVisible);
  }, [tooltipVisible, withDefaultDestoryTooltipOnHide, onOpenChange]);

  // 对于隐藏不销毁的tooltip移除container的dom节点
  useEffect(
    () => () => {
      if (!withDefaultDestoryTooltipOnHide || tooltipVisible) {
        container.current?.parentNode?.removeChild(container.current);
      }
    },
    [],
  );

  // 初次可见创建tooltip挂载的dom
  if (!initRef.current && tooltipVisible) {
    const currentContainer = document.createElement('div');
    currentContainer.className = 'recycle-ui-tooltip';
    container.current = currentContainer;
    initRef.current = true;
    if (!withDefaultDestoryTooltipOnHide) {
      const tooltipRootDom = tooltipRoot.current || getTooltipRoot();
      tooltipRootDom.appendChild(container.current as HTMLElement);
    }
  }

  return (
    <>
      {cloneElement(children, triggerProps)}
      {cloneElement(TooltipPopup)}
    </>
  );
};

export default Tooltip;