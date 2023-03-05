import React from 'react';
import List from '..';

const data = [
  '"X战警新变种人"首曝海报特写诡异人脸',
  '六大变五大？传迪士尼600亿收购福斯',
  <span>快跑!《侏罗纪世界2》正式预告要来了</span>,
];
const Demo = () => (
  <List
    header={<div>列表头部</div>}
    footer={<div>列表尾部</div>}
    dataSource={data}
    renderItem={(item) => {
      return <List.Item>{item}</List.Item>;
    }}
  />
);
export default Demo;
