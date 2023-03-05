import React from 'react';
import Button from '../../button';
import Message from '..';


export default () => {
  return (
    <>
      <>
        <Button
          purpose="routine"
          style={{ marginRight: '20px' }}
          onClick={() => Message.info({ content: 'This is an info message!' })}
        >
          Info
        </Button>
        <Button
          purpose="danger"
          style={{ marginRight: '20px' }}
          onClick={() => Message.error({ content: 'This is an error message!' })}
        >
          Error
        </Button>
        <Button
          purpose="warn"
          style={{ marginRight: '20px' }}
          onClick={() => Message.warn({ content: 'This is an warning message!' })}
        >
          Warning
        </Button>
        <Button
          style={{ background: '#19b42a', marginRight: '20px' }}
          onClick={() => Message.success({ content: 'This is an success message!' })}
        >
          Success
        </Button>
        <Button
          style={{
            background: '#f2f3f5',
            color: '#000000',
            borderColor: '#f2f3f5',
            marginRight: '20px',
          }}
          onClick={() => Message.normal({ content: 'This is an normal message!' })}
        >
          Normal
        </Button>
        <Button
          purpose="warn"
          style={{ marginRight: '20px' }}
          onClick={() => Message.loading({ content: 'This is an loading message!' })}
        >
          Loading
        </Button>
      </>
    </>
  );
};
