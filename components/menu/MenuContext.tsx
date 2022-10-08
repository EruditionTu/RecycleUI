import { createContext } from "react";
interface MenuContextTypes {
  selectedItems: Set<string>; //被点击选择的Items的key的集合
  activedSub: Set<string>; //展开的Sub集合
  selectedSub: Set<string>; //被选择的Sub集合
  selectItem: (keyName: string) => void; //选择Item函数
  cancelSelectItem: (keyName: string) => void; //取消选择Item函数
  selectSubPath: (keyName: string) => void; //选择Sub子路径
  cancelSelectSubPath: (keyName: string) => void; //取消选择Sub子路径
  open: (keyName: string, multiple: boolean) => void; //打开Sub函数
  cancleOpen: (keyName: string) => void; //关闭Sub函数
  onClick: (e?: {
    //点击MenuItem触发的事件
    key: string;
    keyPath: Array<string>;
    domEvent: any;
  }) => void;
  onSelect: (e?: {
    //点击选择触发的事件
    key: string;
    keyPath: Array<string>;
    domEvent: any;
    selectedKeys: Array<string>;
  }) => void;
  onOpenChange: (openKeys: Array<string>) => void; //SubMenu展开/关闭的回调
  onDeselect: (e: {
    //点击取消选中时调用，仅在 multiple 生效
    key: string;
    keyPath: string[];
    selectedKeys: string[];
    domEvent: any;
  }) => void;
}

const MenuContext = createContext<MenuContextTypes>({
  open: (): void => {},
  cancleOpen: (): void => {},
  selectItem: (): void => {},
  cancelSelectItem: (): void => {},
  selectSubPath: (): void => {},
  cancelSelectSubPath: (): void => {},
  selectedItems: new Set<string>(),
  activedSub: new Set<string>(),
  selectedSub: new Set<string>(),
  onClick: (): void => {},
  onSelect: (): void => {},
  onDeselect: (): void => {},
  onOpenChange: (): void => {},
});
export default MenuContext;
