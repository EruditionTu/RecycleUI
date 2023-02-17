import React from 'react';
import Carousel from '..';
import '../style';

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <Carousel>
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
      <span style={{ marginLeft: 10 }} />
      <Carousel direction="vertical">
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
    </div>
  );
};
