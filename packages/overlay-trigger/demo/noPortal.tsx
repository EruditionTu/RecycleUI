import React from 'react';
import OverlayTrigger from '..';
import Card from '../../card';


const card = (
  <Card hoverable border>
    <strong>Hellow uiw!</strong> Check this info.
    <br />
    展示 12 个方向位置
  </Card>
);

class Demo extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <OverlayTrigger
            usePortal={false}
            autoAdjustOverflow
            placement="top"
            trigger="click"
            overlay={card}
          >
            <span>鼠标移动到此处，点击显示和消失触发事件</span>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}
export default Demo;
