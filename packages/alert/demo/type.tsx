import React from 'react';
import Alert from '..';

export default () => (
  <>
    <Alert message="Info Tips" />
    <Alert message="Success Tips" type="success" />
    <Alert message="Error Tips" type="error" />
    <Alert message="Warn Tips" type="warn" />
  </>
);
