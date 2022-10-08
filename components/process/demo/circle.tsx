import * as React from "react";
import Process from "../";
import Button from "../../button";
import "../../button/style";
export default () => {
  const [percent, setPercent] = React.useState(10);
  return (
    <>
      <Button
        type={"primary"}
        onClick={() => {
          setPercent((p) => p + 10);
        }}
      >
        +10%
      </Button>
      <div style={{ display: "flex" }}>
        <div>
          <h3>normal形式的circle进度条</h3>
          <Process percent={percent} type={"circle"} />
          <h3>success形式的circle进度条</h3>
          <Process percent={percent} type={"circle"} status={"success"} />
          <h3>exception形式的circle进度条</h3>
          <Process percent={percent} type={"circle"} status={"exception"} />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <h3>改变进度条颜色</h3>
          <Process percent={percent} type={"circle"} strokeColor={"pink"} />
          <h3>改变轨道颜色</h3>
          <Process
            percent={percent}
            type={"circle"}
            status={"success"}
            trailColor={"pink"}
          />
          <h3>改变circle轨道宽度</h3>
          <Process
            percent={percent}
            strokeWidth={20}
            type={"circle"}
            status={"success"}
          />
        </div>
      </div>
    </>
  );
};
