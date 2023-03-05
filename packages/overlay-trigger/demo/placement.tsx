import React from 'react';
import OverlayTrigger from '..';
import Card from '../../card';
import Button from '../../button';


/**
 * tsCssproperty会报错误，所以要定义类型
 */
const btnStl: Record<string, string | number> = { position: 'relative' };

const card = (
  <Card hoverable border style={{ background: 'red' }}>
    <strong>Hellow uiw!</strong> Check this info.
    <br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <div>
    <div style={{ position: 'relative' }}>
      <OverlayTrigger placement="topLeft" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>TL</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>Top</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="topRight" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>TR</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="leftTop" overlay={card}>
        <Button style={{ ...btnStl }}>LT</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightTop" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>RT</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="left" overlay={card}>
        <Button style={{ ...btnStl }}>Left</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="right" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>Right</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="leftBottom" overlay={card}>
        <Button style={{ ...btnStl }}>LB</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightBottom" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>RB</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="bottomLeft" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>BL</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottomRight" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>BR</Button>
      </OverlayTrigger>
    </div>
  </div>
);
export default Demo;
