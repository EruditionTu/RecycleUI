import React, { useMemo, forwardRef } from 'react';
import classNames from 'classnames';
import type BreadcrumbProps from './type';

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref) => {
  const { className, separator = '/', ...other } = props;
  const prefixCls = useMemo(() => 'recycle-ui-breadcrumb', []);
  const breadcrumbCls = useMemo(() => classNames(prefixCls, className), []);
  return (
    <div {...{ className: breadcrumbCls, ...other }} ref={ref}>
      {React.Children.map(props.children, (element: any) => {
        return React.cloneElement(element, { separator, ...element.props });
      })}
    </div>
  );
});

export default Breadcrumb;
