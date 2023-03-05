import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Menu from '..';
import Button from '../../button';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon: React.ReactNode,
  children: any,
  type: string,
) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />, undefined, 'Item'),
  getItem('Option 2', '2', <DesktopOutlined />, undefined, 'Item'),
  getItem('Option 3', '3', <ContainerOutlined />, undefined, 'Item'),

  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem('Option 5', '5', undefined, undefined, 'Item'),
      getItem('Option 6', '6', undefined, undefined, 'Item'),
      getItem('Option 7', '7', undefined, undefined, 'Item'),
      getItem('Option 8', '8', undefined, undefined, 'Item'),
    ],
    'SubMenu',
  ),

  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 9', '9', undefined, undefined, 'Item'),
      getItem('Option 10', '10', undefined, undefined, 'Item'),

      getItem(
        'Submenu',
        'sub3',
        null,
        [
          getItem('Option 11', '11', undefined, undefined, 'Item'),
          getItem('Option 12', '12', undefined, undefined, 'Item'),
        ],
        'SubMenu',
      ),
    ],
    'SubMenu',
  ),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;

// const App: React.FC = () => {
//   return (
//     <Menu mode="inline" inlineCollapsed theme="dark">
//       <Menu.Item label="重新加载" />
//       {/* <Menu.Divider /> */}
//       <Menu.SubMenu label="选项">
//         <Menu.SubMenu label="火影">
//           <Menu.Item label="鸣人" />
//           <Menu.Item label="纲手" />
//           <Menu.Item label="雏田" />
//           <Menu.Item label="小樱" />
//         </Menu.SubMenu>
//         <Menu.Item label="添加日期" />
//         <Menu.Item label="标签名称" />
//       </Menu.SubMenu>
//       <Menu.Item label="另存为" active />
//       <Menu.Item label="应用商城" />
//       <Menu.Item label="月统计报表导出" />
//       <Menu.Item label="偏好设置" />
//       {/* <Menu.Divider /> */}
//       <Menu.Item label="谷歌地图" />
//       <Menu.Item label="百度地图" href="https://map.baidu.com" target="_blank" />
//     </Menu>
//   );
// };
// export default App;
