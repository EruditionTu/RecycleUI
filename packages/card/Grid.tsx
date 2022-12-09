import React from 'react';
import type { FC } from 'react';
import type { CardGridProps } from './type';
import type { WithCustomStyle } from '../common/util/toolType/index';

const Grid: FC<WithCustomStyle<CardGridProps>> = ({
  style = {},
  className = {},
  hoverable = true,
  ...others
}) => {
  return <></>;
};
export default Grid;
