import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import Result from '@/packages/result';
import Button from '@/packages/button';
import '../style';
import '@/packages/button/style';

export default () => {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button>Next</Button>}
    />
  );
};
