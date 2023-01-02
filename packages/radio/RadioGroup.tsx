import React, {
  useMemo,
  useState,
  useLayoutEffect,
  useEffect,
  forwardRef,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import type { ReactElement, ChangeEvent } from 'react';
import classNames from 'classnames';
import type RadioProps from './type';
import type { RadioGroupProps, RadioButtonProps } from './type';
import Radio from './Radio';
import RadioButton from './RadioButton';
import equal from '../common/util/equal';

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    buttonStyle = 'solid',
    size = 'default',
    name,
    options,
    optionType = 'default',
    disabled = false,
    defaultValue,
    value,
    onValueChange,
    onChange,
    children,
    className = '',
    style = {},
    ...others
  } = props;

  const [current, setCurrent] = useState(
    // eslint-disable-next-line prettier/prettier
    value === undefined || value === null ? defaultValue : value,
  );

  const handleChange = useMemo(
    () => (e: ChangeEvent<HTMLInputElement>) => {
      setCurrent(e.target.value);
      typeof onChange === 'function' && onChange(e);
    },
    [onChange],
  );
  const prefixCls = useMemo(() => 'recycle-ui-radio-group', []);
  const radioGroupClass = useMemo(() => classNames(prefixCls, className, {}), []);
  useLayoutEffect(() => {
    if (value !== undefined && value !== current && !disabled) {
      setCurrent(value);
    }
  }, [value]);
  console.log('123', buttonStyle);
  useEffect(() => {
    typeof onValueChange === 'function' && onValueChange(current);
  }, [current]);
  if (children) {
    return (
      <div className={radioGroupClass} style={style} ref={ref} {...others}>
        {Children.toArray(children).map((child, idx) => {
          const props: RadioProps | RadioButtonProps = {
            checked: equal(current, (child as ReactElement).props.value),
            onCheckedChange: (checked) => {
              if (checked) {
                setCurrent((child as ReactElement).props.value);
              }
            },
            onChange: handleChange,
            buttonStyle,
            disabled,
            size,
            name,
            ...(child as ReactElement).props,
          };
          if (!child) return null;
          if (!isValidElement(child)) return child;
          return cloneElement(child, { ...props, key: idx });
        })}
      </div>
    );
  }
  return (
    <div className={radioGroupClass} style={style} ref={ref} {...others}>
      {options?.map((option, idx) => {
        if (typeof option === 'string')
          return optionType === 'default' ? (
            <Radio
              disabled={disabled}
              size={size}
              name={name}
              value={option}
              key={idx}
              checked={equal(option, current)}
              onChange={handleChange}
              onCheckedChange={(checked) => {
                if (checked) {
                  setCurrent(option);
                }
              }}
            >
              {option}
            </Radio>
          ) : (
            <RadioButton
              disabled={disabled}
              size={size}
              name={name}
              value={option}
              key={idx}
              checked={equal(current, option)}
              onChange={handleChange}
              onCheckedChange={(checked) => {
                if (checked) {
                  setCurrent(option);
                }
              }}
              buttonStyle={buttonStyle}
            >
              {option}
            </RadioButton>
          );
        return optionType === 'default' ? (
          <Radio
            key={idx}
            disabled={option.disabled}
            value={option.value}
            size={size}
            name={name}
            checked={equal(current, option.value)}
            onChange={handleChange}
            onCheckedChange={(checked) => {
              if (checked) {
                setCurrent(option.value);
              }
            }}
          >
            {option.label}
          </Radio>
        ) : (
          <RadioButton
            key={idx}
            disabled={option.disabled}
            value={option.value}
            size={size}
            name={name}
            checked={equal(current, option.value)}
            onChange={handleChange}
            onCheckedChange={(checked) => {
              if (checked) {
                setCurrent(option.value);
              }
            }}
            buttonStyle={buttonStyle}
          >
            {option.label}
          </RadioButton>
        );
      })}
    </div>
  );
});

export default RadioGroup;
