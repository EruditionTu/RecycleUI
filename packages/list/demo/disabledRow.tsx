import React from 'react';
import List from '..';

const data = [
  {
    content: '"X战警新变种人"首曝海报特写诡异人脸',
  },
  {
    content: '六大变五大？传迪士尼600亿收购福斯',
  },
  {
    disabled: true,
    content: '快跑!《侏罗纪世界2》正式预告要来了',
  },
];
class Demo extends React.Component {
  onClick(item: any, index: number, e: any) {
    e.stopPropagation();
    console.log('item', item, e);
  }

  render() {
    return (
      <List
        header={<div>列表头部</div>}
        footer={<div>列表尾部</div>}
        dataSource={data}
        renderItem={(item: any, index: number) => {
          return (
            <List.Item onClick={this.onClick.bind(this, item, index)} disabled={item.disabled}>
              {item.content}
            </List.Item>
          );
        }}
      />
    );
  }
}
export default Demo;
