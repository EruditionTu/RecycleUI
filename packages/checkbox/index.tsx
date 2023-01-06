import type { FC } from 'react';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import type CheckboxProps from './type';

interface CheckboxComponents extends FC<CheckboxProps> {
  Group: typeof CheckboxGroup;
}

const CheckboxWarpper: CheckboxComponents = Checkbox as unknown as CheckboxComponents;
CheckboxWarpper.Group = CheckboxGroup;

export default CheckboxWarpper;
