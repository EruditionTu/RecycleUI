import React, { forwardRef, isValidElement, createElement, useMemo } from 'react';
import classNames from 'classnames';
import { RefElement, BreadcrumbItemProps } from './type';

const BreadcrumbItem = forwardRef<RefElement, BreadcrumbItemProps>((props, ref) => {
  const { className = '', tagName: TagName = 'span', active, separator, ...other } = props;
  const isElm = isValidElement(separator);
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
  if (!isElm) {
    otherProps['data-separator'] = separator;
  }
  return createElement(
    TagName,
    {
      ...otherProps,
      ref,
    },
    <>
      {isElm && <span className={`${prefixCls}-separator`}>{separator}</span>}
      {props.children}
    </>,
  );
});

export default BreadcrumbItem;
