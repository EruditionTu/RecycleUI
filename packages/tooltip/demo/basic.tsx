import React from 'react';
import Tooltip from '..';
import '../style';

export default () => {
  const textStyle = {
    fontSize: '20px',
    fontWeight: 500,
  };
  return (
    <Tooltip content="avatar" placement="topLeft">
      <span style={textStyle}>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};
