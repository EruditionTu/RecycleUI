import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import Layout from '..';
import Breadcrumb from '../../breadcrumb';
import Menu from '../../menu';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  type: 'Item',
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    type: 'SubMenu',
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        type: 'Item',
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div
        style={{
          float: 'left',
          width: '120px',
          height: '31px',
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, width: '100%', borderRadius: '0' }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div style={{ minHeight: '280px', padding: '24px', background: '#fff' }}> Content</div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;
