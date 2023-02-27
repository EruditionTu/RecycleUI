import React from 'react';
import Steps from '..';
import '../style';

export default function Demo() {
  return (
    <Steps current={1} style={{ padding: '20px 0' }}>
      <Steps.Step title="步骤一" />
      <Steps.Step title="步骤二" />
      <Steps.Step title="步骤三" />
      <Steps.Step title="步骤四" />
    </Steps>
  );
}
