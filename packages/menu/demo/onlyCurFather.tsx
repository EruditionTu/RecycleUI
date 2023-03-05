import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Menu from '..';

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
  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem('Option 1', '1', undefined, undefined, 'Item'),
      getItem('Option 2', '2', undefined, undefined, 'Item'),
      getItem('Option 3', '3', undefined, undefined, 'Item'),
      getItem('Option 4', '4', undefined, undefined, 'Item'),
    ],
    'SubMenu',
  ),
  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 5', '5', undefined, undefined, 'Item'),
      getItem('Option 6', '6', undefined, undefined, 'Item'),
      getItem(
        'Submenu',
        'sub3',
        null,
        [
          getItem('Option 7', '7', undefined, undefined, 'Item'),
          getItem('Option 8', '8', undefined, undefined, 'Item'),
        ],
        'SubMenu',
      ),
    ],
    'SubMenu',
  ),
  getItem(
    'Navigation Three',
    'sub4',
    <SettingOutlined />,
    [
      getItem('Option 9', '9', undefined, undefined, 'Item'),
      getItem('Option 10', '10', undefined, undefined, 'Item'),
      getItem('Option 11', '11', undefined, undefined, 'Item'),
      getItem('Option 12', '12', undefined, undefined, 'Item'),
    ],
    'SubMenu',
  ),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  );
};

export default App;
