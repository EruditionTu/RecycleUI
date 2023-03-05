import React from 'react';
import { Col, Row } from '..';
import Inner from './inner';
import Divider from '../../divider';

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
    <Divider align="left">Percentage columns</Divider>
    <Row style={commonStyle as any}>
      <Col flex={2}>
        <Inner text="2 / 5" color="#0092ff" />
      </Col>
      <Col flex={3}>
        <Inner text="3 / 5" color="#0092ffbf" />
      </Col>
    </Row>
    <Divider align="left">Fill rest</Divider>
    <Row style={commonStyle as any}>
      <Col flex="100px">
        <Inner text="100px" color="#0092ff" />
      </Col>
      <Col flex="auto">
        <Inner text="Fill Rest" color="#0092ffbf" />
      </Col>
    </Row>
    <Divider align="left">Raw flex style</Divider>
    <Row style={commonStyle as any}>
      <Col flex="1 1 200px">
        <Inner text="1 1 200px" color="#0092ff" />
      </Col>
      <Col flex="0 1 300px">
        <Inner text="0 1 300px" color="#0092ffbf" />
      </Col>
    </Row>

    <Row wrap={false} style={commonStyle as any}>
      <Col flex="none">
        <Inner color="#0092ff">
          <div style={{ padding: '0 16px' }}>none</div>
        </Inner>
      </Col>
      <Col flex="auto">
        <Inner text="auto with no-wrap" color="#0092ffbf" />
      </Col>
    </Row>
  </>
);

export default App;
