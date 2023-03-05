import React from 'react';
import Carousel from '..';
import Button from '../../button';

export default () => {
  const ref = React.useRef<any>();
  const [autoPlay, autoPlaySet] = React.useState(true);

  return (
    <>
      <Carousel
        ref={ref}
        position={2}
        autoPlay={autoPlay}
        afterChange={(current) => console.log('after', current)}
        beforeChange={(current) => console.log('before', current)}
      >
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
      <Button onClick={() => ref.current.gotoSlide(1)}>跳转</Button>
      <Button onClick={() => ref.current.prevSlide()}>上一张</Button>
      <Button onClick={() => ref.current.nextSlide()}>下一张</Button>
      <Button onClick={() => autoPlaySet(!autoPlay)}>{autoPlay ? '暂停' : '开始'}</Button>
    </>
  );
};
