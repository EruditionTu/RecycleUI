import type { RadioAbstractProps } from '../common/components/RadioAbstract';

interface SwitchProps extends Omit<RadioAbstractProps, 'onClick' | 'onChange'> {
  checkedChildren?: string;
  unCheckedChildren?: string;
  loading?: boolean;
  defaultChecked?: boolean;
  onClick?: (checked?: boolean, event?: Event) => void;
  onChange?: (checked?: boolean, event?: Event) => void;
}

export default SwitchProps;
