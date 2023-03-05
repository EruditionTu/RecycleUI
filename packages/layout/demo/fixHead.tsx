import React from 'react';
import Layout from '..';
import Breadcrumb from '../../../packages/breadcrumb';
import Menu from '../../../packages/menu';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout>
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div
        style={{
          float: 'left',
          width: '120px',
          height: '31px',
          margin: `16px 24px 16px 0`,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          type: 'Item',
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380, backgroundColor: '#fff' }}
      >
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Recycle UI ©2022 Created by Berwin</Footer>
  </Layout>
);

export default App;
