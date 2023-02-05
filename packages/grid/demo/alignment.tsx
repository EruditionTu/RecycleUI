import React from 'react';
import { Col, Row } from '..';
import Divider from '../../divider';
import '../style';
import '../../divider/style';

const DemoBox: React.FC<{ children: React.ReactNode; value: number; color: string }> = (props) => (
  <p
    style={{
      height: `${props.value}px`,
      backgroundColor: props.color,
      color: '#fff',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {props.children}
  </p>
);

const App: React.FC = () => (
  <>
    <Divider align="left">Align Top</Divider>
    <Row justify="center" align="top">
      <Col span={4}>
        <DemoBox value={100} color="#0092ff">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50} color="#0092ffbf">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120} color="#0092ff">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80} color="#0092ffbf">
          col-4
        </DemoBox>
      </Col>
    </Row>

    <Divider align="left">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100} color="#0092ff">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50} color="#0092ffbf">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120} color="#0092ff">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80} color="#0092ffbf">
          col-4
        </DemoBox>
      </Col>
    </Row>

    <Divider align="left">Align Bottom</Divider>
    <Row justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100} color="#0092ff">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50} color="#0092ffbf">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120} color="#0092ff">
          col-4
        </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80} color="#0092ffbf">
          col-4
        </DemoBox>
      </Col>
    </Row>
  </>
);

export default App;
