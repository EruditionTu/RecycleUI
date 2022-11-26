import React from 'react';
import Alert from '..';
import '../style';

export default () => (
  <>
    <Alert message="Info Tips" showIcon />
    <Alert message="Success Tips" type="success" showIcon />
    <Alert message="Error Tips" type="error" showIcon />
    <Alert message="Warn Tips" type="warn" showIcon showCloseIcon />
  </>
);
