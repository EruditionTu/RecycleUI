import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import Layout from '..';
import Menu from '../../menu';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <Menu
          style={{ width: '100%' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          inlineCollapsed={collapsed}
          items={[
            {
              type: 'Item',
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              type: 'Item',
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              type: 'Item',
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#fff' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundColor: '#fff',
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
