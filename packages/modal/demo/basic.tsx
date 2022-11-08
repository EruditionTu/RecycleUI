import React, { useState } from 'react';
import Button from '../../button';
import Modal from '../';
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
        visible={visible}
        title={'Basic Modal'}
        maskClosable={false}
        needFooter={false}
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
