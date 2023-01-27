import React, { useMemo, useRef, useContext, useCallback, forwardRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';
import { CaretUpOutlined, RightOutlined } from '@ant-design/icons';
import omit from 'lodash/omit';
import OverlayTrigger from '../overlay-trigger';
import MenuContext, { InlineSubMenuContext } from './MenuContext';
import MenuItem from './MenuItem';
import Menu from './Menu';
import type { SubMenuProps, MenuValue } from './type';
import contains from '../common/util/dom/contains';

const getSubMenuHeight = (node: HTMLElement) => {
  const children = new Array(...node.childNodes);
  let height = 0;
  let itemLens = children.length;
  children.forEach((child: any) => {
    if (child.nodeName === 'DIV') {
      height += child.clientHeight;
      itemLens--;
    }
  });
  height += itemLens * 40 + (children.length + 1) * 5;
  return height;
};

const AfterIcon = ({
  prefixCls,
  inline,
  isOpen,
  expendIcon,
}: {
  prefixCls: string;
  inline?: boolean;
  isOpen?: boolean;
  expendIcon?: ReactNode;
}) => {
  if (expendIcon) return <>{expendIcon}</>;

  /**
   * 如果不是inline模式的菜单，返回右箭头
   */
  if (!inline) return <RightOutlined />;
  return (
    <div
      className={classNames(`${prefixCls}-inline-icon`, {
        [`${prefixCls}-inline-open-icon`]: isOpen,
      })}
    >
      <CaretUpOutlined />
    </div>
  );
};

const SubMenu = forwardRef<
  HTMLLIElement,
  SubMenuProps & {
    /**
     * 当前SubMenu的path
     */
    path?: Array<MenuValue>;
    /**
     * 当前SubMenu的Value
     */
    value?: MenuValue;
    /**
     * 当前SubMenu是否被选中（意思就是当前的SubMenu的子孙MenuItem是否被选中）
     */
    active?: boolean;
    /**
     * 当前SubMenu的层级
     */
    level?: number;
  }
>((props, ref) => {
  const {
    active,
    className,
    children,
    path = [],
    level = 1,
    value = '',
    theme,
    disabled = false,
    icon,
    label,
    popupStyle = {},
    popupClassName = '',
    onLabelClick = () => {},
    ...other
  } = props;
  const {
    mode,
    inlineCollapsed,
    activeInlineKey,
    setActiveInlineKey,
    forceSubMenuRender,
    triggerSubMenuAction,
    subMenuOpenDelay,
    subMenuCloseDelay,
    expandIcon,
  } = useContext(MenuContext);
  const { inlineSubMenuDom, state, setInlineSubMenuState } = useContext(InlineSubMenuContext);
  const prefixCls = useMemo(() => 'recycle-ui-submenu', []);
  const warpperRef = useRef<HTMLElement | null>();
  const popupRef = useRef<HTMLElement | null>();

  /**
   * 当前SubMenu是否处于展开状态
   */
  const inlineOpen = useMemo(() => activeInlineKey.has(value), [activeInlineKey, value]);

  /**
   * popup类型的子菜单弹出的位置
   */
  const popupPlacement = useMemo(() => {
    if (mode === 'vertical' || mode === 'inline') return 'rightTop';
    return level === 1 ? 'bottom' : 'rightTop';
  }, [mode]);

  const handleInline = useCallback(
    (value: MenuValue, open: boolean, e: any) => {
      if (disabled) return;
      typeof onLabelClick === 'function' && onLabelClick(value, e);
      setActiveInlineKey &&
        setActiveInlineKey((isActived: Set<MenuValue>) => {
          const newIsActived: Set<MenuValue> = new Set<MenuValue>(isActived);
          open ? newIsActived.add(value) : newIsActived.delete(value);
          return newIsActived;
        });
    },
    [activeInlineKey, setActiveInlineKey, value, disabled, onLabelClick],
  );
  useEffect(() => {
    if (mode !== 'inline' || inlineCollapsed) return;
    if (inlineOpen) {
      setInlineSubMenuState({ inlineSubMenuDom: popupRef.current as any, state: 'open' });
      popupRef.current!.style.height = `${getSubMenuHeight(popupRef.current!)}px`;
    } else {
      setInlineSubMenuState({ inlineSubMenuDom: popupRef.current as any, state: 'close' });
      popupRef.current!.style.height = '0';
    }
  }, [inlineOpen, mode, inlineCollapsed]);
  useEffect(() => {
    if (
      contains(popupRef.current!, inlineSubMenuDom as any) &&
      popupRef.current !== inlineSubMenuDom
    ) {
      if (state === 'open')
        popupRef.current!.style.height = `${
          // eslint-disable-next-line no-unsafe-optional-chaining
          popupRef.current?.clientHeight + (inlineSubMenuDom as any).scrollHeight
        }px`;
      else
        popupRef.current!.style.height = `${
          // eslint-disable-next-line no-unsafe-optional-chaining
          popupRef.current?.clientHeight! - (inlineSubMenuDom as any).scrollHeight
        }px`;
    }
  }, [inlineSubMenuDom, state]);

  if (mode === 'inline' && !inlineCollapsed) {
    return (
      <div style={{ transition: 'linear all 0.3s', position: 'relative' }} ref={ref as any}>
        <MenuItem
          {...omit(other, 'ref')}
          disabled={disabled}
          isSubMenu
          icon={icon}
          label={label}
          level={level}
          active={active}
          addonAfter={
            <AfterIcon
              isOpen={activeInlineKey?.has(value)}
              prefixCls={prefixCls}
              inline
              expendIcon={expandIcon}
            />
          }
          className={classNames(`${prefixCls}-title`, className, `${prefixCls}-isSubMenu`, {})}
          onClick={(e: any) => handleInline(value, !inlineOpen, e)}
        />

        <Menu
          submenu
          ref={popupRef as any}
          path={[...path]}
          className={`${prefixCls}-inline`}
          level={level}
          style={{
            overflow: 'hidden',
            position: 'relative',
            height: 0,
            transition: 'all linear 0.3s',
          }}
        >
          {children}
        </Menu>
      </div>
    );
  }
  return (
    <li
      ref={(e) => {
        warpperRef.current = e && e;
        return ref;
      }}
      style={{ position: 'relative' }}
    >
      <OverlayTrigger
        dialogProps={{
          style: { marginLeft: '7px', ...popupStyle },
          className: popupClassName,
        }}
        placement={popupPlacement}
        hoverOverlayClose={false}
        disabled={disabled}
        destroyTooltipOnHide={false}
        trigger={triggerSubMenuAction}
        usePortal
        delay={{ hide: subMenuCloseDelay, show: subMenuOpenDelay }}
        forceRenderDom={forceSubMenuRender}
        overlay={
          <Menu ref={popupRef as any} path={[...path]} submenu level={level} theme={theme}>
            {children}
          </Menu>
        }
      >
        <MenuItem
          {...omit(other, 'ref')}
          disabled={disabled}
          label={label}
          isSubMenu
          level={level}
          active={active}
          addonAfter={
            mode === 'horizontal' && level === 1 ? null : (
              <AfterIcon
                isOpen={activeInlineKey?.has(value)}
                prefixCls={prefixCls}
                expendIcon={expandIcon}
              />
            )
          }
          className={classNames(`${prefixCls}-title`, className, {})}
        />
      </OverlayTrigger>
    </li>
  );
});
export default SubMenu;
