/**
 * Overlay 组件
 * 动画库 react-transition-group文档
 * https://reactcommunity.org/react-transition-group/
 */
import React, { cloneElement, useEffect, useRef, useState, useMemo, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionProps } from 'react-transition-group/Transition';
import classNames from 'classnames';
import Portal, { PortalProps } from '../common/components/portal';
import type { WithCustomStyle } from '@/packages/common/util/toolType';
import './style/index.less';

const defaultEventCb = () => {};

export interface OverlayProps extends Omit<TransitionProps, 'timeout'> {
  timeout?: TransitionProps['timeout'];
  open?: boolean;
  usePortal?: boolean;
  maskClosable?: boolean;
  dialogProps?: React.HTMLProps<HTMLElement>;
  backdropProps?: React.HTMLProps<HTMLDivElement>;
  portalProps?: PortalProps;
  hasBackdrop?: boolean;
  unmountOnExit?: boolean;
  transitionName?: string;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onOpening?: (node: HTMLElement, isAppearing: boolean) => void;
  onOpened?: (node: HTMLElement, isAppearing: boolean) => void;
  onClosing?: (node: HTMLElement) => void;
  onClosed?: (node: HTMLElement | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClose?: (evn: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Overlay = (props: WithCustomStyle<OverlayProps>) => {
  const {
    style,
    className,
    open = false,
    usePortal = true,
    hasBackdrop = true,
    maskClosable = true,
    backdropProps = {},
    dialogProps = {},
    portalProps = {},
    onEnter = defaultEventCb,
    onEntering = defaultEventCb,
    onEntered = defaultEventCb,
    onOpening = defaultEventCb,
    onOpened = defaultEventCb,
    onExiting = defaultEventCb,
    onExited = defaultEventCb,
    onClose = defaultEventCb,
    onClosing = defaultEventCb,
    onClosed = defaultEventCb,
    transitionName = 'recycle-ui-overlay',
    unmountOnExit = true,
    timeout = 300,
    children = '',
    ...otherProps
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>();
  const [visible, setVisible] = useState<boolean>();
  const container = useRef<HTMLElement>(null);
  const overlay = useRef(null);

  console.log(isOpen, visible);

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
      typeof onClose === 'function' && onClose(e);
    }
    backdropProps?.onMouseDown?.(e as any);
  }, []);

  const handleClosed = useCallback(
    (node: HTMLElement | MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setVisible(false);
      typeof onClosed === 'function' && onClosed(node);
    },
    [],
  );
  /**
   * 处理children
   */
  const OverlayComp =
    typeof children === 'object' ? (
      cloneElement(children, {
        ...dialogProps,
        style: { ...children.props.style, ...dialogProps.style },
        className: classNames(children.props.className, `${prefixCls}-content`),
        tabIndex: 0,
      })
    ) : (
      <span {...dialogProps} className={`${prefixCls}-content`}>
        {children}
      </span>
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
  const TransitionGroupComp = (
    <CSSTransition
      unmountOnExit={unmountOnExit}
      timeout={timeout}
      classNames={transitionName}
      in={isOpen}
      nodeRef={overlay}
      onEnter={(isAppering: boolean) => {
        onEnter(overlay.current!, isAppering);
      }}
      onEntering={(isAppearing: boolean) => {
        onOpening(overlay.current!, isAppearing);
        onEntering(overlay.current);
      }}
      onEntered={(isAppearing: boolean) => {
        onOpened(overlay.current!, isAppearing);
        onEntered(overlay.current!);
      }}
      onExiting={() => {
        onClosing(overlay.current!);
        onExiting(overlay.current!);
      }}
      onExited={() => {
        handleClosed(overlay.current!);
        onExited(overlay.current!);
      }}
      {...otherProps}
    >
      {(status: any) => (
        <div
          style={style}
          ref={overlay}
          className={classNames(prefixCls, className, {
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
  if (visible && usePortal) {
    return <Portal {...{ ...portalProps }}>{TransitionGroupComp}</Portal>;
  }
  return TransitionGroupComp;
};
export default Overlay;
