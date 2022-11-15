import React from 'react';
import Result from '@/packages/result';
import Button from '@/packages/button';
import '../style';
import '@/packages/button/style';

export default () => {
  return (
    <Result
      title="Your operation has been executed"
      extra={<Button key="console">Go Console</Button>}
    />
  );
};
