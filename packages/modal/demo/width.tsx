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
  return (
    <>
      <Button onClick={showModal}>Show Modal</Button>
      <Modal
        contentWidth={1000}
        visible={visible}
        title="Title"
        onOk={hiddenModal}
        onCancel={hiddenModal}
      >
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
      </Modal>
    </>
  );
};
