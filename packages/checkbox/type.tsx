import { HTMLAttributes, ChangeEvent } from 'react';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (e: boolean) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: Array<any>;
  defaultValue?: Array<any>;
  disabled?: boolean;
  name?: string;
  group?: Array<CheckboxProps>;
  onValueChange?: (value: Array<any>) => void;
}

export default CheckboxProps;
