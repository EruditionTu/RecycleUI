import React from 'react';
import {
  SettingOutlined,
  StarOutlined,
  LeftOutlined,
  DeleteOutlined,
  DownOutlined,
} from '@ant-design/icons';
import Button from '..';

const App: React.FC = () => {
  const rowStyle = {
    marginTop: '5px',
  };
  const titleStyle = {
    fontWeight: 700,
    fontSize: '14px',
    display: 'inline-block',
  };
  return (
    <>
      <div style={rowStyle}>
        <p style={titleStyle}>routine：</p>
        <Button type="solid" purpose="routine" icon={<SettingOutlined />}>
          Solid
        </Button>
        <Button type="transparent" icon={<SettingOutlined />}>
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>danger：</p>
        <Button type="solid" purpose="danger" icon={<StarOutlined />}>
          Solid
        </Button>
        <Button type="transparent" purpose="danger" icon={<StarOutlined />}>
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>info：</p>
        <Button type="solid" purpose="info" icon={<LeftOutlined />}>
          Solid
        </Button>
        <Button type="transparent" purpose="info" icon={<LeftOutlined />}>
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>warn：</p>
        <Button type="solid" purpose="warn" icon={<DownOutlined />}>
          Solid
        </Button>
        <Button type="transparent" purpose="warn" icon={<DeleteOutlined />}>
          Transparent
        </Button>
      </div>
    </>
  );
};

export default App;
