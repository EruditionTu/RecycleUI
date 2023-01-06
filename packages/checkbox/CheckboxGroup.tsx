import React, {
  forwardRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
  useEffect,
  useCallback,
} from 'react';
import type { ChangeEvent } from 'react';
// import Checkbox from './Checkbox';
import type { CheckboxGroupProps } from './type';
import type CheckboxProps from './type';
import equal from '../common/util/equal';

const defaultCheckboxProps: CheckboxProps = {
  checked: false,
};

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const { children, group } = props;
  const [checkboxGroup, setCheckboxGroup] = useState<CheckboxProps[]>(
    group instanceof Array
      ? group
      : children instanceof Array
      ? children.map((child: any) => {
          return { ...defaultCheckboxProps, ...child.props };
        })
      : [],
  );
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
  const handleChange = useCallback((targetValue: any, state: boolean) => {
    setCheckboxGroup((oldState: Array<CheckboxProps>) => {
      const newState: Array<CheckboxProps> = [...oldState];
      oldState.forEach((item: CheckboxProps, idx: number) => {
        if (equal(item.value, targetValue)) {
          newState[idx].checked = state;
        }
      });
      return newState;
    });
  }, []);
  //   if (checkGroup.length !== 0) {
  //     return checkGroup.map((option) => {
  //       return <Checkbox />;
  //     });
  //   }
  return (
    <div ref={ref}>
      {Children.map(children, (checkboxItem, idx: number) => {
        if (!isValidElement(checkboxItem)) return null;
        return cloneElement(checkboxItem, {
          ...checkboxGroup[idx],
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            handleChange(checkboxItem.props.value, e.target.checked),
        } as any);
      })}
    </div>
  );
});

export default CheckboxGroup;
