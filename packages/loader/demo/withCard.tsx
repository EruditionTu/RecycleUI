import React from 'react';
import Loader from '..';
import Card from '../../card';

export default function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Card
        title="图标与文字一行显示"
        extra={<a href="#">更多</a>}
        style={{ minWidth: 230, marginRight: 10 }}
      >
        <Loader color="red" tip="加载中..." style={{ width: '100%' }}>
          <div>
            卡片内容
            <br />
            卡片内容
            <br />
            卡片内容
            <br />
          </div>
        </Loader>
      </Card>
      <Card
        title="图标与文字垂直显示"
        extra={<a href="#">更多</a>}
        style={{ minWidth: 230, marginRight: 10 }}
      >
        <Loader tip="loading..." vertical style={{ width: '100%' }}>
          <div>
            卡片内容
            <br />
            卡片内容
            <br />
            卡片内容
            <br />
          </div>
        </Loader>
      </Card>
      <Card title="自定义背景颜色" extra={<a href="#">更多</a>} style={{ minWidth: 230 }}>
        <Loader
          bgColor="rgba(0, 0, 0, 0.4)"
          color="#fff"
          tip="loading..."
          vertical
          style={{ width: '100%' }}
        >
          <div>
            卡片内容
            <br />
            卡片内容
            <br />
            卡片内容
            <br />
          </div>
        </Loader>
      </Card>
    </div>
  );
}
