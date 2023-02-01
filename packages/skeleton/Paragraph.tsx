import classNames from 'classnames';
import React, { useMemo } from 'react';
import type { FC } from 'react';

type widthUnit = number | string;

export interface SkeletonParagraphProps {
  className?: string;
  style?: React.CSSProperties;
  width?: widthUnit | Array<widthUnit>;
  rows?: number;
}

const Paragraph: FC<SkeletonParagraphProps> = (props) => {
  const getWidth = (index: number) => {
    const { width, rows = 2 } = props;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  const { className, style, rows } = props;
  const prefixCls = useMemo(() => 'recycle-ui-skeleton', []);
  const rowList = [...Array(rows)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index} style={{ width: getWidth(index) }} />
  ));
  return (
    <ul className={classNames(`${prefixCls}-paragraph`, className)} style={style}>
      {rowList}
    </ul>
  );
};

export default Paragraph;
