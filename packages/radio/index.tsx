import type { FC } from 'react';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';
import type RadioProps from './type';

interface RadioComponents extends FC<RadioProps> {
  Group: typeof RadioGroup;
  Button: typeof RadioButton;
}
const RadioWarpper: RadioComponents = Radio as unknown as RadioComponents;
RadioWarpper.Group = RadioGroup;
RadioWarpper.Button = RadioButton;

export * from './type';
export { RadioProps };

export default RadioWarpper;
