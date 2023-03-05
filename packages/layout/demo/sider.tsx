import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import Layout from '..';
import Menu from '../../menu';
import Breadcrumb from '../../breadcrumb';

const { Header, Content, Footer, Sider } = Layout;

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
  getItem('Option 1', '1', <PieChartOutlined />, null, 'Item'),
  getItem('Option 2', '2', <DesktopOutlined />, null, 'Item'),
  getItem(
    'User',
    'sub1',
    <UserOutlined />,
    [
      getItem('Tom', '3', null, null, 'Item'),
      getItem('Bill', '4', null, null, 'Item'),
      getItem('Alex', '5', null, null, 'Item'),
    ],
    'SubMenu',
  ),
  getItem(
    'Team',
    'sub2',
    <TeamOutlined />,
    [getItem('Team 1', '6', null, null, 'Item'), getItem('Team 2', '8', null, null, 'Item')],
    'SubMenu',
  ),
  getItem('Files', '9', <FileOutlined />, null, 'Item'),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          inlineCollapsed={collapsed}
          style={{ width: '100%' }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: '#fff' }}
        />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, backgroundColor: '#fff' }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Recycle UI ©2022 Created by Berwin</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
