import * as React from "react";
import Menu from "../";
import "../style";
const items = [
  {
    label: "NBA",
    type: "MenuItem",
    key: "item-1",
  },
  {
    label: "CBA",
    type: "MenuItem",
    key: "item-2",
    onClick: (e) => {
      console.log(e);
    },
  },
  {
    label: "NET",
    type: "SubMenu",
    key: "submenu-1",
    children: [
      {
        label: "bytedance",
        type: "MenuItem",
        key: "submenu-1-item-1",
      },
      {
        label: "tencent",
        type: "MenuItem",
        key: "submenu-1-item-2",
      },
      {
        label: "alibaba",
        type: "SubMenu",
        key: "submenu-1-submenu-1",
        children: [
          {
            label: "蚂蚁",
            type: "MenuItem",
            key: "submenu-1-submenu-1-item-1",
          },
          {
            label: "阿里云",
            type: "MenuItem",
            key: "submenu-1-submenu-1-item-2",
          },
          {
            label: "淘宝",
            type: "SubMenu",
            key: "submenu-1-submenu-1-submenu-1",
            children: [
              {
                label: "大淘宝",
                type: "MenuItem",
                key: "submenu-1-submenu-1-submenu-1-item-1",
              },
              {
                label: "陶特",
                type: "MenuItem",
                key: "submenu-1-submenu-1-submenu-1-item-2",
              },
            ],
          },
        ],
      },
      {
        label: "Kuaishou",
        type: "SubMenu",
        key: "kuaishou",
        children: [
          {
            label: "社科",
            type: "MenuItem",
            key: "item-1561",
          },
          {
            label: "快看点",
            type: "MenuItem",
            key: "item-74791",
          },
        ],
      },
    ],
  },
];
export default () => {
  const [arr, setArr] = React.useState([]);
  const [suba, setSuba] = React.useState([]);
  const [num, setNum] = React.useState(1);
  return (
    <>
      <div
        style={{
          width: "250px",
        }}
      >
        <Menu
          items={items}
          mode={"vertical"}
          inlineIndent={10}
          theme={"dark"}
          //    onSelect={(e)=>{
          //        console.log(e)
          //    }}
          //    // onOpenChange={(e)=>{
          //    //     console.log(e)
          //    // }}
          //    onDeselect={e=>{
          //        console.log(e)
          //    }}
          subMenuCloseDelay={50}
        />
      </div>
    </>
  );
};
