import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Button from '../Button';

const { Group } = Button;
export default () => (
  <>
    <Group>
      <Button key={1} shape="circle">
        start
      </Button>
      <Button key={2} shape="round">
        start
      </Button>
      <Button key={3} type="link" shape="rect">
        start
      </Button>
      <Button key={4}>start</Button>
    </Group>
    <Group>
      <Button key={5} icon={<LeftOutlined />} />
      <Button key={6} icon={<RightOutlined />} />
    </Group>
  </>
);
