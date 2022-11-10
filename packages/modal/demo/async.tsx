import React, { useState } from 'react';
import Button from '../../button';
import Modal from '..';
import '../../button/style';
import '../style';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const hiddenModal = () => {
    setVisible(false);
  };
  const asyncHiddenModal = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 5000);
  };
  return (
    <>
      <Button onClick={showModal}>Show Modal</Button>
      <Modal
        visible={visible}
        title="Title"
        onOk={asyncHiddenModal}
        onCancel={hiddenModal}
        okButtonProps={{
          loading,
        }}
      >
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
        <p>The Modal Basic Usage....</p>
      </Modal>
    </>
  );
};
