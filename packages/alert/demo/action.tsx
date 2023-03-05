import React from 'react';
import Alert from '..';
import Button from '../../button';

export default () => (
  <>
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      action={<Button type="text">UNDO</Button>}
      showCloseIcon
    />
    <Alert
      message="Error Text"
      showIcon
      description="Error Description Error Description Error Description Error Description"
      type="error"
      action={<Button purpose="danger">Detail</Button>}
    />
    <Alert
      message="Warning Text"
      type="warn"
      action={<Button type="text">Done</Button>}
      showCloseIcon
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <>
          <Button>Accept</Button>
          <Button purpose="danger" type="text">
            Decline
          </Button>
        </>
      }
      showCloseIcon
    />
  </>
);
