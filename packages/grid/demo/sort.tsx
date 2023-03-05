import React from 'react';
import Divider from '../../divider';
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
    <Divider align="left">Normal</Divider>
    <Row style={commonStyle as any}>
      <Col span={6} order={4}>
        <Inner text="1 col-order-4" color="#0092ff" />
      </Col>
      <Col span={6} order={3}>
        <Inner text="2 col-order-3" color="#0092ffbf" />
      </Col>
      <Col span={6} order={2}>
        <Inner text="3 col-order-2" color="#0092ff" />
      </Col>
      <Col span={6} order={1}>
        <Inner text="4 col-order-1" color="#0092ffbf" />
      </Col>
    </Row>
    <Divider align="left">Responsive</Divider>
    <Row style={commonStyle as any}>
      <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <Inner text="1 col-order-responsive" color="red" />
      </Col>
      <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        <Inner text="2 col-order-responsive" color="#0092ffbf" />
      </Col>
      <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        <Inner text="3 col-order-responsive" color="green" />
      </Col>
      <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
        <Inner text="4 col-order-responsive" color="#0092ff" />
      </Col>
    </Row>
  </>
);

export default App;
