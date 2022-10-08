import * as React from "react";
import classnames from "classnames";
import DropdownButton from "./DropdownButton";
type placementType =
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "top"
  | "topLeft"
  | "topRight";
interface DropdowmButtonPropsEventsType {
  arrow?: boolean;
  disabled?: boolean;
  destroyPopupOnHide?: boolean;
  getPopupContainer?: boolean; //
  placement?: placementType; //菜单弹出位置
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}
const Dropdown: React.FC<DropdowmButtonPropsEventsType> = (
  props: DropdowmButtonPropsEventsType
): React.ReactElement => {
  return <></>;
};
export default React.memo(Dropdown);
