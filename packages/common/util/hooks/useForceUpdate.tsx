import React from 'react';

const useForceUpdate = () => {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  return forceUpdate;
};

export default useForceUpdate;
