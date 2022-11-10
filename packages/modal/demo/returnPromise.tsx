import React from 'react';
import Button from '../../button';
import Modal from '..';
import '../../button/style';
import '../style';

export default () => {
  return (
    <Button
      onClick={() =>
        Modal.confirm({
          title: 'Title',
          content: <h1>Hello world</h1>,
          onOk: () => {
            return new Promise<void>((resolve) => {
              setTimeout(() => {
                resolve();
              }, 5000);
            });
          },
        })
      }
    >
      Show Confirm
    </Button>
  );
};
