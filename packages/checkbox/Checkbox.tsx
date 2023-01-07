import React, { useState, useCallback, useMemo, useEffect, forwardRef } from 'react';
import type { ChangeEvent } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import CheckboxProps from './type';

const CheckBox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    name,
    children,
    className = '',
    style = {},
    value,
    checked,
    defaultChecked,
    disabled,
    onCheckedChange,
    onChange,
    ...other
  } = props;

  const [checkStatus, setCheckStatus] = useState<boolean>(
    typeof checked === 'undefined' ? !!defaultChecked : checked,
  );

  const prefixCls = useMemo(() => 'recycle-ui-checkbox', []);
  const checkboxCls = useMemo(
    () =>
      classNames(prefixCls, className, {
        [`${prefixCls}-disabled-checkbox`]: disabled,
      }),
    [disabled, prefixCls, className],
  );

  const checkBoxDom = {
    disabled: checkStatus ? (
      <div className={`${prefixCls}-actived ${prefixCls}-disabled`}>
        <CheckOutlined style={{ fontSize: '12px' }} />
      </div>
    ) : (
      <div className={`${prefixCls}-disabled`} />
    ),
    actived: (
      <div className={`${prefixCls}-actived`}>
        <CheckOutlined style={{ fontSize: '12px' }} />
      </div>
    ),
    noActived: <div className={`${prefixCls}-noActived`} />,
  };

  useEffect(() => {
    if (typeof checked === 'undefined') return;
    setCheckStatus(checked);
  }, [checked]);

  useEffect(
    () => () => {
      typeof onCheckedChange === 'function' && onCheckedChange(checkStatus);
    },
    [checkStatus],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      // 多选单组件切换状态
      if (disabled) return;
      typeof onChange === 'function' && onChange(e);
      if (typeof checked !== 'undefined') return;
      setCheckStatus(e.target.checked);
    },
    [disabled, checkStatus, checked, onChange],
  );

  const renderCheckBoxDom = useMemo(() => {
    // 渲染单check状态
    if (disabled) {
      return checkBoxDom.disabled;
    }
    if (checkStatus) {
      return checkBoxDom.actived;
    }
    return checkBoxDom.noActived;
  }, [checkStatus, checked, disabled]);

  return (
    <label className={checkboxCls} style={style} ref={ref as any}>
      <div className={`${prefixCls}-content`}>
        {renderCheckBoxDom}
        {children && (
          <div
            className={classNames(`${prefixCls}-text`, {
              disabled,
            })}
          >
            {children}
          </div>
        )}
      </div>
      <input
        type="checkbox"
        disabled={disabled}
        value={value}
        checked={checkStatus}
        onChange={handleChange}
        name={name}
        style={{ height: 0, width: 0, opacity: 0, pointerEvents: 'none', position: 'absolute' }}
        {...other}
      />
    </label>
  );
});

export default CheckBox;
