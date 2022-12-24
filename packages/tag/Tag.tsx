import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { ReactElement, CSSProperties } from 'react';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';
import invariant from 'invariant';
import type TagProps from './type';
import withDefault from '../common/util/withDefault';

const Tag = (props: TagProps, ref: any): ReactElement => {
  const {
    icon,
    visible = true,
    disabled = false,
    closeIcon,
    closable,
    color,
    title,
    size = 'default',
    effect = 'light',
    className = '',
    style = {},
    children,
    onClose,
    ...others
  } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false); // 控制标签是否显示

  const prefixCls = useMemo(() => 'recycle-ui-tag', []);

  invariant(typeof visible === 'boolean', 'The visible of tag must be boolean type.');
  invariant(typeof disabled === 'boolean', 'The disabled of tag must be boolean type.');

  const propsFilter = useMemo(() => {
    invariant(
      size === 'small' || size === 'default' || size === 'large',
      'The size of tag only can be small default or large.',
    );
    invariant(
      effect === 'light' || effect === 'dark',
      'The effect of tag only can be light or dark.',
    );
    return {
      effect: withDefault(effect, ['light', 'dark'], 'light'),
      size: withDefault(size, ['small', 'default', 'large'], 'default'),
    };
  }, [size, effect]);

  const tagStyle = useMemo(() => {
    let style: CSSProperties = {};
    if (propsFilter.effect === 'light' && !color) return style;
    if (propsFilter.effect === 'dark') {
      style = {
        backgroundColor: typeof color === 'string' ? color : '#1890ff',
        borderColor: typeof color === 'string' ? color : '#1890ff',
      };
    } else {
      style = {
        borderColor: typeof color === 'string' ? color : '#1890ff',
        color: typeof color === 'string' ? color : '#1890ff',
      };
    }
    return style;
  }, [propsFilter.effect, color]);

  const closeIconStyle = useMemo(() => {
    return {
      color: propsFilter.effect === 'light' && typeof color === 'string' ? color : undefined,
      cursor: disabled ? 'not-allowed' : 'pointer',
    };
  }, [propsFilter.effect, color, disabled]);

  useEffect(() => {
    if (!!visible !== isVisible) setIsVisible(!!visible);
  }, [visible]);
  const handleClose = useCallback(
    (e: any) => {
      if (disabled) return;
      e.stopPropagation(); // 阻止React合成事件的冒泡

      typeof onClose === 'function' && onClose(e);

      if (e.defaultPrevented) {
        return;
      }

      setIsVisible(false);
    },
    [onClose, disabled],
  );
  const tagClass = useMemo(
    () =>
      classNames(
        prefixCls,
        `${prefixCls}-${propsFilter.size}`,
        `${prefixCls}-${propsFilter.effect}`,
        className,
        {
          [`${prefixCls}-hidden`]: !isVisible,
          [`${prefixCls}-disabled`]: disabled,
        },
      ),
    [prefixCls, propsFilter, isVisible],
  );
  return (
    <div ref={ref} className={tagClass} style={{ ...tagStyle, ...style }} {...others}>
      {icon ? <span className={`${prefixCls}-icon`}>{icon}</span> : null}
      {(children || title) && <span className={`${prefixCls}-title`}>{children || title}</span>}
      {closable ? (
        <span onClick={handleClose} className={`${prefixCls}-close-icon`} style={closeIconStyle}>
          {closeIcon || <CloseOutlined />}
        </span>
      ) : null}
    </div>
  );
};

export default Tag;
