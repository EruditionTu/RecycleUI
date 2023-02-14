import React, { useState } from 'react';
import Drawer from '..';
import Button from '../../button';
import '../style';
import '../../button/style';

export default () => {
  const [visible, setVisible] = useState(false);
  const [place, setPlace] = useState('right');
  const onClick = (place: string) => {
    setVisible(!visible);
    setPlace(place);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Drawer
        title="抽屉标题"
        icon="information"
        placement={place}
        isOpen={visible}
        footer="页脚，可以放点内容"
        onClose={onClose}
      >
        React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React
        也可以高效地更新渲染界面。
        <br />
        <br />
        以声明式编写UI，可以让你的代码更加可靠，且方便调试。
        <br />
        <br />
        创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
        <br />
        <br />
        无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
        <br />
        <br />
        无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。
        <br />
        <br />
        <b>组件</b>'top', 'right', 'bottom', 'left'
      </Drawer>
      <Button.Group>
        <Button onClick={onClick.bind(this, 'left')}>Left</Button>
        <Button onClick={onClick.bind(this, 'top')}>Top</Button>
        <Button onClick={onClick.bind(this, 'bottom')}>Bottom</Button>
        <Button onClick={onClick.bind(this, 'right')}>Right</Button>
      </Button.Group>
    </div>
  );
};
