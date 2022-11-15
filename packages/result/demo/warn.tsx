import React from 'react';
import Result from '@/packages/result';
import Button from '@/packages/button';
import '../style';
import '@/packages/button/style';

export default () => {
  return (
    <Result
      status="warn"
      title="There are some problems with your operation."
      extra={<Button key="console">Go Console</Button>}
    />
  );
};
