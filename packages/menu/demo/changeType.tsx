import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Divider from '../../divider';
import Switch from '../../switch';
import Menu from '..';
import '../../switch/style';
import '../../divider/style';
import '../style';

function getItem(
  label: React.ReactNode,
  key: React.Key | null,
  icon: React.ReactNode,
  children: any,
  type: string,
) {
  return {
    key,
    icon,
    children,
    type,
    label,
  };
}

const items = [
  getItem('Navigation One', '1', <MailOutlined />, undefined, 'Item'),
  getItem('Navigation Two', '2', <CalendarOutlined />, undefined, 'Item'),
  getItem(
    'Navigation Two',
    'sub1',
    <AppstoreOutlined />,
    [
      getItem('Option 3', '3', undefined, undefined, 'Item'),
      getItem('Option 4', '4', undefined, undefined, 'Item'),
      getItem(
        'Submenu',
        'sub1-2',
        null,
        [
          getItem('Option 5', '5', undefined, undefined, 'Item'),
          getItem('Option 6', '6', undefined, undefined, 'Item'),
        ],
        'SubMenu',
      ),
    ],
    'SubMenu',
  ),
  getItem(
    'Navigation Three',
    'sub2',
    <SettingOutlined />,
    [
      getItem('Option 7', '7', undefined, undefined, 'Item'),
      getItem('Option 8', '8', undefined, undefined, 'Item'),
      getItem('Option 9', '9', undefined, undefined, 'Item'),
      getItem('Option 10', '10', undefined, undefined, 'Item'),
    ],
    'SubMenu',
  ),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
    undefined,
    'Item',
  ),
];

const App: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState('light');

  const changeMode = (value: boolean) => {
    setMode(value ? 'inline' : 'vertical');
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'light' : 'dark');
  };

  return (
    <>
      <Switch onClick={changeMode as any} /> Change Mode
      <Divider type="vertical" />
      <Switch onClick={changeTheme as any} /> Change Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};

export default App;
