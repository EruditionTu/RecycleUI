import React, {
  cloneElement,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useImperativeHandle,
  useCallback,
  isValidElement,
  Children,
} from 'react';
import type { MouseEvent, PropsWithChildren } from 'react';
import classNames from 'classnames';
import Overlay from '../overlay';
import type { OverlayProps } from '../overlay';
import type OverlayTriggerProps from './type';
import type { OverlayTriggerRef, OverlayStyle, TriggerProps, Delay } from './type';
import type { IBoundingClientRect } from '../common/util/dom/getBoundingClientRect';
import withDefault from '../common/util/withDefault';
import contains from '../common/util/dom/contains';
import getStyle from './util/getStyle';
import isDom from '@/packages/common/util/dom/isDom';

export { OverlayTriggerRef, OverlayStyle, TriggerProps, Delay, OverlayTriggerProps };

const defaultEventCb = () => {};

const OverlayTrigger = forwardRef<OverlayTriggerRef, PropsWithChildren<OverlayTriggerProps>>(
  (props: PropsWithChildren<OverlayTriggerProps>, ref) => {
    const {
      open,
      destroyTooltipOnHide = false,
      defaultOpen = false,
      usePortal = true,
      disabled = false,
      autoAdjustOverflow = false,
      hoverOverlayClose = true,
      clickOverlayClose = false,
      clickTriggerClose = true,
      clickOutsideClose = true,
      trigger = 'hover',
      placement = 'top',
      transitionName = 'recycle-ui-overlay',
      delay,
      overlay,
      overlayContainer,
      children,
      onOpenChange = defaultEventCb,
      ...other
    } = props;

    const prefixCls = useMemo(() => 'recycle-ui-overlay-trigger', []);

    /**
     * 组件属性过滤器--一些比较关键的属性会被过滤一遍，比如
     * transitionName 这种会影响动画效果的就会被过滤一下
     * 以后会添加报错
     */
    const propsFilter = useMemo(() => {
      return {
        placement: withDefault(
          placement,
          [
            'top',
            'topLeft',
            'topRight',
            'bottom',
            'bottomLeft',
            'bottomRight',
            'left',
            'leftTop',
            'leftBottom',
            'right',
            'rightTop',
            'rightBottom',
          ],
          'top',
        ),
        trigger: withDefault(trigger, ['hover', 'click', 'focus'], 'hover'),
        transitionName: typeof transitionName === 'string' ? transitionName : 'recycle-ui-overlay',
        open: typeof open === 'boolean' ? open : undefined,
        defaultOpen: typeof defaultOpen === 'boolean' ? defaultOpen : undefined,
        overlayContainer: isDom(overlayContainer) ? overlayContainer : document.documentElement,
      };
    }, [placement, open, defaultOpen, transitionName, trigger, overlayContainer]);

    const [isOpen, setIsOpen] = useState(!!propsFilter.open);

    // 用于保存当前弹窗下一步的状态，主要修复在开启或者关闭动画没有执行完毕的情况下再次触发鼠标的hover，这时候会出现一些bug
    const hoverStateRef = useRef<'show' | 'hide' | null>(null);
    // 获取触发器的dom
    const triggerRef = useRef<HTMLElement>();
    // 获取弹窗的dom
    const popupRef = useRef<HTMLElement>();
    // 存储定时器，方便clear
    const timeoutRef = useRef<Array<any>>([]);
    const zIndex = useRef<number>(999);
    // 弹窗的位置状态
    const [overlayStyle, setOverlayStyle] = useState<OverlayStyle>({
      placement: propsFilter.placement,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: zIndex.current,
    });

    const child: any = Children.only(children);

    // 获取传入的child的参数
    const getChildProps = () => {
      if (child && isValidElement(child)) {
        return child.props;
      }
      return {};
    };

    // 控制overlay的ref获得的值
    useImperativeHandle(ref, () => ({
      hide: () => hide(),
      show: () => show(),
      overlayRef: popupRef,
    }));

    /**
     * 处理delay
     */
    const normalizeDelay = useCallback(
      (delay?: Delay) =>
        delay && typeof delay === 'object' ? delay : { show: delay, hide: delay },
      [],
    );

    /**
     * 手动隐藏弹窗
     */
    const hide = () => {
      // open的属性不为空，那么显示和隐藏由该属性控制
      if (propsFilter.open !== undefined) return;
      if (!isOpen) return;
      zIndex.current -= 1;
      setIsOpen(false);
    };

    /**
     * 手动显示弹窗
     */
    const show = () => {
      // open的属性不为空，那么显示和隐藏由该属性控制
      if (propsFilter.open !== undefined) return;
      if (isOpen) return;
      zIndex.current += 1;
      setIsOpen(true);
    };

    /**
     * 清除所有定时器
     */
    const clearAllTimeouts = useCallback(() => {
      if (timeoutRef.current?.length > 0) {
        for (const timeoutId of timeoutRef.current) {
          clearTimeout(timeoutId);
        }
        timeoutRef.current = [];
      }
    }, [timeoutRef.current]);

    /**
     * 鼠标进入浮层的触发事件
     */
    const handleEnter = useCallback(
      (node: HTMLElement, isAppearing: boolean) => {
        const style = getStyle({
          placement: propsFilter.placement,
          trigger: triggerRef.current as HTMLElement | IBoundingClientRect,
          popup: popupRef.current as HTMLElement | IBoundingClientRect,
          usePortal,
          autoAdjustOverflow,
        });
        setOverlayStyle({ ...style, zIndex: zIndex.current });
      },
      [
        propsFilter,
        triggerRef.current,
        popupRef.current,
        zIndex.current,
        usePortal,
        autoAdjustOverflow,
      ],
    );

    const handleResize = useCallback(() => {
      if (isOpen) {
        zIndex.current = -1;
        setIsOpen(false);
      }
    }, [isOpen, zIndex.current]);

    const handleShow = useCallback(() => {
      clearAllTimeouts();
      hoverStateRef.current = 'show';

      const _delay = normalizeDelay(delay);
      if (!_delay.show && !(props.children as JSX.Element)?.props.disabled) {
        show();
        return;
      }
      const handle = window.setTimeout(() => {
        if (hoverStateRef.current === 'show') show();
      }, _delay.show);
      timeoutRef.current.push(handle);
    }, [
      hoverStateRef.current,
      timeoutRef.current,
      delay,
      children,
      (props.children as JSX.Element)?.props.disabled,
    ]);

    const handleHide = useCallback(
      (isOutside: boolean) => {
        // 清除该组件所有定时器
        clearAllTimeouts();
        // 如果鼠标在外面，并且hoverOverlayClose 为假，那么不关闭组件
        // console.log('isOutside', isOutside);
        if (!isOutside && !hoverOverlayClose) return;
        hoverStateRef.current = 'hide';
        const delay = normalizeDelay(props.delay);

        if (!delay.hide) {
          hide();
          return;
        }

        const handle = setTimeout(() => {
          if (hoverStateRef.current === 'hide') hide();
        }, delay.hide);
        timeoutRef.current.push(handle);
      },
      [hoverStateRef.current, hoverOverlayClose, delay, timeoutRef.current],
    );

    /**
     * 模拟onMouseEnter和onMouseLeave事件
     * React提供的onMouseEnter、onMouseLeave事件有问题
     * https://github.com/facebook/react/issues/4251
     *
     */
    const handleMouseOverOut = useCallback(
      (handler: Function, e: MouseEvent, relatedNative: 'fromElement' | 'toElement') => {
        const target = e.currentTarget as HTMLElement;
        const related = (e.relatedTarget || (e.nativeEvent as any)[relatedNative]) as HTMLElement;

        let isOutside = true;
        if (
          (popupRef.current && contains(popupRef.current, related)) ||
          (triggerRef.current && contains(triggerRef.current, related))
        ) {
          isOutside = false;
        }
        console.log('isOutside', isOutside);
        if ((!related || related !== target) && !contains(target, related)) {
          handler(isOutside, e);
        }
      },
      [],
    );

    /**
     * 点击trigger和overlay之外的地方关闭弹窗，
     * 判断点击的dom是不是trigger节点或者弹窗节点的子节点，
     * 如果不是，那么将会执行关闭弹窗组件
     */
    const handleClickoutside = useCallback(
      (e: MouseEvent) => {
        if (!clickOutsideClose) return;
        const popupDom = popupRef.current;
        const triggerDom = triggerRef.current;
        if (
          popupDom &&
          triggerDom &&
          e.target &&
          !contains(popupDom, e.target as HTMLElement) &&
          !contains(triggerDom, e.target as HTMLElement)
        ) {
          zIndex.current--;
          setIsOpen(false);
        }
      },
      [popupRef.current, triggerRef.current, zIndex.current, clickOutsideClose],
    );

    /**
     * 点击overlay关闭弹窗
     */
    const handleClickOverlyClose = useCallback(() => {
      if (!clickOverlayClose || !isOpen) return;
      zIndex.current--;
      setIsOpen(false);
    }, [zIndex.current, isOpen, clickOverlayClose]);

    /**
     * 如果是点击触发，那么需要给文档绑定mousedown事件，判断
     * 点击的是不是trigger或者popup，不是的话就关闭
     */
    useEffect(() => {
      if (propsFilter.trigger === 'click' && isOpen) {
        document?.addEventListener('mousedown', handleClickoutside as any);
      }
      return () => {
        document?.removeEventListener('mousedown', handleClickoutside as any);
      };
    }, [propsFilter.trigger, isOpen, handleClickoutside]);

    /**
     * 添加resize监听，防止窗口变化导致弹窗位置不对
     */
    useEffect(() => {
      if (isOpen) window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isOpen]);

    /**
     * 初次进入组件，组件的显示与隐藏设置为defaultOpen
     */
    useLayoutEffect(() => {
      if (propsFilter.open === undefined && propsFilter.defaultOpen !== undefined) {
        setIsOpen(!!propsFilter.defaultOpen);
      }
    }, []);

    /**
     * 当props.open发生变化，那么组件的显示隐藏需要这个属性来改变
     * */
    useLayoutEffect(() => {
      if (propsFilter.open !== isOpen) {
        setIsOpen(!!propsFilter.open);
      }
    }, [propsFilter.open]);

    /**
     * 组件为显示的情况
     */
    useEffect(() => {
      const style = getStyle({
        placement: overlayStyle.placement || placement,
        trigger: triggerRef.current as HTMLElement | IBoundingClientRect,
        popup: popupRef.current as HTMLElement | IBoundingClientRect,
        usePortal,
        autoAdjustOverflow,
      });
      setOverlayStyle({ ...style, zIndex: zIndex.current });

      // 显示隐藏发生变化的回调
      onOpenChange(isOpen);
    }, [isOpen]);

    // 包裹一下传递给children的参数
    const triggerProps: TriggerProps = {};

    const overlayProps: OverlayProps = {
      ...other,
      placement: propsFilter.placement,
      open,
      dialogProps: { onClick: handleClickOverlyClose, ...other.dialogProps },
    };

    // 点击触发trigger弹窗
    if (propsFilter.trigger === 'click' && !disabled) {
      triggerProps.onClick = (e: any) => {
        const { onClick } = getChildProps() as any;
        isOpen ? clickTriggerClose && hide() : show();
        if (onClick) onClick(e, !isOpen);
      };
    }
    // 聚焦触发trigger弹窗
    if (propsFilter.trigger === 'focus' && !disabled) {
      triggerProps.onFocus = () => handleShow();
    }
    // hover触发的trigger弹窗
    if (propsFilter.trigger === 'hover' && !disabled) {
      triggerProps.onMouseOver = (e) => {
        handleMouseOverOut(handleShow, e, 'fromElement');
      };
      triggerProps.onMouseEnter = (e) => {
        handleMouseOverOut(handleShow, e, 'fromElement');
      };

      triggerProps.onMouseOut = (e) => {
        handleMouseOverOut(handleHide, e, 'toElement');
      };
      triggerProps.onMouseLeave = (e) => {
        handleMouseOverOut(handleHide, e, 'toElement');
      };
      if (overlayProps.dialogProps) {
        overlayProps.dialogProps.onMouseLeave = (e) => {
          handleMouseOverOut(handleHide, e, 'toElement');
        };
        overlayProps.dialogProps.onMouseOut = (e: any) => {
          handleMouseOverOut(handleHide, e, 'toElement');
        };
      }
    }

    return (
      <>
        {cloneElement(child, {
          ...child.props,
          ...triggerProps,
          ref: triggerRef,
          className: classNames(child.props.className, {
            [`${prefixCls}-disabled`]: disabled,
          }),
        })}
        <Overlay
          {...overlayProps}
          style={{ ...overlayStyle, ...overlayProps.style }}
          open={isOpen}
          hasBackdrop={false}
          onEnter={handleEnter}
          usePortal={usePortal}
          containerDom={propsFilter.overlayContainer}
          transitionName={propsFilter.transitionName}
          destroyTooltipOnHide={destroyTooltipOnHide}
          className={classNames(prefixCls, overlayStyle.placement)}
        >
          {cloneElement(overlay || <></>, {
            ...(overlay?.props ? overlay?.props : {}),
            ref: popupRef,
            className: classNames(overlay?.props?.className, propsFilter.placement),
          })}
        </Overlay>
      </>
    );
  },
);

export default OverlayTrigger;
