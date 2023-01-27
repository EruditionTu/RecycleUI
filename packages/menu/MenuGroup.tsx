import React, {
  forwardRef,
  useMemo,
  useContext,
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import type { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import MenuContext from './MenuContext';
import type { MenuGroupProps, MenuValue } from './type';
import { transformPrePath } from './utils';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';

const MenuGroup = forwardRef<
  HTMLDivElement,
  MenuGroupProps & {
    /**
     * 当前MenuGroup的层级
     */
    level?: number;
    groupLevel?: number;
    path?: Array<MenuValue>;
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
  return (
    <div className={classNames('recycle-ui-menu-item-group', className)} style={style} ref={ref}>
      <div className="recycle-ui-menu-item-group-title" style={groupLabelStyle}>
        {label}
      </div>
      <ul className="recycle-ui-menu-item-group-lists">
        {Children.map(children, (child: ReactNode, index: number) => {
          if (!isValidElement(child)) return child;

          const value = child.props.value || `group-${transformPrePath(path)}${index}`;
          const props: any = {};
          if (child.type === MenuGroup) {
            props.children = child.props.children;
            props.inSubMenu = true;
            props.value = value;
            props.path = [...path];
            props.onClick = (e: any) => handleMenuItemSelect?.(value, e);
            props.groupLevel = groupLevel ? 1 : groupLevel + 1;
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
