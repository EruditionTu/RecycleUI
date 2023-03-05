import React from 'react';
import Carousel from '..';

export default () => {
  return (
    <Carousel palyTime={1000} scrollTime={500}>
      <div style={{ height: '100%', background: '#1EABCD' }}>
        <span>1</span>
      </div>
      <div style={{ height: '100%', background: '#393b46' }}>
        <span>2</span>
      </div>
      <div style={{ height: '100%', background: '#008EF0' }}>
        <span>3</span>
      </div>
      <div style={{ height: '100%', background: '#393E48' }}>
        <span>4</span>
      </div>
    </Carousel>
  );
};
