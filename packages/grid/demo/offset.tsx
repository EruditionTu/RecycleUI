import React from 'react';
import { Col, Row } from '..';
import '../style';
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
      <Col span={8}>
        <Inner text="col-8" color="#0092ff" />
      </Col>
      <Col span={8} offset={8}>
        <Inner text="col-8" color="#0092ff" />
      </Col>
    </Row>
    <Row style={commonStyle as any}>
      <Col span={6} offset={6}>
        <Inner text="col-6 col-offset-6" color="#0092ff" />
      </Col>
      <Col span={6} offset={6}>
        <Inner text="col-6 col-offset-6" color="#0092ff" />
      </Col>
    </Row>
    <Row style={commonStyle as any}>
      <Col span={12} offset={6}>
        <Inner text="col-12 col-offset-6" color="#0092ff" />
      </Col>
    </Row>
  </>
);

export default App;
