import React, {
  forwardRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';
import type { CheckboxGroupProps } from './type';
import type CheckboxProps from './type';
import equal from '../common/util/equal';

const defaultCheckboxProps: CheckboxProps = {
  checked: false,
};

const initCheckboxGroup = (
  value?: Array<any>,
  defaultValue?: Array<any>,
  group?: any,
  children?: any,
) => {
  const valueSet: Set<any> = new Set<any>(typeof value === 'undefined' ? defaultValue : value);
  const checkboxGroup =
    group instanceof Array
      ? group
      : children instanceof Array
      ? children.map((child: any) => {
          return { ...defaultCheckboxProps, ...child.props };
        })
      : [];
  return checkboxGroup.map((item) => {
    if (valueSet.has(item.value) || valueSet.has(Number(item.value))) {
      return { ...item, checked: true };
    }
    return item;
  });
};

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const {
    children,
    group,
    name,
    value,
    defaultValue,
    disabled,
    className = '',
    style = {},
    onValueChange,
  } = props;

  const [checkboxGroup, setCheckboxGroup] = useState<CheckboxProps[]>(
    initCheckboxGroup(value, defaultValue, group, children),
  );

  const prefixCls = useMemo(() => 'recycle-ui-checkbox-group', []);
  const checkboxGroupCls = useMemo(() => classNames(prefixCls, className), [prefixCls, className]);

  const handleChange = useCallback(
    (targetValue: any, state: boolean) => {
      if (disabled) return;
      let valueChange = false;
      setCheckboxGroup((oldState: Array<CheckboxProps>) => {
        const newState: Array<CheckboxProps> = [...oldState];
        oldState.forEach((item: CheckboxProps, idx: number) => {
          if (equal(item.value, targetValue)) {
            valueChange = true;
            newState[idx].checked = state;
          }
        });
        return newState;
      });
      if (valueChange) {
        typeof onValueChange === 'function' &&
          onValueChange(checkboxGroup.map((item) => item.checked));
      }
    },
    [onValueChange, checkboxGroup],
  );

  useEffect(() => {
    if (disabled) return;
    let valueChange = false;
    setCheckboxGroup((oldState: Array<CheckboxProps>) => {
      const newState: Array<CheckboxProps> = [...oldState];
      const valueSet: Set<any> = new Set<any>(value);
      oldState.forEach((item: CheckboxProps, idx: number) => {
        if (valueSet.has(item.value) || valueSet.has(Number(item.value))) {
          if (!newState[idx].checked || valueChange) {
            valueChange = true;
          }
          newState[idx].checked = true;
        }
      });
      return newState;
    });
    if (valueChange) {
      typeof onValueChange === 'function' &&
        onValueChange(checkboxGroup.map((item) => item.checked));
    }
  }, [value]);

  useEffect(() => {
    setCheckboxGroup(
      group instanceof Array
        ? group
        : children instanceof Array
        ? children.map((child: any) => {
            return { ...defaultCheckboxProps, ...child.props };
          })
        : [],
    );
  }, [group]);

  return (
    <div ref={ref} style={style} className={checkboxGroupCls}>
      {!children
        ? checkboxGroup.map((option, idx) => {
            return (
              <Checkbox
                {...option}
                disabled={disabled}
                name={name}
                key={idx}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(option.value, e.target.checked)
                }
              />
            );
          })
        : Children.map(children, (checkboxItem, idx: number) => {
            if (!isValidElement(checkboxItem)) return null;
            return cloneElement(checkboxItem, {
              ...checkboxGroup[idx],
              name,
              disabled,
              key: idx,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                handleChange(checkboxItem.props?.value, e.target.checked),
            } as any);
          })}
    </div>
  );
});

export default CheckboxGroup;
