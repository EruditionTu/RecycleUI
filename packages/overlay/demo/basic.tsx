import React from 'react';
import Button from '../../button';
import Card from '../../card';
import Overlay from '..';
import '../../button/style';
import '../../card/style';
import '../style';

export default function Demo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasBackdrop, setHasBackdrop] = React.useState(true);
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true);
          setHasBackdrop(true);
        }}
      >
        点击弹出内容
      </Button>
      <Button
        onClick={() => {
          setIsOpen(true);
          setHasBackdrop(false);
        }}
      >
        弹出内容没有遮罩层
      </Button>
      <Overlay hasBackdrop={hasBackdrop} open={isOpen} onClose={() => setIsOpen(false)}>
        <Card hoverable border={!hasBackdrop} style={{ width: 500 }}>
          <h3 style={{ margin: 0 }}>基础弹出层 - {String(isOpen)}</h3>
          <div>这是一个基础的弹出层组件，其它弹出层组件基于它来扩展比如 Modal、Alert</div>
          <br />
          <Button purpose="danger" onClick={() => setIsOpen(false)}>
            关闭
          </Button>
        </Card>
      </Overlay>
    </div>
  );
}
