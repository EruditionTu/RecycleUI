import React from 'react';
import Steps from '..';
import '../style';

export default () => {
  return (
    <Steps current={1} style={{ padding: '20px 0' }}>
      <Steps.Step
        title="步骤一"
        description="这里是步骤一的说明，可以很长很长哦。这里是步骤一的说明，可以很长很长哦。这里是步骤一的说明，可以很长很长哦。"
      />
      <Steps.Step title="步骤二" description="这里是步骤一的说明，可以很长很长哦。" />
      <Steps.Step title="步骤三" description="这里是步骤一的说明，可以很长很长哦。" />
      <Steps.Step title="步骤四" description="这里是步骤一的说明，可以很长很长哦。" />
    </Steps>
  );
};
