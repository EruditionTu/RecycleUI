import React, { useState } from 'react';
import Button from '../../button';
import Modal from '..';
import '../../button/style';
import '../style';

export default () => {
  const [visible, setVisible] = useState(false);
  const [visible_, setVisible_] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const hiddenModal = () => {
    setVisible(false);
  };
  const showModal_ = () => {
    setVisible_(true);
  };
  const hiddenModal_ = () => {
    setVisible_(false);
  };
  return (
    <>
      <Button onClick={showModal_}>Show Modal Without Footer</Button>
      <Button onClick={showModal}>Show Modal</Button>
      <Modal
        visible={visible_}
        title="自定义弹窗"
        onOk={hiddenModal_}
        onCancel={hiddenModal_}
        needFooter={false}
      >
        <p>The Modal Without Footer....</p>
        <p>The Modal Without Footer....</p>
        <p>The Modal Without Footer....</p>
      </Modal>
      <Modal
        visible={visible}
        title="Title"
        onOk={hiddenModal}
        onCancel={hiddenModal}
        footer={<Button>Footer</Button>}
      >
        <h3>With Footer</h3>
      </Modal>
    </>
  );
};
