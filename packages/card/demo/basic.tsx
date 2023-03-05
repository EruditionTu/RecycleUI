import React from 'react';
import Card from '..';

export default () => {
  return (
    <>
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <div style={{ height: 30 }} />
      <Card title="Small size card" size="small" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};
