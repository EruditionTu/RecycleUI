/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useCallback, useState, useMemo, forwardRef } from 'react';
import type { ReactElement, MouseEvent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import type RateProps from './type';

const Rate = forwardRef<HTMLDivElement, RateProps>((props, ref): ReactElement => {
  const {
    color,
    count = 5,
    readonly = false,
    allowHalf = false,
    allowClear = true,
    disabled = false,
    character = '★',
    value = 0,
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

  const rateClass = useMemo(
    () =>
      classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: disabled,
      }),
    [prefixCls, disabled],
  );

  // 根据鼠标响应事件和鼠标放置的元素的下标确定当前的value
  const getValue = useCallback(
    (e: MouseEvent<HTMLElement>, idx: number) => {
      e.persist();
      let currentValue = idx;
      const isLeft =
        e.clientX - e.currentTarget.getBoundingClientRect().left <=
        e.currentTarget.getBoundingClientRect().width / 2;
      if (allowHalf) {
        e.persist();
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
    (e: MouseEvent<HTMLElement>, idx: number) => {
      if (readonly) return;
      const currentValue = getValue(e, idx);
      setRate(currentValue);
      typeof onChange === 'function' && onChange(currentValue);
    },
    [onChange, readonly],
  );

  useEffect(() => {
    if (value !== rate) {
      setRate(value);
    }
  }, [value]);

  return (
    <div {...others} style={style} className={rateClass} onMouseLeave={onMouseLeave}>
      {[...Array(count)].map((_, idx: number) => {
        // 当前元素是否需要被渲染一半
        const halfon =
          (rate <= idx + 0.5 && Math.ceil(rate) - 1 === idx && hoverCount === -1) ||
          hoverCount === idx + 0.5;
        const chosedCls = classNames(`${prefixCls}-chosed-item`, {
          [`${prefixCls}-star-on`]: idx + 1 <= rate && hoverCount === -1,
          [`${prefixCls}-hover-on`]: idx + 1 <= hoverCount,
          [`${prefixCls}-half-on`]: halfon,
        });
        const props: HTMLAttributes<HTMLSpanElement> = {};
        if (!readonly) {
          props.onClick = (e: MouseEvent<HTMLElement>) => onClick(e, idx);
          props.onMouseMove = (e: MouseEvent<HTMLElement>) => onMouseMove(e, idx);
        }
        return (
          <span key={idx} {...props}>
            <span style={{ color }} className={chosedCls}>
              {character}
            </span>
            <span className={`${prefixCls}-bg`}>{character}</span>
          </span>
        );
      })}
    </div>
  );
});

export default Rate;
