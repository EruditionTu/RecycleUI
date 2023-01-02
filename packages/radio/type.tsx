import type { HTMLAttributes, ReactNode, ChangeEvent, InputHTMLAttributes } from 'react';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  onCheckedChange?: (nextChecked: boolean) => void;
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export type RadioButtonProps = RadioProps & {
  buttonStyle?: 'outline' | 'solid';
};

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  buttonStyle?: 'outline' | 'solid';
  value?: any;
  defaultValue?: any;
  disabled?: boolean;
  name?: string;
  options?: Array<string | { label?: ReactNode; value?: string; disabled?: boolean }>;
  optionType?: 'default' | 'button';
  size?: 'large' | 'default' | 'small';
  onValueChange?: (value: any) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default RadioProps;
