import * as React from "react";
import Button from "../button";
import "../style";
export default () => {
  return (
    <>
      <Button shape="circle">A</Button>
      &nbsp; &nbsp; &nbsp;
      <Button shape="circle" type="primary">
        A
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button shape="circle" type="dashed">
        A
      </Button>
      <br />
      <br />
      <Button type="dashed">A</Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="primary">A</Button>
      &nbsp; &nbsp; &nbsp;
      <Button>A</Button>
      <br />
      <br />
      <Button shape="round">Round Button</Button>
      &nbsp; &nbsp; &nbsp;
      <Button shape="round" type="primary">
        Round Button
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button shape="round" type="dashed">
        Round Button
      </Button>
    </>
  );
};
