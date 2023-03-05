import React, { useMemo } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import invariant from 'invariant';
import OverlayTrigger from '../overlay-trigger';
import type TooltipProps from './type';
import "./style";

type WithChildren<T> = T & { children: ReactElement };

const Tooltip: FC<WithChildren<TooltipProps>> = (
  props: WithChildren<TooltipProps>,
): ReactElement => {
  const {
    placement = 'top',
    open,
    trigger = 'hover',
    delay,
    usePortal = true,
    visibleArrow = true,
    onOpenChange = () => {},
    ...other
  } = props;

  invariant(
    typeof visibleArrow === 'boolean',
    'visibleArrow of the props should be a boolean value.',
  );

  const prefixCls = useMemo(() => 'recycle-ui-tooltip', []);
  const tooltipCls = useMemo(
    () => classNames(prefixCls, { 'no-arrow': !visibleArrow }),
    [visibleArrow, prefixCls],
  );

  return (
    <OverlayTrigger
      usePortal={usePortal}
      open={open}
      trigger={trigger}
      delay={delay}
      onOpenChange={onOpenChange}
      placement={placement}
      {...other}
      overlay={
        <div className={tooltipCls}>
          {visibleArrow && <div className={classNames(`${prefixCls}-arrow`)} />}
          <div className={`${prefixCls}-inner`}>{props.content}</div>
        </div>
      }
    >
      {typeof props.children === 'object' ? props.children : <span>{props.children}</span>}
    </OverlayTrigger>
  );
};

export default Tooltip;
