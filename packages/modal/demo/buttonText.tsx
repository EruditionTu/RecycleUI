import React, { useState } from 'react';
import Button from '../../button';
import Modal from '..';


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
        visible={visible}
        title="Title"
        onOk={hiddenModal}
        onCancel={hiddenModal}
        okText="OK"
        cancelText="Cancel"
      >
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
      </Modal>
    </>
  );
};
