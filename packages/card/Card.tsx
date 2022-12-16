/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, Children, useMemo } from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';
import CardProps from './type';
import Grid from './Grid';
import type { WithCustomStyle, WithForwardRef } from '../common/util/toolType';
import omit from '../common/util/omit';
import withDefault from '../common/util/withDefault';

type CardWarpperProps = WithForwardRef<WithCustomStyle<CardProps>>;

function getAction(actions: ReactNode[]) {
  const actionList = actions.map((action, index) => (
    <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
      <span>{action}</span>
    </li>
  ));
}

const Card = forwardRef<HTMLElement, CardWarpperProps>((props, ref) => {
  const {
    title,
    extra,
    cover,
    loading,
    children,
    actions,
    accessKey,
    defaultActiveTabKey,
    tabList,
    tabProps,
    className = '',
    size = 'default',
    hoverable = false,
    border = true,
    headStyle = {},
    bodyStyle = {},
    ...others
  } = props;

  const prefixCls = useMemo(() => 'recycle-ui-card', []);
  // 过滤props
  const propsFilter = useMemo(() => {
    return {
      hoverable: typeof hoverable === 'boolean' ? hoverable : false,
      border: typeof border === 'boolean' ? border : false,
      size: withDefault(size, ['default', 'small'], 'default'),
      className: typeof className === 'string' ? className : '',
    };
  }, [hoverable, border, size, className]);

  // 加载显示的骨架屏
  const loadingBlock = useMemo(() => <></>, []);
  // 卡片顶部的渲染dom
  const head = useMemo(() => {
    if (!title && !extra) return null;
    return (
      <div className={`${prefixCls}-head`} style={headStyle}>
        <div className={`${prefixCls}-head-wrapper`}>
          {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
          {extra && <div className={`${prefixCls}-head-extra`}>{extra}</div>}
        </div>
        {/* {tabs} */}
      </div>
    );
  }, [prefixCls, headStyle, title, extra]);
  // 卡片遮盖层的渲染dom
  const coverDom = useMemo(() => {
    if (!cover) return null;
    return <div className={`${prefixCls}-cover`}>{cover}</div>;
  }, [cover, prefixCls]);
  // 卡片主体
  const body = useMemo(
    () => (
      <div className={`${prefixCls}-body`} style={bodyStyle}>
        {loading ? loadingBlock : children}
      </div>
    ),
    [loading, children, loadingBlock],
  );
  // 卡片下方action模块的渲染dom
  const actionDom = useMemo(
    () => actions?.length && <ul className={`${prefixCls}-actions`}>{getAction(actions)}</ul>,
    [actions, prefixCls],
  );
  // 是否包含Grid组件
  const isContainGrid = useMemo(() => {
    let containGrid;
    Children.forEach(children as JSX.Element, (element: JSX.Element) => {
      if (element?.type === Grid) {
        containGrid = true;
      }
    });
    return containGrid;
  }, [children]);
  const warpperClass = useMemo((): string => {
    return classNames(prefixCls, propsFilter.className, {
      [`${prefixCls}-hoverable`]: propsFilter.hoverable,
      [`${prefixCls}-bordered`]: propsFilter.border,
      [`${prefixCls}-small`]: propsFilter.size === 'small',
    });
  }, [prefixCls, propsFilter]);

  const divProps = omit(others, ['onTabChange']);
  return (
    <div {...divProps} className={warpperClass} style={{ width: 300 }} ref={ref as any}>
      {head}
      {coverDom}
      {body}
      {actionDom}
    </div>
  );
});
export default Card;
