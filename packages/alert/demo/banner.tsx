import React from 'react';
import Alert from '..';
import '../style';

export default () => (
  <>
    <Alert message="Info Tips" banner />
    <Alert message="Success Tips" type="success" banner showIcon />
    <Alert message="Error Tips" type="error" banner showIcon />
    <Alert message="Warn Tips" type="warn" banner />
  </>
);
