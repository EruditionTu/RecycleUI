import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import Switch from '../../switch';
import Menu from '..';


function getItem(
  label: React.ReactNode,
  key: React.Key | null,
  icon: React.ReactNode,
  children: any,
  type: string,
  theme?: 'light' | 'dark' | {},
) {
  return {
    type,
    key,
    icon,
    children,
    label,
    theme,
  };
}

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  const items = [
    getItem(
      'Navigation One',
      'sub1',
      <MailOutlined />,
      [
        getItem('Option 1', '1', undefined, undefined, 'Item'),
        getItem('Option 2', '2', undefined, undefined, 'Item'),
        getItem('Option 3', '3', undefined, undefined, 'Item'),
      ],
      'SubMenu',
      theme,
    ),
    getItem('Option 5', '5', undefined, undefined, 'Item'),
    getItem('Option 6', '6', undefined, undefined, 'Item'),
  ];

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
        onClick={onClick}
        style={{ width: 256 }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
      />
    </>
  );
};

export default App;
