/* eslint-disable jsx-a11y/heading-has-content */
import classNames from 'classnames';
import type { FC, CSSProperties } from 'react';
import React, { useMemo } from 'react';

export interface SkeletonTitleProps {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
}

const Title: FC<SkeletonTitleProps> = ({ className, width, style }) => {
  const prefixCls = useMemo(() => 'recycle-ui-skeleton', []);
  return <h3 className={classNames(`${prefixCls}-title`, className)} style={{ width, ...style }} />;
};

export default Title;
