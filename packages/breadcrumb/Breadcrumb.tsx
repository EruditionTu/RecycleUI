import React, { useMemo, forwardRef, cloneElement, Children } from 'react';
import classNames from 'classnames';
import type BreadcrumbProps from './type';

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref) => {
  const { className, separator = '/', children, ...other } = props;
  const prefixCls = useMemo(() => 'recycle-ui-breadcrumb', []);
  const breadcrumbCls = useMemo(() => classNames(prefixCls, className), [prefixCls, className]);
  return (
    <div {...{ className: breadcrumbCls, ...other }} ref={ref}>
      {Children.map(children, (element: any, idx: number) => {
        return cloneElement(element, { separator, ...element.props, haveSeparator: idx !== 0 });
      })}
    </div>
  );
});

export default Breadcrumb;
