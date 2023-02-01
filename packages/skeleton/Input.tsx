import React, { useMemo } from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import type { SkeletonElementProps } from './Element';
import Element from './Element';

export interface SkeletonInputProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
  size?: 'large' | 'small' | 'default';
  block?: boolean;
}

const SkeletonInput: React.FC<SkeletonInputProps> = (props) => {
  const { className, active, block, size = 'default' } = props;

  const prefixCls = useMemo(() => 'recycle-ui-skeleton', []);
  const otherProps = omit(props, ['prefixCls']);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block,
    },
    className,
  );

  return (
    <div className={cls}>
      <Element prefixCls={`${prefixCls}-input`} size={size} {...otherProps} />
    </div>
  );
};

export default SkeletonInput;
