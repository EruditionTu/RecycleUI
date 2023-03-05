import React from 'react';
import Message from '..';
import '../style';
import Button from '../../button';

export default function index1() {
  const message = (val: string) => {
    Message.info({
      content: val,
      duration: 5000,
      clearable: true,
    });
  };

  return (
    <>
      <Button style={{ marginRight: '20px' }} onClick={() => message('This is an info message!')}>
        Update message
      </Button>
    </>
  );
}
