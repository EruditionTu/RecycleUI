import React, {
  useMemo,
  forwardRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import _omit from 'lodash/omit';
import { RadioButtonProps } from './type';

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
  const {
    disabled,
    value,
    size = 'default',
    checked,
    defaultChecked,
    className = '',
    style = {},
    children,
    buttonStyle = 'solid',
    onCheckedChange,
    onChange,
    ...other
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(
    // eslint-disable-next-line prettier/prettier
    checked === undefined || checked === null ? !!defaultChecked : checked,
  );
  const prefixCls = useMemo(() => 'recycle-ui-radio-button', []);
  const radioBtnCls = useMemo(
    () =>
      classNames(prefixCls, className, `${prefixCls}-${size}`, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${buttonStyle}-unchecked`]: !isChecked,
        [`${prefixCls}-${buttonStyle}-checked`]: isChecked,
        [`${prefixCls}-disabled-checked`]: isChecked && disabled,
        [`${prefixCls}-disabled-unchecked`]: !isChecked && disabled,
      }),
    [isChecked, prefixCls, className, buttonStyle, size, disabled],
  );
  useLayoutEffect(() => {
    if (disabled) return;
    if (checked !== undefined && checked !== isChecked) {
      setIsChecked(checked);
    }
  }, [checked]);
  useEffect(() => {
    typeof onCheckedChange === 'function' && onCheckedChange(isChecked);
  }, [isChecked]);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      // 执行原生的onChange事件
      typeof onChange === 'function' && onChange(e);
      // 如果checked不为undefined，那么单选是否选中只能由checked来判断
      if (checked !== undefined) return;
      setIsChecked(e.target.checked);
    },
    [checked, onChange, disabled],
  );
  const label = children || value;
  return (
    <label className={radioBtnCls} style={style}>
      {label && <span>{children}</span>}
      <input
        type="radio"
        value={value}
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
        ref={ref}
        {..._omit(other, 'buttonStyle')}
        style={{ height: 0, width: 0, opacity: 0, pointerEvents: 'none' }}
      />
    </label>
  );
});
export default RadioButton;
