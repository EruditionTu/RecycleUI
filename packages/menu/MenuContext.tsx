import { createContext } from 'react';
import type { MenuContextProps, InlineSubMenuContextProps } from './type';

const MenuContext = createContext<MenuContextProps>({
  triggerSubMenuAction: 'hover',
  activeInlineKey: new Set(),
  selectedSubMenu: new Map(),
  activeKey: new Set(),
  setActiveInlineKey: () => {},
  setSelectedSubMenu: () => {},
  setActiveKey: () => {},
  mode: 'inline',
  theme: 'light',
  multiple: false,
  inlineIndent: 24,
  inlineCollapsed: false,
  forceSubMenuRender: false,
  selectable: true,
  subMenuCloseDelay: 300,
  subMenuOpenDelay: 100,
  onClick: () => {},
  onDeselect: () => {},
  onSelect: () => {},
  expandIcon: undefined,
});
export const InlineSubMenuContext = createContext<InlineSubMenuContextProps>({
  inlineSubMenuDom: null,
  state: 'close',
  setInlineSubMenuState: () => {},
});

export default MenuContext;
