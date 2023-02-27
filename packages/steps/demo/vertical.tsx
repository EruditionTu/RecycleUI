import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import Steps from '..';
import { Row, Col } from '../../grid';
import '../../grid/style';
import '../style';

export default function Demo() {
  return (
    <Row gutter={20}>
      <Col>
        <Steps current={1} direction="vertical" style={{ padding: '20px 0' }}>
          <Steps.Step title="已完成" description="这里是该步骤的描述信息" />
          <Steps.Step title="进行中" description="这里是该步骤的描述信息" />
          <Steps.Step status="error" title="待进行" description="这里是该步骤的描述信息" />
          <Steps.Step title="待进行" description="这里是该步骤的描述信息" />
        </Steps>
      </Col>
      <Col>
        <Steps
          direction="vertical"
          progressDot
          status="error"
          current={2}
          style={{ padding: '20px 0' }}
        >
          <Steps.Step title="步骤一" description="这里是步骤一的说明，可以很长很长哦。" />
          <Steps.Step title="步骤二" description="这里是步骤一的说明，可以很长很长哦。" />
          <Steps.Step title="步骤三" description="这里是步骤一的说明，可以很长很长哦。" />
          <Steps.Step
            icon={<UserOutlined />}
            title="步骤四"
            description="这里是步骤一的说明，可以很长很长哦。"
          />
        </Steps>
      </Col>
    </Row>
  );
}
