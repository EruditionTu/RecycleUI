import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from 'react';
import Layout from '..';
import Menu from '../../menu';
import '../style';
import '../../menu/style';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          height: '32px',
          margin: '16px',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <Menu
        theme="dark"
        mode="inline"
        style={{ width: '100%' }}
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            type: 'Item',
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }),
        )}
      />
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0, backgroundColor: '#fff' }}
      />
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, backgroundColor: '#fff' }}
        >
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Recycle UI ©2022 Created by Berwin</Footer>
    </Layout>
  </Layout>
);

export default App;
