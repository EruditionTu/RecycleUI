import React, { useMemo } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import Overlay from '../overlay';
import type { OverlayProps } from '../overlay';
import '../overlay/style';

export interface DrawerProps extends OverlayProps {
  footer?: ReactNode;
  icon?: ReactNode;
  title?: React.ReactNode;
  bodyProps?: HTMLAttributes<HTMLDivElement>;
  placement?: 'top' | 'right' | 'bottom' | 'left' | {};
  size?: number;
  isCloseButtonShown?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default (props: DrawerProps = {}) => {
  const {
    className,
    style,
    placement = 'right',
    size = 260,
    title,
    footer,
    icon,
    isCloseButtonShown = true,
    bodyProps,
    timeout = 300,
    isOpen = false,
    maskClosable = true,
    ...overlayProps
  } = props;
  const prefixCls = useMemo(() => 'recycle-ui-drawer', []);
  const cls = classNames(className, prefixCls, placement);
  const bodyCls = classNames(bodyProps?.className, `${prefixCls}-body-inner`);
  const styl = {
    ...style,
    [/^(top|bottom)$/.test(placement as string) ? 'height' : 'width']: size,
  };
  const footerView = useMemo(
    () => (footer ? <div className={`${prefixCls}-footer`}>{footer}</div> : null),
    [footer],
  );
  const titleView = useMemo(() => (title ? <h4>{title}</h4> : null), [title]);
  return (
    <Overlay
      className={cls}
      timeout={timeout}
      open={isOpen}
      maskClosable={maskClosable}
      hasBackdrop
      transitionName={prefixCls}
      {...overlayProps}
    >
      <div className={`${prefixCls}-wrapper`} style={styl}>
        {(title || icon) && (
          <div className={`${prefixCls}-header`}>
            {icon}
            {titleView}
            {title && isCloseButtonShown && <CloseOutlined onClick={props.onClose} />}
          </div>
        )}
        <div className={`${prefixCls}-body`}>
          <div {...bodyProps} className={bodyCls}>
            {props.children}
          </div>
        </div>
        {footerView}
      </div>
    </Overlay>
  );
};
