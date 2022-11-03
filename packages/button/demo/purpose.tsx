import React from 'react';
import Button from '..';
import '../style';

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
        <Button type="solid" purpose="routine">
          Solid
        </Button>
        <Button type="transparent">Transparent</Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>danger：</p>
        <Button type="solid" purpose="danger">
          Solid
        </Button>
        <Button type="transparent" purpose="danger">
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>info：</p>
        <Button type="solid" purpose="info">
          Solid
        </Button>
        <Button type="transparent" purpose="info">
          Transparent
        </Button>
      </div>
      <div style={rowStyle}>
        <p style={titleStyle}>warn：</p>
        <Button type="solid" purpose="warn">
          Solid
        </Button>
        <Button type="transparent" purpose="warn">
          Transparent
        </Button>
      </div>
    </>
  );
};

export default App;
