import React from 'react';
import Tooltip from '../index';
import Button from '../../button';


export default () => {
  return (
    <>
      <Tooltip content="文字提示，今天你学习了吗？" visibleArrow={false}>
        <Button>无箭头文字提示</Button>
      </Tooltip>
      <Tooltip content="文字提示，今天你学习了吗？" visibleArrow={false} trigger="click">
        <Button>无箭头文字提示(点击)</Button>
      </Tooltip>
    </>
  );
};
