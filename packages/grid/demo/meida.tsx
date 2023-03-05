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
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      <Inner text="Col" color="#0092ff" />
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      <Inner text="Col" color="#0092ffbf" />
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      <Inner text="Col" color="#0092ff" />
    </Col>
  </Row>
);

export default App;
