import DotChartOutlined from '@ant-design/icons/DotChartOutlined';
import classNames from 'classnames';
import React from 'react';
import { SkeletonElementProps } from './Element';

export interface SkeletonNodeProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
  fullSize?: boolean;
  children?: React.ReactNode;
}

const SkeletonNode: React.FC<SkeletonNodeProps> = (props) => {
  const { prefixCls, className, style, active, children } = props;

  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active,
    },
    className,
  );

  const content = children ?? <DotChartOutlined />;

  return (
    <div className={cls}>
      <div className={classNames(`${prefixCls}-image`, className)} style={style}>
        {content}
      </div>
    </div>
  );
};

export default SkeletonNode;
