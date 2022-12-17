import React from 'react';
import Button from '../../../button';
import Card from '../../../card';
import Overlay from '../..';
import '../../../button/style';
import '../../../card/style';
import './animation.less';
import '../../style';

export default function Demo() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        点击弹出内容
      </Button>
      <Overlay
        prefixCls="animation-flipX"
        transitionName="animation-flipX"
        timeout={1000}
        open={isOpen}
        onClosed={() => {
          setIsOpen(false);
        }}
      >
        <Card hoverable style={{ width: 500 }}>
          <h3 style={{ marginTop: 0 }}>基础弹出层</h3>
          <p>
            Portals 是 react 16
            提供的官方解决方案，使得组件可以脱离父组件层级挂载在DOM树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面，默认情况生成到跟节点的外面，通过将
            usePortal 设置为 false 将对话框生成在父组件层级挂载的DOM树中。
          </p>
          <Button
            purpose="danger"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            关闭
          </Button>
        </Card>
      </Overlay>
    </div>
  );
}
