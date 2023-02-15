import React from 'react';
import { Col, Row } from '../../grid';
import Select from '..';
import '../style';
import '../../grid/style';

const rowSty = { marginBottom: 10 };

export default function Demo() {
  return (
    <div>
      <Row gutter={10}>
        <Col>
          <Select size="small" disabled defaultValue="3" style={rowSty}>
            <Select.Option value="w">Choose an item...</Select.Option>
            <Select.Option value="1">One</Select.Option>
            <Select.Option value="2">Two</Select.Option>
            <Select.Option value="3">Three</Select.Option>
            <Select.Option value="4">Four</Select.Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={10} style={rowSty}>
        <Col>
          <Select defaultValue="3">
            <Select.Option value="w">Choose an item...</Select.Option>
            <Select.Option value="1">One</Select.Option>
            <Select.Option value="2">Two</Select.Option>
            <Select.Option value="3">Three</Select.Option>
            <Select.Option value="4">Four</Select.Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col>
          <Select size="large" defaultValue="3">
            <Select.Option value="w">Choose an item...</Select.Option>
            <Select.Option value="1">One</Select.Option>
            <Select.Option value="2">Two</Select.Option>
            <Select.Option value="3">Three</Select.Option>
            <Select.Option value="4">Four</Select.Option>
          </Select>
        </Col>
      </Row>
    </div>
  );
}
