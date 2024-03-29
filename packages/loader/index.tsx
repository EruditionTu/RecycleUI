import classNames from 'classnames';
import React, { useMemo, cloneElement } from 'react';
import type { FC, ReactElement } from 'react';
import type LoaderProps from './type';
import useHiddenScroll from '../common/util/hooks/useHiddenScroll';
import "./style"

const indicatorView = (
  <svg viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10" />
  </svg>
);

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const {
    className = '',
    size = 'default',
    loading = true,
    fullscreen = false,
    tip,
    vertical,
    color,
    bgColor,
    children,
    indicator,
    ...other
  } = props;

  const prefixCls = useMemo(() => 'recycle-ui-loader', []);
  const tipsView = useMemo(
    () => (
      <div
        className={classNames(`${prefixCls}-tips`, {
          [`${prefixCls}-fullscreen`]: fullscreen,
          [`${prefixCls}-has-children`]: children,
          [`${prefixCls}-no-children`]: !children,
        })}
        style={{ color, backgroundColor: bgColor }}
      >
        <div className={`${prefixCls}-tips-nested`}>
          {indicator || indicatorView}
          {tip && (
            <div
              className={classNames(`${prefixCls}-text`, { [`${prefixCls}-vertical`]: vertical })}
            >
              {tip}
            </div>
          )}
        </div>
      </div>
    ),
    [fullscreen, bgColor, prefixCls, vertical, tip],
  );
  const loaderCls = useMemo(
    () =>
      classNames(prefixCls, className, {
        [`${prefixCls}-${size}`]: size,
      }),
    [],
  );
  useHiddenScroll('body', fullscreen);
  return (
    <div className={loaderCls} {...other}>
      {(loading || fullscreen) && tipsView}
      {children &&
        cloneElement(children as ReactElement, {
          ...(children as ReactElement).props,
          className: classNames(`${prefixCls}-warp`, (children as ReactElement).props?.className, {
            [`${prefixCls}-blur`]: loading,
          }),
        })}
    </div>
  );
};
export { LoaderProps };
export default Loader;
