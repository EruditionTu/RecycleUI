import MenuItem from "../MenuItem";
import SubMenu from "../SubMenu";
import MenuItemGroup from "../MenuItemGroup";
import MenuDivider from "../MenuDivider";

import randomKey from "./randomKey";

import { ItemObject } from "../types/MenuTypes";

import _omit from "lodash/omit";
import { createElement } from "react";

type ItemType =
  | typeof MenuItem
  | typeof SubMenu
  | typeof MenuItemGroup
  | typeof MenuDivider;

let compileToReactComponent: (
  objectArray: Array<ItemObject>
) => React.ReactNode[];
compileToReactComponent = (
  objectArray: Array<ItemObject>
): React.ReactNode[] => {
  let ReactComponents: Array<React.ReactNode> = new Array<React.ReactNode>();
  if (objectArray && Array.isArray(objectArray)) {
    objectArray.forEach((item: ItemObject, index: number): void => {
      const itemProps: any = _omit(item, ["type"]);
      let keyname: string =
        item.key && typeof item.key === "string" ? item.key : randomKey(100);
      itemProps.key = keyname;
      itemProps.name = keyname;
      if (item.type === "MenuItem") {
        ReactComponents.push(createElement(MenuItem, itemProps));
      } else if (item.type === "SubMenu") {
        ReactComponents.push(createElement(SubMenu, itemProps));
      }
    });
  }
  return ReactComponents;
};
export { compileToReactComponent, ItemType };
