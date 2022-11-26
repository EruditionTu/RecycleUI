import React from 'react';
import Alert from '..';
import '../style';

export default () => (
  <>
    <Alert message="Info Tips" type="error" showCloseIcon />
    <Alert
      message="Warn Tips"
      type="warn"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      showCloseIcon
    />
  </>
);
