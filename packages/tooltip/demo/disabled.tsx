import React from 'react';
import Tooltip from '../index';
import Button from '../../button';


export default () => {
  return (
    <>
      <Tooltip content="文字提示，今天你学习了吗？" disabled>
        <Button>禁止文字提示</Button>
      </Tooltip>
      <Tooltip content="文字提示，今天你学习了吗？">
        <Button>使用文字提示</Button>
      </Tooltip>
    </>
  );
};
