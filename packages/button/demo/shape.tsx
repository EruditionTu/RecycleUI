import React, { useState } from 'react';
import type { ButtonShape } from '..';
import Button from '..';
import '../style';

const App: React.FC = () => {
  const [shape, setShape] = useState<ButtonShape>('round');
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
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
      <div>
        <Button onClick={() => setShape('rect')}>Rect（default）</Button>
        <Button
          onClick={() => {
            setShape('round');
          }}
        >
          Round
        </Button>
        <Button onClick={() => setShape('circle')}>Circle</Button>
        <Button onClick={() => setLoading(!loading)}>Start Loading</Button>
        <Button onClick={() => setDisabled(!disabled)}>Start Disabled</Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>routine：</p>
        <Button type="solid" purpose="routine" shape={shape} loading={loading} disabled={disabled}>
          Solid
        </Button>
        <Button type="transparent" shape={shape} loading={loading} disabled={disabled}>
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>danger：</p>
        <Button type="solid" purpose="danger" shape={shape} loading={loading} disabled={disabled}>
          Solid
        </Button>
        <Button
          type="transparent"
          purpose="danger"
          shape={shape}
          loading={loading}
          disabled={disabled}
        >
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>info：</p>
        <Button type="solid" purpose="info" shape={shape} loading={loading} disabled={disabled}>
          Solid
        </Button>
        <Button
          type="transparent"
          purpose="info"
          shape={shape}
          loading={loading}
          disabled={disabled}
        >
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>warn：</p>
        <Button type="solid" purpose="warn" shape={shape} loading={loading} disabled={disabled}>
          Solid
        </Button>
        <Button
          type="transparent"
          purpose="warn"
          shape={shape}
          loading={loading}
          disabled={disabled}
        >
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>circle:</p>
        <Button type="solid" purpose="warn" shape="circle" loading={loading} disabled={disabled}>
          S
        </Button>
        <Button
          type="transparent"
          purpose="warn"
          shape="circle"
          loading={loading}
          disabled={disabled}
        >
          T
        </Button>
      </div>
    </>
  );
};

export default App;
