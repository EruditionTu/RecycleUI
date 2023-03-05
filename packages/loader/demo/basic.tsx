import React from 'react';
import Loader from '..';

export default () => {
  return (
    <div>
      <Loader size="small" />
      <Loader />
      <Loader size="large" />
    </div>
  );
};
