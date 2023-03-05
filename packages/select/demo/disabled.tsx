import React from 'react';
import { Col, Row } from '../../grid';
import Select from '..';


export default function Demo() {
  return (
    <Row>
      <Col>
        <Select disabled defaultValue="3">
          <Select.Option value="w">Choose an item...</Select.Option>
          <Select.Option value="1">One</Select.Option>
          <Select.Option value="2">Two</Select.Option>
          <Select.Option value="3">Three</Select.Option>
          <Select.Option value="4">Four</Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
