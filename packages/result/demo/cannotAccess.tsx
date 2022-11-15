import React from 'react';
import Result from '@/packages/result';
import Button from '@/packages/button';
import '../style';
import '@/packages/button/style';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button>Back Home</Button>}
    />
  );
};
