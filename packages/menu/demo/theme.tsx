import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Switch from '../../switch';
import Menu from '..';
import '../style';
import '../../switch/style';

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

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick = (e: any) => {
    // eslint-disable-next-line no-console
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Switch
        checked={theme !== 'dark'}
        onClick={changeTheme as any}
        checkedChildren="Light"
        unCheckedChildren="Dark"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default App;
