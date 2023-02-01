import React, { CSSProperties, FC, useMemo } from 'react';
import classNames from 'classnames';

export interface SkeletonElementProps {
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  size?: 'large' | 'small' | 'default' | number;
  shape?: 'circle' | 'square' | 'round' | 'default';
  active?: boolean;
}

const Element: FC<SkeletonElementProps> = (props) => {
  const { prefixCls, className = '', style = {}, size, shape = 'default' } = props;
  const sizeCls = useMemo(
    () =>
      classNames({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
      }),
    [prefixCls, size],
  );

  const shapeCls = useMemo(
    () =>
      classNames({
        [`${prefixCls}-circle`]: shape === 'circle',
        [`${prefixCls}-square`]: shape === 'square',
        [`${prefixCls}-round`]: shape === 'round',
      }),
    [],
  );

  const sizeStyle = useMemo(
    () =>
      typeof size === 'number'
        ? {
            width: size,
            height: size,
            lineHeight: `${size}px`,
          }
        : {},
    [size],
  );

  return (
    <span
      className={classNames(prefixCls, sizeCls, shapeCls, className)}
      style={{ ...sizeStyle, ...style }}
    />
  );
};

export default Element;
