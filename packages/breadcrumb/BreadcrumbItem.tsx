import React, { forwardRef, isValidElement, cloneElement, useMemo } from 'react';
import classNames from 'classnames';
import { RefElement, BreadcrumbItemProps } from './type';

const BreadcrumbItem = forwardRef<RefElement, BreadcrumbItemProps>((props, ref) => {
  const { className = '', active, separator, haveSeparator, href, children, ...other } = props;
  const isElm = isValidElement(separator) || typeof separator === 'string';
  const prefixCls = useMemo(() => 'recycle-ui-breadcrumb-item', []);
  const breadcrumbCls = useMemo(
    () =>
      classNames(className, prefixCls, {
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-no-separator`]: !separator,
        [`${prefixCls}-no-before`]: isElm,
      }),
    [active, className, separator, isElm, prefixCls],
  );
  const otherProps = { className: breadcrumbCls, ...other };
  return (
    <span ref={ref} {...otherProps}>
      {haveSeparator &&
        (isElm ? (
          <span className={`${prefixCls}-separator`}>{separator}</span>
        ) : (
          <span className={`${prefixCls}-separator`}>/</span>
        ))}
      {typeof href !== 'string' ? (
        <span className={`${prefixCls}-text`}>{children}</span>
      ) : (
        <a href={href} className={`${prefixCls}-text`}>
          {cloneElement(<>{children}</>)}
        </a>
      )}
    </span>
  );
});

export default BreadcrumbItem;
