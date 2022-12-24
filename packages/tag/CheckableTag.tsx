import React, { useEffect, useState, useCallback, useMemo, forwardRef } from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import invariant from 'invariant';
import { CheckableTagProps } from './type';
import withDefault from '@/packages/common/util/withDefault';

const CheckableTag = forwardRef<HTMLDivElement, CheckableTagProps>((props, ref): ReactElement => {
  const {
    size = 'default',
    checked = false,
    children,
    className,
    style,
    onChange,
    ...others
  } = props;

  const [isChecked, setIsChecked] = useState(false);

  const prefixCls = useMemo(() => 'recycle-ui-checkable-tag', []);
  const sizeFilter = useMemo(() => {
    invariant(
      size === 'small' || size === 'default' || size === 'large',
      'The size of tag only can be small default or large.',
    );
    return withDefault(size, ['small', 'default', 'large'], 'small');
  }, [size]);

  const checkableTagClass = useMemo(() => {
    return classNames(prefixCls, className, `recycle-ui-tag-${sizeFilter}`, {
      [`${prefixCls}-checked`]: isChecked,
      [`${prefixCls}-not-checked`]: !isChecked,
    });
  }, [prefixCls, sizeFilter, isChecked]);
  useEffect(() => {
    if (isChecked !== checked) {
      setIsChecked(checked);
    }
  }, [checked]);
  const handleClick = useCallback((e) => {
    typeof onChange === 'function' && onChange(checked);

    if (e.defaultPrevented) {
      return;
    }

    setIsChecked((checked) => !checked);
  }, []);
  return (
    <span onClick={handleClick} className={checkableTagClass} style={style} {...others}>
      {children}
    </span>
  );
});
export default CheckableTag;
