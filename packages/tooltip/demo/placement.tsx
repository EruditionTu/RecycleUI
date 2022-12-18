import React from 'react';
import Tooltip from '../index';
import Button from '../../button';
import '../../button/style';
import '../style';

const text = <span>prompt text</span>;

const buttonWidth = 70;

export default () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Tooltip placement="left" content={<strong>Hello uiw!</strong>}>
          <Button>左边文字提示(left)</Button>
        </Tooltip>

        <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>
          <Button>上边文字提示(top)</Button>
        </Tooltip>

        <Tooltip placement="bottom" content={<strong>Hello uiw!</strong>}>
          <Button>下边文字提示(bottom)</Button>
        </Tooltip>

        <Tooltip placement="right" content={<strong>Hello uiw!</strong>}>
          <Button>右边文字提示(right)</Button>
        </Tooltip>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Tooltip placement="topLeft" content={text}>
              <Button>TL</Button>
            </Tooltip>
            <Tooltip placement="top" content={text}>
              <Button>Top</Button>
            </Tooltip>
            <Tooltip placement="topRight" content={text}>
              <Button>TR</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Tooltip placement="leftTop" content={text}>
              <Button>LT</Button>
            </Tooltip>
            <Tooltip placement="left" content={text}>
              <Button>Left</Button>
            </Tooltip>
            <Tooltip placement="leftBottom" content={text}>
              <Button>LB</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, marginLeft: buttonWidth * 3.8 + 24 }}>
            <Tooltip placement="rightTop" content={text}>
              <Button>RT</Button>
            </Tooltip>
            <Tooltip placement="right" content={text}>
              <Button>Right</Button>
            </Tooltip>
            <Tooltip placement="rightBottom" content={text}>
              <Button>RB</Button>
            </Tooltip>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Tooltip placement="bottomLeft" content={text}>
              <Button>BL</Button>
            </Tooltip>
            <Tooltip placement="bottom" content={text}>
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip placement="bottomRight" content={text}>
              <Button>BR</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
