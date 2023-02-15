import React, { useMemo } from 'react';
import Option from './Option';
import Group from './Group';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'large' | 'default' | 'small';
}

const InternalSelect = (props: SelectProps, ref?: React.ForwardedRef<HTMLSelectElement>) => {
  const { className, size = 'default', ...other } = props;
  const prefixCls = useMemo(() => 'recycle-ui-select', []);
  return (
    <select
      {...other}
      ref={ref}
      className={[prefixCls, className, size ? `${prefixCls}-${size}` : null]
        .filter(Boolean)
        .join(' ')
        .trim()}
    />
  );
};

const Select: SelectComponent = React.forwardRef<HTMLSelectElement>(
  InternalSelect,
) as unknown as SelectComponent;
type SelectComponent = React.FC<React.PropsWithRef<SelectProps>> & {
  Option: typeof Option;
  Group: typeof Group;
};

Select.Option = Option;
Select.Group = Group;

export default Select;
