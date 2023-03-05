import React from 'react';
import OverlayTrigger from '..';
import Card from '../../card';


const card = (
  <Card hoverable border>
    <strong>Hellow recycle-ui!</strong> Check this info.
    <br />
    展示 12 个方向位置
  </Card>
);

export default () => (
  <OverlayTrigger placement="top" overlay={card}>
    <span>鼠标移动到此处，显示和消失触发事件</span>
  </OverlayTrigger>
);
