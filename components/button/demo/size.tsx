import * as React from "react";
import Button from "../button";
import "../style";
export default () => {
  return (
    <>
      <Button type={"primary"} size={"large"} danger>
        Large Button
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"primary"}>Default Button</Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"primary"} size={"small"}>
        Small Button
      </Button>
      <br />
      <br />
      <Button type={"primary"} size={"large"} shape={"circle"}>
        L
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"primary"} shape={"circle"}>
        D
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"primary"} size={"small"} shape={"circle"}>
        S
      </Button>
      <br />
      <br />
      <Button type={"primary"} size={"large"} shape={"round"}>
        Large Button
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"primary"} shape={"round"}>
        Default Button
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"primary"} size={"small"} shape={"round"} danger>
        Small Button
      </Button>
      <br />
      <br />
      <Button type={"text"} size={"large"} shape={"round"}>
        Large Text
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"text"} shape={"round"}>
        Default Text
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"text"} size={"small"} shape={"round"} danger>
        Small Text
      </Button>
      <br />
      <br />
      <Button
        type={"link"}
        size={"large"}
        shape={"round"}
        href={"https://blog.csdn.net/weixin_49203377/article/details/117735804"}
      >
        Large Link
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"link"} shape={"round"}>
        Default Link
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type={"link"} size={"small"} shape={"round"} danger>
        Small Link
      </Button>
    </>
  );
};
