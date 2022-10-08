import * as React from "react";
import Button from "../button";
import "../style";
export default () => {
  return (
    <>
      <Button>Button</Button>
      &nbsp; &nbsp; &nbsp;
      <Button disabled>Disabled Button</Button>
      <br />
      <br />
      <Button type="text">Text</Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="text" disabled>
        Disabled Text
      </Button>
      <br />
      <br />
      <Button type="link">Link</Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="link" disabled>
        Disabled Link
      </Button>
    </>
  );
};
