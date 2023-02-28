import React from 'react';
import List from '..';

const data = [
  {
    href: '#/components',
    content: '"X战警新变种人"首曝海报特写诡异人脸',
  },
  {
    target: '_blank',
    href: 'https://uiwjs.github.io/icons/',
    content: '从uiw组件库中抽离出来的，图标字体 uiw-iconfont 发布',
  },
  {
    href: '#/components',
    disabled: true,
    content: '快跑!《侏罗纪世界2》正式预告要来了',
  },
];
const Demo = () => (
  <List
    header={<div>列表头部</div>}
    footer={<div>列表尾部</div>}
    dataSource={data}
    renderItem={(item, index) => {
      return <List.Item {...item}>{item.content}</List.Item>;
    }}
  />
);
export default Demo;
