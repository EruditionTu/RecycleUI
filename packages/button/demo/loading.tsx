import React, { useState } from 'react';
import Button from '..';

export default () => {
  const [loading, setLoading] = useState(false);
  const click = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <Button onClick={click}>Start loading</Button>
      </div>
      <Button
        type="solid"
        loading={loading}
        onClick={() => {
          alert('hello world');
        }}
      >
        Solid
      </Button>
      <Button type="solid" purpose="danger" loading={loading}>
        Solid
      </Button>
      <Button type="solid" purpose="info" loading={loading}>
        Solid
      </Button>
      <Button type="solid" purpose="warn" loading={loading}>
        Solid
      </Button>
      <Button
        type="transparent"
        loading={loading}
        onClick={() => {
          alert('hello world');
        }}
      >
        Transparent
      </Button>
      <Button type="transparent" purpose="danger" loading={loading}>
        Transparent
      </Button>
      <Button type="transparent" purpose="info" loading={loading}>
        Transparent
      </Button>
      <Button type="transparent" purpose="warn" loading={loading}>
        Transparent
      </Button>
      <Button
        type="link"
        loading
        onClick={() => {
          alert('hello world');
        }}
      >
        Link
      </Button>
      <Button
        type="text"
        loading
        onClick={() => {
          alert('hello world');
        }}
      >
        Text
      </Button>
    </>
  );
};
