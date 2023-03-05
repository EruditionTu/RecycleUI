import React from 'react';
import Skeleton from '..';

const App: React.FC = () => {
  return (
    <>
      <div style={{ display: 'flex', width: '35%' }}>
        <Skeleton.Image />
        <div style={{ width: '30px' }} />
        <Skeleton.Image active />
      </div>
    </>
  );
};

export default App;
