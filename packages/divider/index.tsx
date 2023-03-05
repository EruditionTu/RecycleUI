import classNames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import invariant from 'invariant';
import type DividerProps from './type';
import './style'

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    className = '',
    children,
    dashed = false,
    type = 'horizontal',
    align = 'center',
    orientationMargin,
    ...others
  } = props;

  const hasCustomMarginLeft = align === 'left' && typeof orientationMargin === 'number';
  const hasCustomMarginRight = align === 'right' && typeof orientationMargin === 'number';

  invariant(
    align === 'center' || align === 'left' || align === 'right',
    'align must be included in left,right or center',
  );

  invariant(
    type === 'horizontal' || type === 'vertical',
    'type must be included in horizontal or vertical',
  );

  const prefixCls = useMemo(() => 'recycle-ui-divider', []);
  const dividerCls = useMemo(
    () =>
      classNames(className, prefixCls, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${align}`]: align,
        [`${prefixCls}-with-text`]: children,
        [`${prefixCls}-dashed`]: dashed,
        [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
        [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight,
      }),
    [
      className,
      prefixCls,
      type,
      align,
      children,
      dashed,
      hasCustomMarginLeft,
      hasCustomMarginRight,
    ],
  );

  const innerStyle = {
    ...(hasCustomMarginLeft && { marginLeft: orientationMargin }),
    ...(hasCustomMarginRight && { marginRight: orientationMargin }),
  };
  return (
    <div ref={ref} className={dividerCls} {...others}>
      {children && type === 'horizontal' && (
        <span className={`${prefixCls}-inner-text`} style={innerStyle}>
          {children}
        </span>
      )}
    </div>
  );
});

export default Divider;
