import { HTMLAttributes, ChangeEvent } from 'react';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (e: boolean) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  group?: Array<CheckboxProps>;
}

export default CheckboxProps;
