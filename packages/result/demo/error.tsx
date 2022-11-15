import React from 'react';
import Result from '@/packages/result';
import Button from '@/packages/button';
import '../style';
import '@/packages/button/style';

export default () => {
  return (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <Button key="console">Go Console</Button>,
        <Button key="buy" type="transparent">
          Buy Again
        </Button>,
      ]}
    >
      <h1>ERROE！SORRY！</h1>
    </Result>
  );
};
