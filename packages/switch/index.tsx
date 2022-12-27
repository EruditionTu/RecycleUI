import React, {
  forwardRef,
  useMemo,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames';
import type SwitchProps from './type';
import Loader from '../loader';

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    checkedChildren,
    unCheckedChildren,
    loading,
    label,
    disabled,
    checked = false,
    size = 'default',
    className = '',
    style = {},
    onChange,
    onClick,
    ...others
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const prefixCls = useMemo(() => 'recycle-ui-switch', []);
  const switchClass = useMemo(
    () => classNames(prefixCls, `${prefixCls}-${size}`, className),
    [prefixCls, size, isChecked],
  );
  useLayoutEffect(() => {
    if (disabled || loading) return;
    if (checked !== isChecked) {
      setIsChecked(checked);
    }
  }, [checked, disabled, loading]);
  useEffect(() => {
    typeof onChange === 'function' && onChange(isChecked);
  }, [isChecked, onChange]);
  const handledClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (disabled || loading) return;
      setIsChecked((o) => !o);
      typeof onClick === 'function' && onClick(isChecked, e);
    },
    [isChecked, onClick, disabled, loading],
  );
  return (
    <div className={switchClass} ref={ref} style={style} onClick={handledClick} {...others}>
      <div
        className={classNames(`${prefixCls}-container`, {
          [`${prefixCls}-checked`]: isChecked,
          [`${prefixCls}-can-use`]: !disabled && !loading,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-loading`]: loading,
        })}
      >
        <span className={`${prefixCls}-show-text`}>
          {isChecked ? checkedChildren : unCheckedChildren}
        </span>
        <span className={`${prefixCls}-handle`}>
          {loading && <Loader size="small" color={isChecked ? undefined : 'rgba(0,0,0,0.65)'} />}
        </span>
      </div>
      {label && <div className={`${prefixCls}-text`}>{label}</div>}
    </div>
  );
});

export { SwitchProps };
export default Switch;
