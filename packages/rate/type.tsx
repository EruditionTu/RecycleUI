import type { HTMLAttributes, ReactNode } from 'react';

interface RateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  allowClear?: boolean;
  allowHalf?: boolean;
  count?: number;
  defaultValue?: number;
  tooltips?: string[] | string;
  value?: number;
  readonly?: boolean;
  character?: ReactNode | ((index: number) => ReactNode);
  onChange?: (value: number) => void;
  onHoverChange?: (value: number) => void;
}
export default RateProps;
