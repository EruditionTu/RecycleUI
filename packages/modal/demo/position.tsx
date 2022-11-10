import React, { useState } from 'react';
import Button from '../../button';
import Modal from '..';
import '../../button/style';
import '../style';

export default () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const hiddenModal = () => {
    setVisible(false);
  };
  const [visible_, setVisible_] = useState(false);
  const showModal_ = () => {
    setVisible_(true);
  };
  const hiddenModal_ = () => {
    setVisible_(false);
  };
  return (
    <>
      <Button onClick={showModal}>Show Center Modal</Button>
      <Button onClick={showModal_}>SHow Modal</Button>
      <Modal visible={visible} title="Title" centered onOk={hiddenModal} onCancel={hiddenModal}>
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
      </Modal>
      <Modal
        visible={visible_}
        title="Title"
        contentStyle={{ top: '400px' }}
        onOk={hiddenModal_}
        onCancel={hiddenModal_}
      >
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
      </Modal>
    </>
  );
};
