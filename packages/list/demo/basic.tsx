import React from 'react';
import List from '..';

const data = [
  '"X战警新变种人"首曝海报特写诡异人脸',
  '六大变五大？传迪士尼600亿收购福斯',
  '快跑!《侏罗纪世界2》正式预告要来了',
];
const Demo = () => (
  <div>
    <List header={<div>列表头部</div>} footer={<div>列表尾部</div>}>
      <List.Item>"X战警新变种人"首曝海报特写诡异人脸</List.Item>
      <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
      <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>
    </List>
    <h4 style={{ margin: '16px 10px' }}>默认尺寸，没有头部和尾部</h4>
    <List dataSource={data} noHover renderItem={(item) => <List.Item>{item}</List.Item>} />
    <h4 style={{ margin: '16px 10px' }}>小尺寸</h4>
    <List
      size="small"
      header={<div>列表头部</div>}
      footer={<div>列表尾部</div>}
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <h4 style={{ margin: '16px 10px' }}>大尺寸</h4>
    <List
      size="large"
      header={<div>列表头部</div>}
      footer={<div>列表尾部</div>}
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </div>
);
export default Demo;
