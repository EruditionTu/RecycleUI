import type { RadioAbstractProps } from '../common/components/RadioAbstract';

type RadioProps = RadioAbstractProps;
export type RadioButtonProps = RadioAbstractProps;

export interface RadioGroupProps {
  buttonStyle?: 'outline' | 'solid';
  defaultValue?: any;
  disabled?: boolean;
  name?: any;
  options?: any;
  optionType?: 'default' | 'button';
  size?: 'large' | 'middle' | 'small';
  value?: any;
  onChange?: () => {};
}
export default RadioProps;
