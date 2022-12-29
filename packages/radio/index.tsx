import React, { useMemo } from 'react';
import RadioAbstract, { RadioAbstractProps } from '../common/components/RadioAbstract';

const Radio = React.forwardRef<HTMLInputElement, RadioAbstractProps>((props, ref) => {
  const prefixCls = useMemo(() => 'recycle-ui-radio', []);
  return <RadioAbstract ref={ref} prefixCls={prefixCls} {...props} />;
});
export default Radio;
