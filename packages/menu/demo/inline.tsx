import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Menu from '..';

// type MenuItem = Required<MenuProps>['items'][number];

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
      getItem(
        'Item 1',
        'g1',
        null,
        [
          getItem('Option 1', '1', undefined, undefined, 'Item'),
          getItem('Option 2', '2', undefined, undefined, 'Item'),
        ],
        'Group',
      ),
      getItem(
        'Item 2',
        'g2',
        null,
        [
          getItem('Option 3', '3', undefined, undefined, 'Item'),
          getItem('Option 4', '4', undefined, undefined, 'Item'),
        ],
        'Group',
      ),
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

  { type: 'Divider' },

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

  getItem(
    'Group',
    'grp',
    null,
    [
      getItem('Option 13', '13', undefined, undefined, 'Item'),
      getItem('Option 14', '14', undefined, undefined, 'Item'),
    ],
    'Group',
  ),
];

const App: React.FC = () => {
  const onClick = (e: any) => {
    // eslint-disable-next-line no-console
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;
