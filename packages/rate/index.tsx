import React, { useEffect, useCallback, useState, useMemo, forwardRef } from 'react';
import type { ReactElement, MouseEvent, HTMLAttributes } from 'react';
import { StarFilled } from '@ant-design/icons';
import classNames from 'classnames';
import type RateProps from './type';
import Tooltip from '../tooltip';

const Rate = forwardRef<HTMLDivElement, RateProps>((props, ref): ReactElement => {
  const {
    color,
    count = 5,
    readonly = false,
    allowHalf = false,
    allowClear = false,
    character = <StarFilled />,
    tooltips,
    value,
    defaultValue,
    className = '',
    style = {},
    onChange,
    onHoverChange,
    ...others
  } = props;
  const [rate, setRate] = useState<number>(typeof defaultValue === 'number' ? defaultValue : 0);
  const [hoverCount, setHoverCount] = useState<number>(-1);

  const prefixCls = useMemo(() => 'recycle-ui-rate', []);

  const rateClass = useMemo(() => classNames(prefixCls, className), [prefixCls]);

  const tooltipLists = useMemo((): string[] => {
    if (Array.isArray(tooltips)) return tooltips;
    return new Array(count).fill(tooltips);
  }, [tooltips, count]);

  const updateRate = useCallback(
    (nextRate: number) => {
      if (!allowClear && nextRate < 1) {
        setRate(1);
      }
      setRate(nextRate);
    },
    [allowClear],
  );

  // 根据鼠标响应事件和鼠标放置的元素的下标确定当前的value
  const getValue = useCallback(
    (e: MouseEvent<HTMLElement>, idx: number) => {
      let currentValue = idx;
      const isLeft =
        e.clientX - e.currentTarget.getBoundingClientRect().left <=
        e.currentTarget.getBoundingClientRect().width / 2;
      if (allowHalf) {
        currentValue = isLeft ? idx + 0.5 : idx + 1;
      } else {
        currentValue = idx + 1;
      }
      return currentValue;
    },
    [allowHalf],
  );

  // 当鼠标离开item时，设置hover的数量为-1，那么rate就不按照hover的数量渲染了
  const onMouseLeave = useCallback(() => {
    setHoverCount(-1);
  }, []);

  // 鼠标移动更新评分视图
  const onMouseMove = useCallback((e: MouseEvent<HTMLElement>, idx: number) => {
    const currentValue = getValue(e, idx);
    if (hoverCount !== currentValue) {
      setHoverCount(currentValue);
      typeof onHoverChange === 'function' && onHoverChange(currentValue);
    }
  }, []);

  // 鼠标点击更新评分
  const onClick = useCallback(
    (e: MouseEvent<HTMLElement>, idx: number, isLast: boolean = false) => {
      if (readonly || (isLast && allowClear)) return;
      const currentValue = getValue(e, idx);
      updateRate(currentValue);
      typeof onChange === 'function' && onChange(currentValue);
    },
    [onChange, updateRate, readonly, allowClear],
  );

  const clickClear = useCallback(() => {
    if (!allowClear) return;
    setHoverCount(-1);
    updateRate(0);
  }, [allowClear, updateRate]);

  useEffect(() => {
    if (typeof value === 'undefined') return;
    if (value !== rate) {
      updateRate(value);
    }
  }, [value]);

  return (
    <div {...others} style={style} className={rateClass} onMouseLeave={onMouseLeave}>
      {[...Array(count)].map((_, idx: number) => {
        // 当前元素是否需要被渲染一半
        const halfon =
          (rate <= idx + 0.5 && Math.ceil(rate) - 1 === idx && hoverCount === -1) ||
          hoverCount === idx + 0.5;
        // 当前元素是否是最后一个，渲染一半或者恰好整个
        const isLast = halfon || idx === rate - 1;
        const chosedCls = classNames(`${prefixCls}-chosed-item`, {
          [`${prefixCls}-star-on`]: idx + 1 <= rate && hoverCount === -1,
          [`${prefixCls}-hover-on`]: idx + 1 <= hoverCount,
          [`${prefixCls}-half-on`]: halfon,
        });
        const props: HTMLAttributes<HTMLSpanElement> = {};
        const lastItemProps: HTMLAttributes<HTMLSpanElement> = {};
        if (!readonly) {
          props.onClick = (e: MouseEvent<HTMLElement>) => onClick(e, idx, isLast);
          props.onMouseMove = (e: MouseEvent<HTMLElement>) => onMouseMove(e, idx);
          if (isLast) lastItemProps.onClick = clickClear;
        }
        return idx < tooltipLists.length && typeof tooltipLists[idx] === 'string' ? (
          <Tooltip content={tooltipLists[idx]} key={idx} usePortal>
            <span key={idx} {...props}>
              <span style={{ color }} className={chosedCls} {...lastItemProps}>
                {typeof character === 'function' ? character(idx) : character}
              </span>
              <span className={`${prefixCls}-bg`}>
                {typeof character === 'function' ? character(idx) : character}
              </span>
            </span>
          </Tooltip>
        ) : (
          <span key={idx} {...props}>
            <span style={{ color }} className={chosedCls} {...lastItemProps}>
              {typeof character === 'function' ? character(idx) : character}
            </span>
            <span className={`${prefixCls}-bg`}>
              {typeof character === 'function' ? character(idx) : character}
            </span>
          </span>
        );
      })}
    </div>
  );
});

export default Rate;
