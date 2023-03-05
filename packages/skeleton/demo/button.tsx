import React from 'react';
import Skeleton from '..';
import Divider from '../../divider';


const App: React.FC = () => (
  <>
    <div style={{ display: 'flex', width: '50%' }}>
      <h3>active：</h3>
      <Skeleton.Button />
      <div style={{ width: '30px' }} />
      <Skeleton.Button active />
    </div>
    <Divider />
    <div style={{ display: 'flex', width: '50%' }}>
      <h3>shape：</h3>
      <Skeleton.Button shape="circle" />
      <div style={{ width: '30px' }} />
      <Skeleton.Button shape="round" />
      <div style={{ width: '30px' }} />
      <Skeleton.Button shape="square" />
    </div>
    <Divider />
    <div style={{ display: 'flex', width: '50%' }}>
      <h3>size：</h3>
      <Skeleton.Button size="large" />
      <div style={{ width: '30px' }} />
      <Skeleton.Button size="default" />
      <div style={{ width: '30px' }} />
      <Skeleton.Button size="small" />
    </div>
    <Divider />
    <Skeleton.Button block />
  </>
);

export default App;
