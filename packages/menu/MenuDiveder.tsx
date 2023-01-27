import React, { forwardRef, useContext, useMemo } from 'react';
import Divider from '../divider';
import MenuContext from './MenuContext';

const MenuDivider = forwardRef<HTMLDivElement, { dashed?: boolean; level?: number }>(
  (props, ref) => {
    const { dashed = false, level } = props;
    const { mode } = useContext(MenuContext);
    const vertical = useMemo(() => mode === 'horizontal' && level === 1, [mode, level]);
    return (
      <Divider
        ref={ref}
        type={vertical ? 'vertical' : 'horizontal'}
        style={
          dashed
            ? vertical
              ? { height: 0, borderRight: 'dashed 1px #e8e8e8' }
              : { height: 0, borderBottom: 'dashed 1px #e8e8e8' }
            : {}
        }
      />
    );
  },
);

export default MenuDivider;
