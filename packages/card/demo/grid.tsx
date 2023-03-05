import React from 'react';
import Card from '..';
import { Col, Row } from '../../grid';

const App: React.FC = () => (
  <div style={{ backgroundColor: '#ececec', padding: 30 }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" border={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" border={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" border={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);

export default App;
