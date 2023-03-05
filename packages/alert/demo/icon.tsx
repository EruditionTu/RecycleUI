import React from 'react';
import Alert from '..';

export default () => (
  <>
    <Alert message="Info Tips" showIcon />
    <Alert message="Success Tips" type="success" showIcon />
    <Alert message="Error Tips" type="error" showIcon />
    <Alert message="Warn Tips" type="warn" showIcon showCloseIcon />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warn"
      showIcon
      showCloseIcon
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </>
);
