import React, { useMemo } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import type { SkeletonElementProps } from './Element';
import Element from './Element';

export interface AvatarProps extends Omit<SkeletonElementProps, 'shape'> {
  shape?: 'circle' | 'square';
}

const SkeletonAvatar: FC<AvatarProps> = (props) => {
  const { className, active, shape = 'circle', size = 'default' } = props;
  const prefixCls = useMemo(() => 'recycle-ui-skeleton', []);
  const otherProps = omit(props, ['className']);
  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active,
    },
    className,
  );
  return (
    <div className={cls}>
      <Element prefixCls={`${prefixCls}-avatar`} shape={shape} size={size} {...otherProps} />
    </div>
  );
};

export default SkeletonAvatar;
