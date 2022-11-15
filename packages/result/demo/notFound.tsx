import React from 'react';
import Result from '@/packages/result';
import Button from '@/packages/button';
import '../style';
import '@/packages/button/style';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button>Back Home</Button>}
    />
  );
};
