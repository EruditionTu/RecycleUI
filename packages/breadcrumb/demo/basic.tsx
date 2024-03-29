import React from 'react';
import Breadcrumb from '..';

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>首页</Breadcrumb.Item>
    <Breadcrumb.Item>活动管理</Breadcrumb.Item>
    <Breadcrumb.Item>活动列表</Breadcrumb.Item>
    <Breadcrumb.Item>活动详情</Breadcrumb.Item>
  </Breadcrumb>
);

export default App;
