import React from 'react';
import Message from '..';
import '../style';
import Button from '../../button';

export default function index1() {
  const message = (val: string) => {
    Message.loading({
      content: val,
      duration: 3000,
    });
    // 调用时请留给message结尾动画0.2s的空档时间
    setTimeout(() => {
      Message.success({ content: 'Update Success' });
    }, 3201);
  };

  return (
    <>
      <Button style={{ marginRight: '20px' }} onClick={() => message('This is an info message!')}>
        Update message
      </Button>
    </>
  );
}
