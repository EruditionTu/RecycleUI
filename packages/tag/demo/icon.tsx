import React from 'react';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import Tag from '..';
import Divider from '../../divider';


const App: React.FC = () => (
  <>
    <Divider align="left">Without icon</Divider>
    <div>
      <Tag color="green">success</Tag>
      <Tag color="blue">processing</Tag>
      <Tag color="red">error</Tag>
      <Tag color="orange">warning</Tag>
      <Tag color="default">default</Tag>
    </div>
    <Divider align="left">With icon</Divider>
    <div>
      <Tag icon={<CheckCircleOutlined />} color="green" effect="dark">
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="blue" effect="dark">
        processing
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="red" effect="dark">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="orange" effect="dark">
        warning
      </Tag>
      <Tag icon={<ClockCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag>
    </div>
    <Divider align="left">Common icon tags</Divider>
    <div>
      <Tag icon={<TwitterOutlined />} color="#55acee">
        Twitter
      </Tag>
      <Tag icon={<YoutubeOutlined />} color="#cd201f">
        Youtube
      </Tag>
      <Tag icon={<FacebookOutlined />} color="#3b5999">
        Facebook
      </Tag>
      <Tag icon={<LinkedinOutlined />} color="#55acee">
        LinkedIn
      </Tag>
    </div>
  </>
);

export default App;
