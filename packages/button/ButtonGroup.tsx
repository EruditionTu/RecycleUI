import type { FC, ReactElement, PropsWithChildren } from 'react';
import React, { useMemo, cloneElement } from 'react';
import type { ButtonGroupProps } from './type';

const ButtonGroup: FC<PropsWithChildren<ButtonGroupProps>> = (
  props: PropsWithChildren<ButtonGroupProps>,
): ReactElement => {
  const { children } = props;
  const childrenFilter = useMemo(
    () =>
      (children as any[]).map(childItem => {
        if (
          childItem.props.type === 'text' ||
          childItem.props.type === 'link'
        ) {
          return cloneElement(childItem, { type: 'solid' });
        }
        if (
          childItem.props.shape === 'circle' ||
          childItem.props.shape === 'round'
        ) {
          return cloneElement(childItem, { shape: 'rect' });
        }
        return childItem;
      }),
    [children],
  );
  console.log(childrenFilter);
  return (
    <div className="button-group">{cloneElement(<>{childrenFilter}</>)}</div>
  );
};
export default ButtonGroup;
