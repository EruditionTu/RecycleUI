import React from 'react';
import { Col, Row } from '..';
import Inner from './inner';

const commonStyle = {
  minHeight: '30px',
  marginTop: '8px',
  marginBottom: '8px',
  color: '#fff',
  textAlign: 'center',
  borderRadius: 0,
};

const App: React.FC = () => (
  <>
    <Row style={commonStyle as any}>
      <Col span={24}>
        <Inner color="#0092ff" text="col" />
      </Col>
    </Row>
    <Row style={commonStyle as any}>
      <Col span={12}>
        <Inner color="#0092ffbf" text="col-12" />
      </Col>
      <Col span={12}>
        <Inner color="#0092ff" text="col-12" />
      </Col>
    </Row>
    <Row style={commonStyle as any}>
      <Col span={8}>
        <Inner color="#0092ffbf" text="col-8" />
      </Col>
      <Col span={8}>
        <Inner color="#0092ff" text="col-8" />
      </Col>
      <Col span={8}>
        <Inner color="#0092ffbf" text="col-8" />
      </Col>
    </Row>
    <Row style={commonStyle as any}>
      <Col span={6}>
        <Inner color="#0092ffbf" text="col-6" />
      </Col>
      <Col span={6}>
        <Inner color="#0092ff" text="col-6" />
      </Col>
      <Col span={6}>
        <Inner color="#0092ffbf" text="col-6" />
      </Col>
      <Col span={6}>
        <Inner color="#0092ff" text="col-6" />
      </Col>
    </Row>
  </>
);

export default App;
