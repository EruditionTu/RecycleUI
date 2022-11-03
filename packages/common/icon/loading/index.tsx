import type { FC } from 'react';
import React, { memo, useMemo } from 'react';
import './style.less';
import classNames from 'classnames';
import type LoadingIconProps from './type';

const LoadingIcon: FC<LoadingIconProps> = (props: LoadingIconProps) => {
  const { width, height, loading } = props;
  const style = useMemo(
    () => ({
      width,
      height,
    }),
    [props],
  );
  const classes = useMemo(
    () =>
      classNames('loading-icon', {
        loading: loading,
      }),
    [props],
  );
  return <div className={classes} style={style} />;
};
export default memo(LoadingIcon);
