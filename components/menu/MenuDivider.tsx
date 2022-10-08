import * as React from "react";
const MenuDivider: React.FC<{ dashed: boolean }> = (props: {
  dashed: boolean;
}): React.ReactElement => {
  return <li></li>;
};
export default React.memo(MenuDivider);
