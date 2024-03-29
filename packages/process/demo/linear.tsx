import * as React from 'react';
import Process from '..';
import Button from '../../button';


export default () => {
  const [process, setProcess] = React.useState(50);
  return (
    <>
      <Button
        onClick={() => {
          setProcess((_process) => _process + 10);
        }}
      >
        进度增加
      </Button>
      <h3>显示进度数字</h3>
      <Process percent={process} />
      <br />
      <h3>不显示进度数字</h3>
      <Process percent={process} showInfo={false} />
      <br />
      <h3>更改Linear进度条的宽度</h3>
      <Process percent={process} strokeWidth={50} status="success" />
      <br />
      <h3>success版本的Linear进度条</h3>
      <Process percent={process} status="success" />
      <h3>exception版本的Linear进度条</h3>
      <Process percent={process} status="exception" />
    </>
  );
};
