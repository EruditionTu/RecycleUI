import React, { forwardRef, useMemo } from 'react';
import type SwitchProps from './type';
import RadioAbstract from '../common/components/RadioAbstract';

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { checkedChildren, unCheckedChildren, ...others } = props;
  const prefixCls = useMemo(() => 'recycle-ui-switch', []);
  return (
    <RadioAbstract
      prefixCls={prefixCls}
      {...({ 'data-checked': checkedChildren, 'data-unchecked': unCheckedChildren } as any)}
      {...others}
      type="checkbox"
      ref={ref}
    />
  );
});

export { SwitchProps };
export default Switch;
