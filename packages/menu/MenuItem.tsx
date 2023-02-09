import React, { useMemo, forwardRef, useContext } from 'react';
import type { CSSProperties } from 'react';
import classNames from 'classnames';
import { DesktopOutlined } from '@ant-design/icons';
import type { MenuItemProps } from './type';
import MenuContext from './MenuContext';
import Tooltip from '../tooltip';

const disabledProps = {
  href: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  tabIndex: -1,
};

const MenuItem = forwardRef<
  HTMLLIElement,
  MenuItemProps & {
    /**
     * 当前MenuItem是否是SubMenu的入口Item
     */
    isSubMenu?: boolean;
    /**
     * 当前MenuItem是否是在SubMenu中渲染的MenuItem
     */
    inSubMenu?: boolean;
    /**
     * 当前MenuItem的层级
     */
    level?: number;
    /**
     * 当前MenuItem是否被选中活跃
     */
    active?: boolean;
  }
>((props, ref) => {
  const {
    disabled = false,
    icon,
    label = '',
    title,
    addonAfter,
    /**
     * 当前MenuItem是否是SubMenu的Menu中的一个MenuItem
     */
    inSubMenu = false,
    /**
     * 当前MenuItem是否是SubMenu的MenuItem
     * @default false
     */
    isSubMenu = false,
    /**
     * 当前MenuItem是否是活跃的，无论是点击的item还是为subMenu显示的Item
     * @default false
     */
    active = false,
    /**
     * 当前MenuItem的层级
     */
    level = 1,
    children,
    className = '',
    style = {},
    ...other
  } = props;
  const { mode, inlineIndent, inlineCollapsed } = useContext(MenuContext);
  const prefixCls = useMemo(() => 'recycle-ui-menu-item', []);
  const renderInlineCollapsed = useMemo(() => {
    return inlineCollapsed && level === 1 && mode === 'inline';
  }, [inlineCollapsed, level, mode]);
  const renderHorizontal = useMemo(() => {
    return mode === 'horizontal' && level === 1;
  }, [mode, level]);
  const withTooltip = useMemo(
    () => renderInlineCollapsed && !isSubMenu,
    [renderInlineCollapsed, isSubMenu],
  );
  const menuItemCls = useMemo(
    () =>
      classNames(className, {
        [prefixCls]: !renderInlineCollapsed,

        [`${prefixCls}-inline-collapsed`]: renderInlineCollapsed,
        [`${prefixCls}-inline-collapsed-active`]: renderInlineCollapsed && active,

        [`${prefixCls}-horizontal`]: renderHorizontal,
        [`${prefixCls}-vertical`]:
          mode === 'vertical' || (mode === 'inline' && !renderInlineCollapsed) || inSubMenu,

        [`${prefixCls}-${mode === 'horizontal' && !inSubMenu ? 'horizontal' : 'vertical'}-active`]:
          active && !isSubMenu && !renderInlineCollapsed,
        [`${prefixCls}-${
          mode === 'horizontal' && !inSubMenu ? 'horizontal' : 'vertical'
        }-active-sub`]: active && isSubMenu && !renderInlineCollapsed,

        [`${prefixCls}-disabled`]: disabled,
      }),
    [
      prefixCls,
      className,
      active,
      disabled,
      isSubMenu,
      mode,
      inSubMenu,
      renderInlineCollapsed,
      renderHorizontal,
    ],
  );

  const menuItemStyle = useMemo((): CSSProperties => {
    const itemStyle: CSSProperties = {};
    const dealWithInlineIndent =
      typeof inlineIndent === 'number' ? inlineIndent : Number(inlineIndent);
    if (mode === 'inline' && !inlineCollapsed) {
      itemStyle.paddingLeft = `${level * dealWithInlineIndent}px`;
    } else if (level === 1 && mode === 'vertical') {
      itemStyle.paddingLeft = `24px`;
    }

    return { ...style, ...itemStyle };
  }, [level, style, isSubMenu, mode, inlineIndent, inlineCollapsed]);

  const menuIconCls = useMemo(
    () =>
      classNames({
        [`${prefixCls}-inline-collapsed-icon`]: renderInlineCollapsed,
      }),
    [renderInlineCollapsed],
  );

  return (
    <>
      {withTooltip ? (
        <Tooltip
          placement="right"
          content={title || children || label}
          disabled={!renderInlineCollapsed || isSubMenu}
        >
          <li
            className={menuItemCls}
            style={menuItemStyle}
            {...other}
            {...(disabled ? disabledProps : {})}
            ref={ref}
          >
            {renderInlineCollapsed ? (
              <div className={menuIconCls}>{icon || <DesktopOutlined />}</div>
            ) : (
              icon && <div>{icon}</div>
            )}
          </li>
        </Tooltip>
      ) : (
        <li
          className={menuItemCls}
          style={menuItemStyle}
          {...other}
          {...(disabled ? disabledProps : {})}
          ref={ref}
        >
          {renderInlineCollapsed ? (
            <div className={menuIconCls}>{icon || <DesktopOutlined />}</div>
          ) : (
            icon && <div>{icon}</div>
          )}
          {!renderInlineCollapsed && <div className={`${prefixCls}-text`}>{children || label}</div>}
          {addonAfter && !renderInlineCollapsed && (
            <div className={`${prefixCls}-icon`}>{addonAfter}</div>
          )}
        </li>
      )}
    </>
  );
});

export default MenuItem;
