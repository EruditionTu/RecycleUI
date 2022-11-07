import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Button from '../Button';
import '../style';

const { Group } = Button;
export default () => (
  <>
    <Group>
      <Button shape="circle">start</Button>
      <Button shape="round">start</Button>
      <Button type="link" shape="rect">
        start
      </Button>
      <Button>start</Button>
    </Group>
    <Group>
      <Button icon={<LeftOutlined />}></Button>
      <Button icon={<RightOutlined />}></Button>
    </Group>
  </>
);
