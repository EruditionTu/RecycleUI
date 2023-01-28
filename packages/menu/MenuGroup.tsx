import React, {
  forwardRef,
  useMemo,
  useContext,
  Children,
  useCallback,
  cloneElement,
  isValidElement,
} from 'react';
import type { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import _omit from 'lodash/omit';
import MenuContext from './MenuContext';
import type { MenuGroupProps, MenuValue, ItemType } from './type';
import { transformPrePath } from './utils';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDiveder';

const MenuGroup = forwardRef<
  HTMLDivElement,
  MenuGroupProps & {
    level?: number;
    groupLevel?: number;
    path?: Array<MenuValue>;
    groupIndex?: number;
    inSubMenu?: boolean;
    handleMenuItemSelect?: Function;
  }
>((props, ref) => {
  const {
    children,
    className,
    style,
    label,
    level = 0,
    inSubMenu = false,
    path = [],
    groupIndex = 0,
    groupLevel = 0,
    handleMenuItemSelect,
  } = props;
  const { inlineCollapsed, inlineIndent, mode, selectedSubMenu, activeKey } =
    useContext(MenuContext);
  const dealWithInlineIndent =
    typeof inlineIndent === 'number' ? inlineIndent : Number(inlineIndent);
  const groupLabelStyle = useMemo((): CSSProperties => {
    const itemStyle: CSSProperties = {};
    if (mode === 'inline' && !inlineCollapsed) {
      itemStyle.paddingLeft = `${level * dealWithInlineIndent + groupLevel * 10 - 10}px`;
    } else if (level === 1 && mode === 'vertical') {
      itemStyle.paddingLeft = `24px`;
    }

    return { ...style, ...itemStyle };
  }, [level, style, mode, inlineIndent, inlineCollapsed, groupLevel]);

  const shouldTransform = useMemo(
    () => !!(children as Array<any>).find((item) => !isValidElement(item)),
    [children],
  );

  const TransformItem = useCallback((item: ItemType, _other: Object) => {
    const otherPorps = _omit(item, 'type');
    // eslint-disable-next-line default-case
    switch (item.type) {
      case 'Item':
        return <MenuItem {...(otherPorps as any)} {..._other} />;
      case 'SubMenu':
        return <SubMenu {...(otherPorps as any)} {..._other} />;
      case 'Group':
        return <MenuGroup {...(otherPorps as any)} {..._other} />;
      case 'Divider':
        return <MenuDivider {...otherPorps} />;
      default:
        return <></>;
    }
  }, []);
  return (
    <div className={classNames('recycle-ui-menu-item-group', className)} style={style} ref={ref}>
      <div className="recycle-ui-menu-item-group-title" style={groupLabelStyle}>
        {label}
      </div>
      <ul className="recycle-ui-menu-item-group-lists">
        {shouldTransform
          ? (children as Array<any>).map((child: any, index: number) => {
              const value =
                child.key ||
                child.value ||
                child.props?.value ||
                `group-${transformPrePath(path)}-${groupIndex}-${index}`;
              let props: any = {};
              if (child.type === MenuGroup || child.type === 'Group') {
                props.children = child.props?.children || child.children;
                props.inSubMenu = true;
                props.value = value;
                props.path = [...path];
                props.onClick = (e: any) => handleMenuItemSelect?.(value, e);
                props.groupLevel = groupLevel ? 1 : groupLevel + 1;
              }
              if (child.type === SubMenu || child.type === 'SubMenu') {
                props.value = value;
                props.path = [...path, value];
              }
              if (child.type === MenuItem || child.type === 'Item') {
                props.onClick = (e: any) => handleMenuItemSelect?.(value, e);
                props.inSubMenu = inSubMenu;
              }
              if (isValidElement(child))
                return cloneElement(child, {
                  ...props,
                  ...(child.props as any),
                  key: `${value}`,
                  active:
                    child.type === SubMenu ? selectedSubMenu?.has(value) : activeKey?.has(value),
                  level,
                });
              props = {
                ...props,
                key: `${value}`,
                active:
                  child.type === 'SubMenu' ? selectedSubMenu?.has(value) : activeKey?.has(value),
                level,
              };
              return TransformItem(child as ItemType, props);
            })
          : Children.map(children, (child: ReactNode, index: number) => {
              if (!isValidElement(child)) return null;

              const value =
                child.key || child.props.value || `group-${transformPrePath(path)}${index}`;
              const props: any = {};
              if (child.type === MenuGroup) {
                props.children = child.props.children;
                props.inSubMenu = true;
                props.value = value;
                props.path = [...path];
                props.onClick = (e: any) => handleMenuItemSelect?.(value, e);
                props.groupLevel = groupLevel ? 1 : groupLevel + 1;
                props.groupIndex = index;
              }
              if (child.type === SubMenu) {
                props.value = value;
                props.path = [...path, value];
              }
              if (child.type === MenuItem) {
                props.onClick = (e: any) => handleMenuItemSelect?.(value, e);
                props.inSubMenu = inSubMenu;
              }

              return (
                <>
                  {cloneElement(child, {
                    ...props,
                    ...child.props,
                    key: `${value}`,
                    active:
                      child.type === SubMenu ? selectedSubMenu?.has(value) : activeKey?.has(value),
                    level,
                  })}
                </>
              );
            })}
      </ul>
    </div>
  );
});

export default MenuGroup;
