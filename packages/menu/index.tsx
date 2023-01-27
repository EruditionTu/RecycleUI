import type { FC } from 'react';
import React, { forwardRef, useState, useMemo, useCallback, useEffect } from 'react';
import _omit from 'lodash/omit';
import MenuContext, { InlineSubMenuContext } from './MenuContext';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import type MenuProps from './type';
import MenuGroup from './MenuGroup';
import MenuDivider from './MenuDiveder';
import type { MenuValue, MenuContextProps, InlineSubMenuContextProps, ItemType } from './type';

function initSelectedMenuItem(defaultSelectedKeys: Array<MenuValue>): Set<MenuValue> {
  return defaultSelectedKeys instanceof Array ? new Set(defaultSelectedKeys) : new Set();
}

function initOpenSubMenu(defaultOpenKeys: Array<MenuValue>): Map<MenuValue, number> {
  if (!(defaultOpenKeys instanceof Array)) return new Map();
  const openMap: Map<MenuValue, number> = new Map();
  defaultOpenKeys.forEach((key: MenuValue) => {
    openMap.set(key, openMap.has(key) ? openMap.get(key)! + 1 : 1);
  });
  return openMap;
}

/**
 * 使得Menu具有向下传递参数的context
 */
const MenuWithContext = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const {
    theme = 'light',
    mode = 'vertical',
    items = [],
    defaultSelectedKeys = [],
    defaultOpenKeys = [],
    openKeys,
    expandIcon,
    selectedKeys,
    onClick = () => {},
    onDeselect = () => {},
    onOpenChange = () => {},
    onSelect = () => {},
    inlineCollapsed = false,
    subMenuCloseDelay = 300,
    subMenuOpenDelay = 300,
    inlineIndent = 24,
    forceSubMenuRender = false,
    multiple = false,
    selectable = true,
    triggerSubMenuAction = 'hover',
    ...other
  } = props;
  const [inlineSubMenuContext, setInlineSubMenuContext] = useState<{
    inlineSubMenuDom: EventTarget | null;
    state: 'open' | 'close';
  }>({
    inlineSubMenuDom: null,
    state: 'open',
  });
  /**
   * 被选中的MneuItem
   */
  const [activeKey, setActiveKey] = useState<Set<MenuValue>>(
    initSelectedMenuItem(defaultSelectedKeys),
  );
  /**
   * 沿途被选中的SubMenu
   */
  const [selectedSubMenu, setSelectedSubMenu] = useState<Map<MenuValue, number>>(
    initOpenSubMenu(defaultOpenKeys),
  );
  /**
   * 展开inline模式的子菜单
   */
  const [activeInlineKey, setActiveInlineKey] = useState<Set<MenuValue>>(new Set());

  /**
   * 当activeInlineKey发生变化时，触发openKeys的变化
   */

  useEffect(
    () => () => {
      typeof onOpenChange === 'function' && onOpenChange(Array.from(activeInlineKey));
    },
    [activeInlineKey],
  );
  const menuContextValue = useMemo(
    (): MenuContextProps => ({
      activeKey,
      setActiveKey,
      activeInlineKey,
      setActiveInlineKey,
      selectedSubMenu,
      setSelectedSubMenu,
      selectable,
      mode,
      theme,
      multiple,
      expandIcon,
      inlineIndent,
      inlineCollapsed,
      subMenuCloseDelay,
      subMenuOpenDelay,
      triggerSubMenuAction,
      forceSubMenuRender,
      onClick,
      onDeselect,
      onSelect,
    }),
    [
      activeKey,
      setActiveKey,
      activeInlineKey,
      setActiveInlineKey,
      selectedSubMenu,
      setSelectedSubMenu,
      mode,
      theme,
      multiple,
      expandIcon,
      inlineIndent,
      inlineCollapsed,
      forceSubMenuRender,
      subMenuCloseDelay,
      subMenuOpenDelay,
      onClick,
      onDeselect,
      onOpenChange,
      onSelect,
    ],
  );
  const inlineSubMenuContextValue = useMemo(
    (): InlineSubMenuContextProps => ({
      ...inlineSubMenuContext,
      setInlineSubMenuState: setInlineSubMenuContext,
    }),
    [inlineSubMenuContext, setInlineSubMenuContext],
  );
  useEffect(
    () => () => {
      if (openKeys instanceof Array) {
        setActiveInlineKey(() => {
          return new Set(openKeys);
        });
      }
    },
    [openKeys],
  );
  useEffect(
    () => () => {
      if (selectedKeys instanceof Array) {
        setActiveKey(() => {
          return new Set(selectedKeys);
        });
      }
    },
    [selectedKeys],
  );
  const TransformItems = useCallback(() => {
    if (items instanceof Array && items.length !== 0) {
      return items.map((item: ItemType) => {
        const otherPorps = _omit(item, 'type');
        // eslint-disable-next-line default-case
        switch (item.type) {
          case 'item':
            return <MenuItem {...(otherPorps as any)} />;
          case 'submenu':
            return <SubMenu {...(otherPorps as any)} />;
          default:
            return <></>;
        }
      });
    }
    return <></>;
  }, [items]);
  return (
    <MenuContext.Provider value={menuContextValue}>
      <InlineSubMenuContext.Provider value={inlineSubMenuContextValue}>
        {items instanceof Array && items.length !== 0 ? (
          TransformItems()
        ) : (
          <Menu {...other} ref={ref} />
        )}
      </InlineSubMenuContext.Provider>
    </MenuContext.Provider>
  );
});

interface MenuComponents extends FC<MenuProps> {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  Group: typeof MenuGroup;
  Divider: typeof MenuDivider;
}
const MenuWarpper: MenuComponents = MenuWithContext as unknown as MenuComponents;
MenuWarpper.Item = MenuItem;
MenuWarpper.SubMenu = SubMenu;
MenuWarpper.Group = MenuGroup;
MenuWarpper.Divider = MenuDivider;

export default MenuWarpper;
