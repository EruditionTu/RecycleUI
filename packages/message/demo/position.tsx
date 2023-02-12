import React from 'react';
import Message from '..';
import '../style';
import Button from '../../button';
import '../../button/style';

export default function index1() {
  const message = (val: string, position: 'top' | 'bottom') => {
    Message.info({
      content: val,
      duration: 3000,
      position,
    });
  };

  return (
    <>
      <Button
        style={{ marginRight: '20px' }}
        onClick={() => message('This is a message in top!', 'top')}
      >
        top
      </Button>
      <Button onClick={() => message('This is a message in top!', 'bottom')}>bottom</Button>
    </>
  );
}
