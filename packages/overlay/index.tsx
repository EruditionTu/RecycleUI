/**
 * Overlay 组件
 * 动画库 react-transition-group文档
 * https://reactcommunity.org/react-transition-group/
 */
import React, { cloneElement, useEffect, useRef, useState, useMemo, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import omit from 'lodash/omit';
import Portal from '../common/components/Portal';
import type { WithCustomStyle } from '@/packages/common/util/type';
import type OverlayProps from './type';

const defaultEventCb = () => {};

const Overlay = (props: WithCustomStyle<OverlayProps>) => {
  const {
    style,
    className,
    containerDom,
    open = false,
    usePortal = true,
    hasBackdrop = true,
    maskClosable = true,
    forceRenderDom = false,
    backdropProps = {},
    dialogProps = {},
    portalProps = {},
    onEnter = defaultEventCb,
    onEntering = defaultEventCb,
    onEntered = defaultEventCb,
    onExit = defaultEventCb,
    onExiting = defaultEventCb,
    onExited = defaultEventCb,
    onClose = defaultEventCb,
    transitionName = 'recycle-ui-overlay',
    destroyTooltipOnHide = false,
    timeout = 300,
    children = '',
    ...other
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>();
  const [visible, setVisible] = useState<boolean>();
  const firstRender = useRef<boolean>(true);
  const container = useRef<HTMLElement>(null);
  const overlay = useRef(null);

  const prefixCls = useMemo(() => 'recycle-ui-overlay', []);

  /**
   * 弹窗将被关闭执行的操作
   */
  const overlayWillClose = useCallback(() => {
    if (hasBackdrop && usePortal) {
      document.body.classList.remove(`${prefixCls}-open`);
    }
  }, [prefixCls, hasBackdrop, usePortal]);
  /**
   * 弹窗将被打开执行的操作
   */
  const overlayWillOpen = useCallback(() => {
    if (hasBackdrop && usePortal) {
      document.body.classList.add(`${prefixCls}-open`);
    }
  }, [prefixCls, hasBackdrop, usePortal]);
  /**
   * 点击蒙层关闭
   */
  const handleBackdropMouseDown = useCallback((e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== container.current && usePortal) {
      return;
    }
    if (maskClosable && hasBackdrop) {
      overlayWillClose();
      setIsOpen(false);
      typeof onClose === 'function' && onClose(e as any);
    }
    backdropProps?.onMouseDown?.(e as any);
  }, []);

  const handleExited = useCallback(
    (node: HTMLElement | MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setVisible(false);
      typeof onExited === 'function' && onExited(overlay.current!);
    },
    [],
  );
  /**
   * 处理children
   */
  const OverlayComp =
    typeof children === 'object' ? (
      cloneElement(children, {
        style: { ...children.props.style },
        className: classNames(children.props.className, `${prefixCls}-content`),
        tabIndex: 0,
      })
    ) : (
      <span className={`${prefixCls}-content`}>{children}</span>
    );
  useEffect(() => {
    if (isOpen !== open && open) {
      setVisible(true);
    }
    if (isOpen !== open && !open) {
      overlayWillClose();
      setIsOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (visible) {
      overlayWillOpen();
      setIsOpen(true);
    }
  }, [visible]);

  if (visible && firstRender.current) {
    firstRender.current = false;
  }

  const TransitionGroupComp = (
    // @ts-ignore
    <CSSTransition
      unmountOnExit={destroyTooltipOnHide}
      timeout={timeout}
      classNames={transitionName}
      in={isOpen}
      nodeRef={overlay}
      onEnter={(isAppering: boolean) => {
        onEnter(overlay.current!, isAppering);
      }}
      onEntering={(isAppearing: boolean) => {
        onEntering(overlay.current!, isAppearing);
      }}
      onEntered={(isAppearing: boolean) => {
        onEntered(overlay.current!, isAppearing);
      }}
      onExit={() => {
        onExit(overlay.current!);
      }}
      onExiting={() => {
        onExiting(overlay.current!);
      }}
      onExited={() => {
        handleExited(overlay.current!);
      }}
      {...other}
    >
      {(status: any) => (
        <div
          {...omit(dialogProps, 'style', 'className')}
          style={{ ...style, ...dialogProps.style }}
          ref={overlay}
          className={classNames(prefixCls, className, dialogProps.className, {
            [`${prefixCls}-inline`]: !usePortal,
            [`${prefixCls}-enter-done`]: isOpen,
          })}
        >
          {hasBackdrop && (
            <div
              {...backdropProps}
              onMouseDown={handleBackdropMouseDown as any}
              className={classNames(`${prefixCls}-backdrop`, backdropProps.className)}
              tabIndex={maskClosable ? 0 : undefined}
            />
          )}
          {usePortal ? (
            <div
              ref={container as any}
              onMouseDown={handleBackdropMouseDown as any}
              className={`${prefixCls}-container`}
            >
              {cloneElement(OverlayComp, { 'data-status': status })}
            </div>
          ) : (
            cloneElement(OverlayComp, { 'data-status': status })
          )}
        </div>
      )}
    </CSSTransition>
  );
  if (containerDom instanceof HTMLElement) {
    containerDom.className = 'recycle-ui-portal';
  }
  if (usePortal) {
    return forceRenderDom || !firstRender.current ? (
      <Portal
        {...{
          ...portalProps,
          container: containerDom instanceof HTMLElement ? containerDom : undefined,
        }}
      >
        {TransitionGroupComp}
      </Portal>
    ) : null;
  }
  return forceRenderDom || !firstRender.current ? TransitionGroupComp : null;
};
export default Overlay;
export { OverlayProps };
