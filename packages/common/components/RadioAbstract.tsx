import React, { useState, useMemo, useLayoutEffect, useCallback, forwardRef } from 'react';
import type { InputHTMLAttributes, ChangeEvent } from 'react';
import classNames from 'classnames';

export interface RadioAbstractProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  prefixCls?: string;
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioAbstract = forwardRef<HTMLInputElement, RadioAbstractProps>((props, ref) => {
  const {
    type = 'radio',
    disabled = false,
    value = '',
    prefixCls = 'recycle-ui-radio-abstract',
    size = 'default',
    checked = false,
    className = '',
    style = {},
    children,
    onClick,
    ...other
  } = props;

  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const radioAbstractCls = useMemo(
    () =>
      classNames(prefixCls, className, `${prefixCls}-${size}`, {
        disabled,
      }),
    [className, disabled, prefixCls, size],
  );
  useLayoutEffect(() => {
    if (checked !== isChecked) {
      setIsChecked(checked);
    }
  }, [checked]);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();
      setIsChecked(e.target.checked);
      typeof onClick === 'function' && onClick(e as any);
    },
    [onClick],
  );

  const label = children || value;

  return (
    <label className={radioAbstractCls} style={style}>
      <input
        {...other}
        type={type}
        value={value}
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
        ref={ref}
      />
      {label && <div className={`${prefixCls}-text`}>{label}</div>}
    </label>
  );
});
export default RadioAbstract;
