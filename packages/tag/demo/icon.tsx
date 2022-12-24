import React from 'react';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import Tag from '..';
import Divider from '../../divider';
import '../../divider/style';
import '../style';

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
  </>
);

export default App;
