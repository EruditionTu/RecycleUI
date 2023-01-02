import React, {
  useState,
  useMemo,
  useLayoutEffect,
  useEffect,
  useCallback,
  forwardRef,
} from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import _omit from 'lodash/omit';
import RadioProps from './type';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    disabled = false,
    value = '',
    size = 'default',
    checked,
    defaultChecked,
    className = '',
    style = {},
    children,
    onChange,
    onCheckedChange,
    ...other
  } = props;

  const [isChecked, setIsChecked] = useState<boolean>(
    // eslint-disable-next-line prettier/prettier
    checked === undefined || checked === null ? !!defaultChecked : checked,
  );

  const prefixCls = useMemo(() => 'recycle-ui-radio', []);

  const radioCls = useMemo(
    () =>
      classNames(prefixCls, className, `${prefixCls}-${size}`, {
        disabled,
      }),
    [className, disabled, prefixCls, size],
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
    <label className={radioCls} style={style}>
      <input
        type="radio"
        value={value}
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
        ref={ref}
        {..._omit(other, 'buttonStyle')}
      />
      {label && <div className={`${prefixCls}-text`}>{label}</div>}
    </label>
  );
});
export default Radio;
