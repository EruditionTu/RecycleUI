import React from 'react';
import Tooltip from '../index';
import '../style';

export default () => {
  const textStyle = {
    fontSize: '20px',
    fontWeight: 500,
  };
  return (
    <Tooltip title="tubo">
      <span style={textStyle}>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};
