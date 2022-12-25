import React from 'react';
import { AndroidOutlined, GithubOutlined } from '@ant-design/icons';
import Rate from '..';
import Divider from '../../divider';
import '../../divider/style';
import '../style';

export default function Demo() {
  return (
    <div>
      <Rate value={3} />
      <Divider />
      <Rate allowHalf character={<AndroidOutlined />} value={2.5} />
      <Divider />
      <Rate color="#393E48" character="☆" value={4} />
      <Divider />
      <Rate color="#28a745" character={<GithubOutlined />} value={3} />
      <Divider />
      <Rate color="#dc3545" character="✿" value={4} />
    </div>
  );
}
