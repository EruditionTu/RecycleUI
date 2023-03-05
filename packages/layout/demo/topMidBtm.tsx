import React from 'react';
import Layout from '..';
import Breadcrumb from '../../breadcrumb';
import Menu from '../../menu';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout className="layout">
    <Header>
      <div
        style={{
          float: 'left',
          width: '120px',
          height: '31px',
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            type: 'Item',
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ minHeight: '280px', padding: '24px', background: '#fff' }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Recycle UI ©2022 Created by Berwin</Footer>
  </Layout>
);

export default App;
