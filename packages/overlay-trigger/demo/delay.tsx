import React from 'react';
import OverlayTrigger from '..';
import Card from '../../card';
import '../../card';
import '../style';

const card = (
  <Card hoverable border>
    <strong>Hellow uiw!</strong> Check this info.
    <br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <OverlayTrigger delay={{ show: 0, hide: 4000 }} placement="top" overlay={card}>
    <span>鼠标移动到此处，显示和消失触发事件，延迟 `4s` 消失</span>
  </OverlayTrigger>
);
export default Demo;
