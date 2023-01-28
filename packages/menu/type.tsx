import type {
  CSSProperties,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export type ItemType =
  | (Omit<MenuItemProps, 'type'> & { type: 'Item' | {}; key?: any; value?: any })
  | (Omit<SubMenuProps, 'type'> & {
      type: 'SubMenu' | {};
      key?: any;
      value?: any;
      children?: ItemType[];
    })
  | (Omit<MenuGroupProps, 'type'> & { type: 'Group' | {}; children?: ItemType[] })
  | { type: 'Divider' | {}; dashed?: boolean };

/**
 * 菜单项的唯一标识值的类型
 */
export type MenuValue = string | number;

/**
 * 菜单项的类型
 */
export type MenuMode = 'vertical' | 'horizontal' | 'inline';

/**
 * 菜单的宽度
 */
export type MenuWidth =
  | { collapsedWidth: number | string; expendWidth: number | string }
  | number
  | string;

export interface MenuItemProps extends Omit<HTMLProps<HTMLLIElement>, 'title' | 'label'> {
  /**
   * 菜单图标
   *
   * @default undefined
   */
  icon?: ReactNode;
  /**
   * 菜单项标题
   *
   * @default undefined
   */
  label?: ReactNode;
  /**
   * 设置为收缩时展示的悬浮标题
   * @default undefined
   */
  title?: ReactNode;
  /**
   * 菜单标题后插入的内容
   * @default undefined
   */
  addonAfter?: ReactNode;
  /**
   * 标签禁用
   * @default false
   */
  disabled?: boolean;
}

export interface SubMenuProps extends Omit<HTMLProps<HTMLLIElement>, 'label'> {
  /**
   * 子菜单主题颜色，默认从外层的Menu继承
   *
   * @default light
   */
  theme?: 'light' | 'dark' | {};
  /**
   * 是否禁用当前子菜单
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * 子菜单的图标
   * @default undefined
   */
  icon?: ReactNode;
  /**
   * 子菜单标题
   * @default undefined
   */
  label?: ReactNode;
  /**
   * 子菜单样式，mode="inline"时无效
   *
   * @default ""
   */
  popupClassName?: string;
  /**
   * 子菜单style，mode="inline"无效
   *
   * @default {}
   */
  popupStyle?: CSSProperties;
  /**
   * 点击子菜单标题
   * @param key 子菜单的key
   * @param domEvent 点击事件
   * @returns void
   */
  onLabelClick?: (key: MenuValue, domEvent: any) => void;
}

export interface InlineSubMenuContextProps {
  /**
   * inline模式下展开的SubMenu的dom
   * @default null
   */
  inlineSubMenuDom: EventTarget | null;
  /**
   * SubMenu展开或者关闭
   * @default open
   */
  state: 'open' | 'close';
  /**
   * 设置inlineSubMenu的State
   * @default ()=>{}
   */
  setInlineSubMenuState: Dispatch<
    SetStateAction<{
      inlineSubMenuDom: EventTarget | null;
      state: 'open' | 'close';
    }>
  >;
}

export interface MenuContextProps {
  /**
   * 点击MenuItem调用此函数
   * @param e {}
   * @returns
   */
  onClick?: (e: {
    item: HTMLElement;
    key: MenuValue;
    keyPath: Array<MenuValue>;
    domEvent: any;
  }) => void;
  /**
   * 取消选中时调用，仅在 multiple 生效
   * @param e
   * @returns
   */
  onDeselect?: (e: {
    item: HTMLElement;
    key: MenuValue;
    keyPath: Array<MenuValue>;
    selectedKeys?: Set<MenuValue>;
    domEvent: any;
  }) => void;

  /**
   * 被选中时调用
   * @param e
   * @returns
   */
  onSelect?: (e: {
    item: HTMLElement;
    key: MenuValue;
    keyPath: Array<MenuValue>;
    selectedKeys?: Set<MenuValue>;
    domEvent: any;
  }) => void;
  /**
   * Inline 的SubMenu 展开/关闭的回调,仅在inline模式下生效
   * @param openKeys
   * @returns
   */
  onOpenChange: (openKeys: Array<MenuValue>) => void;
  /**
   * 自定义展开图标
   *
   * @default undefined
   */
  expandIcon: ReactNode;
  /**
   * inline 时菜单是否收起状态
   *
   * @default true
   */
  inlineCollapsed: boolean;
  /**
   * inline 时菜单缩进的宽度
   *
   * @default 24
   */
  inlineIndent: number | string;
  /**
   * SubMenu 展开/关闭的触发行为
   *
   * @default hover
   */
  triggerSubMenuAction: 'hover' | 'click';
  /**
   * 用户鼠标离开子菜单后关闭延时
   *
   * @default 300
   */
  subMenuCloseDelay: number;
  /**
   * 用户鼠标进入子菜单后开启延时
   *
   * @default 300
   */
  subMenuOpenDelay: number;
  /**
   * 是否允许选中
   *
   * @default true
   */
  selectable: boolean;
  /**
   * 在弹窗类子菜单展示之前就渲染进DOM
   *
   * @default true
   */
  forceSubMenuRender: boolean;
  /**
   * 是否允许Menu多选
   *
   * @default false
   */
  multiple: boolean;
  /**
   * Menu的模式：inline、horizontal、vertical
   *
   * @default inline
   */
  mode: MenuMode;
  /**
   * 菜单主题颜色
   *
   * @default light
   */
  theme: 'light' | 'dark' | {};
  /**
   * 被选中的MenuItem集合
   *
   * @default new Set()
   */
  activeKey: Set<MenuValue>;
  /**
   * 打开的SubMenu集合，仅限于inline模式的菜单
   * @default new Set()
   */
  activeInlineKey: Set<MenuValue>;
  /**
   * 被选中的SubeMenu集合，就是当MenuItem被选中时，那么沿途的SubMenu也该被选中
   * @default new Map()
   */
  selectedSubMenu: Map<MenuValue, number>;
  /**
   * 点击控制MenuItem被选中的函数
   * @default ()=>{}
   */
  setActiveKey: Dispatch<SetStateAction<Set<MenuValue>>>;
  /**
   * 点击控制inline模式的SubMenu展开
   * @default ()=>{}
   */
  setActiveInlineKey: Dispatch<SetStateAction<Set<MenuValue>>>;
  /**
   * 点击选中的SubMenu
   * @default ()=>{}
   */
  setSelectedSubMenu: Dispatch<SetStateAction<Map<MenuValue, number>>>;
}

export interface MenuGroupProps extends Omit<HTMLProps<HTMLLIElement>, 'label'> {
  label: ReactNode;
}

/**
 * 外层Menu的参数类型
 */
interface MenuProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onClick' | 'onSelect'> {
  /**
   * 初始激活的菜单项
   *
   * @default undefined
   */
  defaultOpenKeys?: Array<MenuValue>;
  /**
   * 初始选中的菜单项key数组
   *
   * @default []
   */
  defaultSelectedKeys?: Array<MenuValue>;
  /**
   * 自定义展开图标
   *
   * @default undefined
   */
  expandIcon?: ReactNode;
  /**
   * 在子菜单展示之前就渲染进DOM
   *
   * @default true
   */
  forceSubMenuRender?: boolean;
  /**
   * inline 时菜单是否收起状态
   * @default true
   */
  inlineCollapsed?: boolean;
  /**
   * inline 时菜单缩进的宽度
   *
   * @default 24
   */
  inlineIndent?: number | string;
  /**
   * 菜单内容
   * @default []
   */
  items?: ItemType[];
  /**
   * 菜单模式
   *
   * @default inline
   */
  mode?: MenuMode;
  /**
   * 是否允许多选
   *
   * @default false
   */
  multiple?: boolean;
  /**
   * 当前展开的SubMenu菜单项数组
   *
   * @default []
   */
  openKeys?: Array<MenuValue>;
  /**
   * 用于自定义Menu水平空间不足时的省略收缩的图标
   *
   * @default ...
   */
  overflowedIndicator?: ReactNode;
  /**
   * 是否允许选中
   *
   * @default true
   */
  selectable?: boolean;
  /**
   * 当前选中的菜单项key数组
   *
   * @default []
   */
  selectedKeys?: Array<MenuValue>;
  /**
   * 用户鼠标离开子菜单后关闭延时，非inline
   *
   * @default 300
   */
  subMenuCloseDelay?: number;
  /**
   * 用户鼠标进入子菜单后开启延时，非inline
   *
   * @default 100
   */
  subMenuOpenDelay?: number;
  /**
   * 菜单主题颜色
   * @default light
   */
  theme?: 'light' | 'dark' | {};
  /**
   * SubMenu 展开/关闭的触发行为，非inline
   *
   * @default hover
   */
  triggerSubMenuAction?: 'hover' | 'click';
  /**
   * 菜单宽度。当值是一个对象时，width.expendWidth是展开时的宽度，width.collapsedWidth是折叠起来的宽度。非horizontal
   *
   *  @default 232px
   */
  width?: MenuWidth;
  /**
   * 点击MenuItem调用此函数
   * @param e {}
   * @returns
   */
  onClick?: (e: {
    item: HTMLElement;
    key: MenuValue;
    keyPath: Array<MenuValue>;
    domEvent: any;
  }) => void;
  /**
   * 取消选中时调用，仅在 multiple 生效
   * @param e
   * @returns
   */
  onDeselect?: (e: {
    item: HTMLElement;
    key: MenuValue;
    keyPath: Array<MenuValue>;
    selectedKeys?: Set<MenuValue>;
    domEvent: any;
  }) => void;

  /**
   * 被选中时调用
   * @param e
   * @returns
   */
  onSelect?: (e: {
    item: HTMLElement;
    key: MenuValue;
    keyPath: Array<MenuValue>;
    selectedKeys?: Set<MenuValue>;
    domEvent: any;
  }) => void;
  /**
   * SubMenu 展开/关闭的回调,仅在inline模式下生效
   * @param openKeys
   * @returns
   */
  onOpenChange?: (openKeys: Array<MenuValue>) => void;
}

export default MenuProps;
