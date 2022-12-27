import React, { useState, useEffect } from 'react';
import './style/index.less';
import AvatarProps from './type';

export default React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    prefixCls = 'w-avatar',
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
  const cls = [
    prefixCls,
    className,
    size ? `${prefixCls}-${size}` : null,
    shape ? `${prefixCls}-${shape}` : null,
    src ? `${prefixCls}-image` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

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
  } else if (icon && typeof icon === 'string') {
    children = <></>;
  } else if (icon && React.isValidElement(icon)) {
    children = icon;
  }
  return (
    <span {...resetProps} className={cls} ref={ref}>
      {children}
    </span>
  );
});
