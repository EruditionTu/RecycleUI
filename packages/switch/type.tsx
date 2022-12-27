import type { HTMLAttributes, ReactNode, MouseEvent } from 'react';

interface SwitchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'> {
  label?: ReactNode;
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  disabled?: boolean;
  checkedChildren?: string;
  unCheckedChildren?: string;
  loading?: boolean;
  defaultChecked?: boolean;
  onClick?: (checked?: boolean, event?: MouseEvent<HTMLElement>) => void;
  onChange?: (checked?: boolean) => void;
}

export default SwitchProps;
