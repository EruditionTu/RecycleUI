import React from 'react';
import List from '..';

const Demo = () => (
  <List size="small" header={<div>列表头部</div>} footer={<div>列表尾部</div>}>
    <List.Item active>"X战警新变种人"首曝海报特写诡异人脸</List.Item>
    <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
    <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>
  </List>
);
export default Demo;
