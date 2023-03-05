import React from 'react';
import { Col, Row } from '../../grid';
import Select from '..';


const { Group, Option } = Select;

export default () => {
  return (
    <Row>
      <Col>
        <Select defaultValue="w">
          <Option value="w">Choose an item...</Option>
          <Group label="Group 1">
            <Option value="1">One</Option>
            <Option value="2">Two</Option>
          </Group>
          <Group label="Group 2">
            <Option value="3">Three</Option>
            <Option value="4">Four</Option>
          </Group>
        </Select>
      </Col>
    </Row>
  );
};
