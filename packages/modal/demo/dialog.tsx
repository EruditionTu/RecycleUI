import React from 'react';
import Button from '../../button';
import Modal from '..';
import '../../button/style';
import '../style';

export default () => {
  const showConfirm = () => {
    Modal.confirm({
      title: 'title',
      content: <h1>Hello World!</h1>,
    });
  };
  const showError = () => {
    Modal.error({
      title: 'title',
      content: <h1>Hello World!</h1>,
    });
  };
  const showSuccess = () => {
    Modal.success({
      title: 'title',
      content: <h1>Hello World!</h1>,
    });
  };
  const showWarn = () => {
    Modal.warning({
      title: 'title',
      content: <h1>Hello World!</h1>,
    });
  };
  const showInfo = () => {
    Modal.info({
      title: 'title',
      content: <h1>Hello World!</h1>,
    });
  };
  return (
    <>
      <Button onClick={showConfirm}>Show Congirm Modal</Button>
      <Button purpose="danger" onClick={showError}>
        Show Error Modal
      </Button>
      <Button purpose="info" onClick={showSuccess}>
        Show Success Modal
      </Button>
      <Button purpose="warn" onClick={showWarn}>
        Show Warn Modal
      </Button>
      <Button onClick={showInfo}>Show Info Modal</Button>
    </>
  );
};
