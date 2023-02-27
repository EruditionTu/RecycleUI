import React, { isValidElement, useState, useEffect, useMemo, forwardRef } from 'react';
import classNames from 'classnames';
import AvatarProps from './type';

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    shape = 'circle',
    size = 'default',
    className,
    src,
    alt,
    icon,
    onError,
    ...resetProps
  } = props;
  let children = props.children;
  const [isImgExist, setIsImgExist] = useState(true);
  const prefixCls = useMemo(() => `recycle-ui-avatar`, []);

  const avatarCls = useMemo(
    () =>
      classNames(prefixCls, className, `${prefixCls}-${shape}`, `${prefixCls}-${size}`, {
        [`${prefixCls}-image`]: src,
      }),
    [],
  );

  useEffect(() => {
    setIsImgExist(true);
  }, [props.src]);

  if (isImgExist && src) {
    children = (
      <img
        src={src}
        alt={alt}
        onError={(evn) => {
          const errorFlag = onError ? onError(evn) : undefined;
          if (errorFlag !== false) {
            setIsImgExist(false);
          }
        }}
      />
    );
  } else if (icon && isValidElement(icon)) {
    children = icon;
  }
  return (
    <span {...resetProps} className={avatarCls} ref={ref}>
      {children}
    </span>
  );
});

export default Avatar;
