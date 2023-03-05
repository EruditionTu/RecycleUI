import React, { useMemo } from 'react';
import OverlayTrigger, { OverlayTriggerProps } from '../overlay-trigger';
import "./style"

export interface DropdownProps extends OverlayTriggerProps {
  menu?: React.ReactNode;
}

export default function Dropdown(props: DropdownProps) {
  const { placement = 'bottomLeft', className, menu, children, disabled, ...other } = props;

  const prefixCls = useMemo(() => 'recycle-ui-dropdown', []);

  const cls = useMemo(
    () => [prefixCls, className].filter(Boolean).join(' ').trim(),
    [prefixCls, className],
  );

  return (
    <OverlayTrigger
      isOutside
      autoAdjustOverflow
      className={cls}
      disabled={disabled}
      placement={placement}
      {...other}
      overlay={menu as any}
    >
      {React.cloneElement(children, { ...children.props })}
    </OverlayTrigger>
  );
}
