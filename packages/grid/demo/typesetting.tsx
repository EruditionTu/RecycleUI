import React from 'react';
import { Col, Row } from '..';
import Divider from '../../divider';
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
    <Divider align="left">sub-element align left</Divider>
    <Row justify="start" style={commonStyle as any}>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
    </Row>

    <Divider align="left">sub-element align center</Divider>
    <Row justify="center" style={commonStyle as any}>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
    </Row>

    <Divider align="left">sub-element align right</Divider>
    <Row justify="end" style={commonStyle as any}>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
    </Row>

    <Divider align="left">sub-element monospaced arrangement</Divider>
    <Row justify="space-between" style={commonStyle as any}>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
    </Row>

    <Divider align="left">sub-element align full</Divider>
    <Row justify="space-around" style={commonStyle as any}>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
    </Row>

    <Divider align="left">sub-element align evenly</Divider>
    <Row justify="space-evenly" style={commonStyle as any}>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ffbf" />
      </Col>
      <Col span={4}>
        <Inner text="col-4" color="#0092ff" />
      </Col>
    </Row>
  </>
);

export default App;
