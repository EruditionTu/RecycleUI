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
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <Inner text="Col" color="#0099ff" />
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <Inner text="Col" color="#0099ffbf" />
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <Inner text="Col" color="#0099ff" />
    </Col>
  </Row>
);

export default App;
