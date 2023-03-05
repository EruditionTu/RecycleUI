import React, { useState } from 'react';
import Loader from '..';
import Button from '../../button';

export default () => {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <div>
      <Button
        style={{ marginBottom: 10 }}
        onClick={() => {
          if (!fullScreen) {
            setFullScreen(true);

            setTimeout(() => {
              setFullScreen(false);
            }, 3000);
          }
        }}
      >
        显示整页加载，3 秒后消失
      </Button>
      {fullScreen && (
        <Loader
          tip="加载中..."
          size="large"
          bgColor="rgba(255, 255, 255, 0.9)"
          fullscreen={fullScreen}
        />
      )}
    </div>
  );
};
