import React, {
  useState,
  useRef,
  useMemo,
  useContext,
  useCallback,
  forwardRef,
  Children,
  useEffect,
  useImperativeHandle,
  isValidElement,
  cloneElement,
} from 'react';
import type { CSSProperties } from 'react';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import _debounce from 'lodash/debounce';
import type MenuProps from './type';
import type { MenuValue, MenuContextProps } from './type';
import MenuContext from './MenuContext';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';
import { transformPrePath, findCanVisible } from './utils';

const Menu = forwardRef<
  HTMLUListElement,
  Omit<MenuProps, keyof MenuContextProps> & {
    /**
     * submenu独立的theme
     */
    theme?: 'light' | 'dark';
    /**
     * 当前Menu的路径，只会在SubMenu的情况下传进来，一般就是SubMenu的路径
     */
    path?: Array<MenuValue>;
    /**
     * 当前Menu的值，只会在SubMenu的情况下传进来，一般就是SubMenu的值
     */
    value?: MenuValue;
    /**
     * 当前menu是否是submenu模式
     */
    submenu?: boolean;
    /**
     * 当前menu的层级
     */
    level?: number;
  }
>((props, ref) => {
  const {
    path = [],
    width = '256px',
    submenu = false,
    level = 0,
    overflowedIndicator = '...',
    theme,
    style = {},
    className,
    children,
    ...other
  } = props;

  const menuRef = useRef<HTMLUListElement>();
  const [horizontalVisibleList, setHorizontalVisibleList] = useState<Array<any>>(
    Children.toArray(children),
  );
  const [horizontalHiddenList, setHorizontalHiddenList] = useState<Array<any>>([]);

  const prefixCls = useMemo(() => (submenu ? 'recycle-ui-submenu' : 'recycle-ui-menu'), []);

  const {
    activeKey,
    setActiveKey,
    selectedSubMenu,
    setSelectedSubMenu,
    multiple,
    mode,
    inlineCollapsed,
    theme: _theme,
    selectable,
    onClick,
    onDeselect,
    onSelect,
  } = useContext(MenuContext);

  const menuTheme = useMemo(() => {
    return theme || _theme;
  }, [theme, _theme]);

  /**
   * menu在inline和vertical模式下展开的宽度
   */
  const menuExpendWidth = useMemo(() => {
    if (typeof width === 'object') {
      return width.expendWidth;
    }
    return width;
  }, [width]);
  /**
   * menu在inline和vertical模式下展开的宽度
   */
  const menuCollapsedWidth = useMemo(() => {
    if (typeof width === 'object') {
      return width.collapsedWidth;
    }
    return 72;
  }, [width]);

  const menuWidth = useMemo(
    () => (inlineCollapsed ? menuCollapsedWidth : menuExpendWidth),
    [inlineCollapsed, menuCollapsedWidth, menuExpendWidth],
  );

  const isHorizontal = useMemo(
    () => mode === 'horizontal' && level === 0 && !submenu,
    [mode, level, submenu],
  );

  /**
   * 当前Menu是否是inline模式的SubMenu
   */
  const isInlineSubMenu = useMemo(() => mode === 'inline' && submenu, [mode, submenu]);

  useEffect(() => {
    if (mode === 'horizontal' && level === 0 && !submenu) {
      const realWidth = menuRef.current?.scrollWidth;
      const renderWidth = menuRef.current?.getBoundingClientRect().width;
      if (realWidth! > renderWidth!) {
        const lastVisibleIdx = findCanVisible(
          menuRef.current?.parentElement as HTMLDivElement,
          menuRef.current!,
        );
        const childArr = Children.toArray(children);
        setHorizontalVisibleList(childArr.slice(0, lastVisibleIdx));
        setHorizontalHiddenList(childArr.slice(lastVisibleIdx! + 1));
      }
      const resizeOb = new ResizeObserver(
        _debounce(() => {
          setHorizontalVisibleList(Children.toArray(children));
          setHorizontalHiddenList([]);
          const realWidth = menuRef.current?.scrollWidth;
          const renderWidth = menuRef.current?.getBoundingClientRect().width;
          if (realWidth! > renderWidth!) {
            const lastVisibleIdx = findCanVisible(
              menuRef.current?.parentElement as HTMLDivElement,
              menuRef.current!,
            );
            const childArr = Children.toArray(children);
            setHorizontalVisibleList(childArr.slice(0, lastVisibleIdx));
            setHorizontalHiddenList(childArr.slice(lastVisibleIdx! + 1));
          }
        }),
      );
      resizeOb.observe(menuRef.current?.parentElement!);
      return () => {
        if (menuRef.current?.parentElement!) resizeOb?.unobserve(menuRef.current?.parentElement!);
      };
    }
  }, []);

  useImperativeHandle(ref, () => menuRef?.current!, [menuRef]);

  /**
   * 控制点击选择MenuItem的函数
   */
  const handleMenuItemSelect = useCallback(
    (value: MenuValue, e: any) => {
      /**
       * 调用onClick事件
       */
      typeof onClick === 'function' &&
        onClick({ item: e.target, key: value, keyPath: [...path, value], domEvent: e });
      // 不允许选择，或者已经选择但不允许多选直接结束函数调用
      if (!selectable || (activeKey?.has(value) && !multiple)) return;

      // 已经选择，但是允许多选，那么取消选择
      if (activeKey?.has(value) && multiple) {
        // 设置当前item被取消选择
        setActiveKey &&
          setActiveKey((isActived: Set<MenuValue>) => {
            const newIsActived: Set<MenuValue> = new Set<MenuValue>(isActived);
            newIsActived.delete(value);
            /**
             * 调用onDeselect事件
             */
            typeof onDeselect === 'function' &&
              onDeselect({
                item: e.target,
                key: value,
                keyPath: [...path, value],
                selectedKeys: newIsActived,
                domEvent: e,
              });
            return newIsActived;
          });
        // 设置item沿途的submenu被取消选中
        setSelectedSubMenu &&
          setSelectedSubMenu((isActived: Map<MenuValue, number>) => {
            const newisActived: Map<MenuValue, number> = new Map<MenuValue, number>(isActived);
            path.forEach((value) => {
              newisActived.set(value, newisActived.has(value) ? newisActived.get(value)! - 1 : 0);
              if (newisActived.has(value) && newisActived.get(value)! > 1) {
                newisActived.set(value, newisActived.get(value)! - 1);
              } else {
                newisActived.delete(value);
              }
            });
            return newisActived;
          });
        return;
      }
      // 设置当前item被选择
      setActiveKey &&
        setActiveKey((isActived: Set<MenuValue>) => {
          const newIsActived: Set<MenuValue> = multiple ? new Set<MenuValue>(isActived) : new Set();
          newIsActived.add(value);
          /**
           * 调用onSelect事件
           */
          typeof onSelect === 'function' &&
            onSelect({
              item: e.target,
              key: value,
              keyPath: [...path, value],
              selectedKeys: newIsActived,
              domEvent: e,
            });
          return newIsActived;
        });
      // 设置item沿途的submenu被选中
      setSelectedSubMenu &&
        setSelectedSubMenu((isActived: Map<MenuValue, number>) => {
          const newisActived: Map<MenuValue, number> = multiple
            ? new Map<MenuValue, number>(isActived)
            : new Map();
          path.forEach((value) => {
            newisActived.set(value, newisActived.has(value) ? newisActived.get(value)! + 1 : 1);
          });
          return newisActived;
        });
    },
    [
      activeKey,
      setSelectedSubMenu,
      path,
      multiple,
      setActiveKey,
      selectable,
      onClick,
      onDeselect,
      onSelect,
    ],
  );

  /**
   * inline和vertical模式的style
   */
  const verticalMenuStyle = useMemo((): CSSProperties => {
    return { width: submenu ? undefined : menuWidth };
  }, [menuWidth, submenu]);

  /**
   * horizontal模式的style
   */
  const horizontalMenuStyle = useMemo((): CSSProperties => {
    return { width: '100%' };
  }, []);
  /**
   * inline和vertical模式的class
   */
  const verticalMenuCls = useMemo(
    () =>
      classNames(prefixCls, `${prefixCls}-${menuTheme}`, className, {
        [`${prefixCls}-inline-content`]: isInlineSubMenu && !inlineCollapsed,
        [`${prefixCls}-inline-collapsed`]: inlineCollapsed,
      }),
    [prefixCls, inlineCollapsed, menuTheme, className, isInlineSubMenu, mode, submenu],
  );
  /**
   * horizontal模式的class
   */
  const horizontalMenuCls = useMemo(
    (): string =>
      classNames(prefixCls, `${prefixCls}-${menuTheme}`, className, `${prefixCls}-horizontal`),
    [prefixCls, menuTheme, className],
  );

  if (isHorizontal) {
    return (
      <div
        style={{
          width: '100%',
          overflow: 'scrollX',
        }}
      >
        <ul
          ref={menuRef as any}
          className={horizontalMenuCls}
          style={{ ...horizontalMenuStyle, ...style }}
          {...other}
        >
          {Children.map(horizontalVisibleList, (child: ReactNode, index: number) => {
            if (!isValidElement(child)) return child;
            const value =
              child.props.value || `${submenu ? 'sub' : 'menu'}-${transformPrePath(path)}${index}`;
            const props: any = {};
            // 如果当前menu是submenu，那么mMenuItem需要传递isSubMenuItem的参数
            if (submenu) {
              props.inSubMenu = true;
            }
            if (child.type === SubMenu) {
              props.value = value;
              props.path = [...path, value];
            }
            if (child.type === MenuItem) {
              props.onClick = (e: any) => {
                handleMenuItemSelect(value, e);
              };
            }
            return (
              <>
                {cloneElement(child, {
                  ...props,
                  ...child.props,
                  key: `${value}`,
                  active:
                    child.type === SubMenu ? selectedSubMenu?.has(value) : activeKey?.has(value),
                  level: level + 1,
                })}
              </>
            );
          })}
          {horizontalHiddenList?.length !== 0 && (
            <SubMenu label={overflowedIndicator}>
              {horizontalHiddenList.map((item) => {
                return <MenuItem {...item.props} />;
              })}
            </SubMenu>
          )}
        </ul>
      </div>
    );
  }

  return (
    <ul
      ref={menuRef as any}
      className={verticalMenuCls}
      style={{ ...verticalMenuStyle, ...style }}
      // {...other}
    >
      {Children.map(children, (child: ReactNode, index: number) => {
        if (!isValidElement(child)) return child;
        const value =
          child.props.value || `${submenu ? 'sub' : 'menu'}-${transformPrePath(path)}${index}`;
        const props: any = {};
        // 如果当前menu是submenu，那么MenuItem需要传递isSubMenuItem的参数
        if (submenu) {
          props.inSubMenu = true;
        }
        if (child.type === SubMenu) {
          props.value = value;
          props.path = [...path, value];
        }
        if (child.type === MenuItem) {
          props.onClick = (e: any) => handleMenuItemSelect(value, e);
        }
        if (child.type === MenuGroup) {
          props.children = child.props.children;
          props.inSubMenu = true;
          props.value = value;
          props.path = [...path];
          props.handleMenuItemSelect = handleMenuItemSelect;
        }
        return (
          <>
            {cloneElement(child, {
              ...props,
              ...child.props,
              key: `${value}`,
              active: child.type === SubMenu ? selectedSubMenu?.has(value) : activeKey?.has(value),
              level: level + 1,
            })}
          </>
        );
      })}
    </ul>
  );
});

export default Menu;
