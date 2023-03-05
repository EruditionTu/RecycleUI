import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import Avatar from '..';

export default function Demo() {
  return (
    <div>
      <Avatar icon={<UserOutlined />} />
      <Avatar>U</Avatar>
      <Avatar src="https://avatars.githubusercontent.com/u/62472294?s=96&v=4" />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </div>
  );
}
