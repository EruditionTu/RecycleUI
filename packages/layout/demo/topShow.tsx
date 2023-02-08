import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import Layout from '..';
import Menu from '../../menu';
import Breadcrumb from '../../breadcrumb';
import '../style';
import '../../menu/style';
import '../../breadcrumb/style';

const { Header, Content, Footer, Sider } = Layout;

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
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', width: '100%' }}
            items={items2}
          />
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280, backgroundColor: '#fff' }}>
          Content
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Recycle UI ©2022 Created by Berwin</Footer>
  </Layout>
);

export default App;
