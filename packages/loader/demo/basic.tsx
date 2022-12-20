import React from 'react';
import Loader from '..';
import '../style';

export default () => {
  return (
    <div>
      <Loader size="small" />
      <Loader />
      <Loader size="large" />
    </div>
  );
};
