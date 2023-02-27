import React, { useMemo } from 'react';
import type { CSSProperties, ReactNode, HTMLAttributes } from 'react';
import { CheckOutlined } from '@ant-design/icons';

export interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  progressDot?: boolean;
  itemWidth?: number;
  stepNumber?: string;
  adjustMarginRight?: number;
  icon?: ReactNode;
}

export default function Step(props: StepProps) {
  const {
    className,
    style,
    status,
    itemWidth,
    icon,
    adjustMarginRight,
    stepNumber,
    title,
    description,
    progressDot,
    ...restProps
  } = props;

  const prefixCls = useMemo(() => 'recycle-ui-steps', []);

  const classString = [
    `${prefixCls}-item`,
    `${prefixCls}-item-${status}`,
    className,
    icon ? `${prefixCls}-custom` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  const stepItemStyle: CSSProperties = { ...style };
  const stepItemDotStyle: CSSProperties = {};
  if (itemWidth) {
    stepItemStyle.width = itemWidth;
  }
  if (adjustMarginRight) {
    stepItemStyle.marginRight = adjustMarginRight;
    if (progressDot) {
      stepItemDotStyle.paddingRight = Math.abs(adjustMarginRight);
    }
  }
  let iconNode = null;
  if (progressDot && !icon) {
    iconNode = <span className={`${prefixCls}-dot`} />;
  } else if (icon && typeof icon !== 'string') {
    iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
  } else if ((icon && typeof icon === 'string') || status === 'finish' || status === 'error') {
    iconNode = <CheckOutlined />;
  } else {
    iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
  }
  return (
    <div {...restProps} className={classString} style={stepItemStyle}>
      <div className={`${prefixCls}-item-tail`} style={stepItemDotStyle}>
        <i style={{ paddingRight: '100%' }} />
      </div>
      <div className={`${prefixCls}-item-head`}>
        <div
          className={[`${prefixCls}-item-inner`, !!icon && 'is-icon']
            .filter(Boolean)
            .join(' ')
            .trim()}
        >
          {iconNode}
        </div>
      </div>
      <div
        className={[`${prefixCls}-item-main`, !!icon && 'is-icon-main']
          .filter(Boolean)
          .join(' ')
          .trim()}
      >
        <div className={`${prefixCls}-item-title`}>{title}</div>
        {description && <div className={`${prefixCls}-item-description`}>{description}</div>}
      </div>
    </div>
  );
}
