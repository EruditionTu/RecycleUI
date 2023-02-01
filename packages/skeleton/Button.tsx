import classNames from 'classnames';
import React, { useMemo } from 'react';
import omit from 'lodash/omit';
import type { SkeletonElementProps } from './Element';
import Element from './Element';

export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'size'> {
  size?: 'large' | 'small' | 'default';
  block?: boolean;
}

const SkeletonButton: React.FC<SkeletonButtonProps> = (props) => {
  const { className, active, block = false, size = 'default' } = props;
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
      <Element prefixCls={`${prefixCls}-button`} size={size} {...otherProps} />
    </div>
  );
};

export default SkeletonButton;
