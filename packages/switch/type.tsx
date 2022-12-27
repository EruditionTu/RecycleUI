import type { HTMLAttributes, ReactNode, MouseEvent } from 'react';

interface SwitchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'> {
  label?: ReactNode;
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  loading?: boolean;
  onClick?: (checked?: boolean, event?: MouseEvent<HTMLElement>) => void;
  onChange?: (checked?: boolean) => void;
}

export default SwitchProps;
