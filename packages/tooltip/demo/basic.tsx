import React from 'react';
import Tooltip from '..';

export default () => {
  const textStyle = {
    fontSize: '20px',
    fontWeight: 500,
  };
  return (
    <Tooltip content="文字提示，今天你学习了吗？">
      <span style={textStyle}>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};
