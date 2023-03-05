import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import Menu from '..';

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
    type: 'Item',
  },
  {
    type: 'Item',
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    type: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'Group',
        label: 'Item 1',
        children: [
          {
            type: 'Item',
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            type: 'Item',
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'Group',
        label: 'Item 2',
        children: [
          {
            type: 'Item',
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            type: 'Item',
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    type: 'Item',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e: any) => {
    // eslint-disable-next-line no-console
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      //   onSelect={(e) => {
      //     console.log(e);
      //   }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default App;
