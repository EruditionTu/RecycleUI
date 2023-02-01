import React from 'react';
import Skeleton from '..';
import Divider from '../../divider';
import '../../divider/style';
import '../style';

const App: React.FC = () => {
  return (
    <>
      <div style={{ display: 'flex', width: '20%' }}>
        <h3>active：</h3>
        <Skeleton.Avatar />
        <div style={{ width: '30px' }} />
        <Skeleton.Avatar active />
      </div>
      <Divider />
      <div style={{ display: 'flex', width: '20%' }}>
        <h3>shape：</h3>
        <Skeleton.Avatar shape="circle" />
        <div style={{ width: '30px' }} />
        <Skeleton.Avatar shape="square" />
      </div>
      <Divider />
      <div style={{ display: 'flex', width: '30%' }}>
        <h3>size：</h3>
        <Skeleton.Avatar size="large" />
        <div style={{ width: '30px' }} />
        <Skeleton.Avatar size="default" />
        <div style={{ width: '30px' }} />
        <Skeleton.Avatar size="small" />
      </div>
    </>
  );
};

export default App;
