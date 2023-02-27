import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import Avatar from '..';
import '../style';

export default function Demo() {
  return (
    <div>
      <div style={{ paddingBottom: 20 }}>
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
        <Avatar size="mini" icon={<UserOutlined />} />
      </div>
      <div>
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
        <Avatar shape="square" icon={<UserOutlined />} />
        <Avatar shape="square" size="small" icon={<UserOutlined />} />
        <Avatar shape="square" size="mini" icon={<UserOutlined />} />
      </div>
    </div>
  );
}
