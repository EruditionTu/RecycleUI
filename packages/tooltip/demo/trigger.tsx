import React from 'react';
import Tooltip from '..';
import Button from '../../button';
import '../../button/style';
import '../style';

export default () => {
  return (
    <>
      <Tooltip content="文字提示，今天你学习了吗？">
        <Button>悬浮触发文字提示</Button>
      </Tooltip>
      <Tooltip content="文字提示，今天你学习了吗？" trigger="click">
        <Button>点击触发文字提示</Button>
      </Tooltip>
    </>
  );
};
