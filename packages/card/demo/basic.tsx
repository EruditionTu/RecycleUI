import React from 'react';
import Card from '..';
import '../style';

export default () => {
  return (
    <>
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Default size card" size="small" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};
