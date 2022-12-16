import React from 'react';
import OverlayTrigger from '..';
import '../style';

const tooltip = (
  <div style={{ backgroundColor: '#fff', border: '1px solid #333', padding: 10, borderRadius: 3 }}>
    <strong>Hellow uiw!</strong> Check this info.
    <br />
    展示 12 个方向位置
  </div>
);

export default () => (
  <OverlayTrigger placement="top" trigger="click" overlay={tooltip}>
    <span>鼠标移动到此处，点击显示和消失触发事件</span>
  </OverlayTrigger>
);
