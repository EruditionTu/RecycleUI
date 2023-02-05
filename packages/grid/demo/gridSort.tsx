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
  <Row style={commonStyle as any}>
    <Col span={18} push={6}>
      <Inner color="#0092ffbf" text="col-18 col-push-6" />
    </Col>
    <Col span={6} pull={18}>
      <Inner color="#0092ff" text="col-6 col-pull-18" />
    </Col>
  </Row>
);

export default App;
