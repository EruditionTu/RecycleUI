import * as React from "react";
import Button from "../button";
import "../style";
export default () => {
  return (
    <>
      <Button type={"primary"} block>
        Block Button
      </Button>
      <br />
      <br />
      <Button type={"dashed"} block danger>
        Block Button
      </Button>
      <br />
      <br />
      <Button type={"primary"} block shape={"round"}>
        Round Button
      </Button>
    </>
  );
};
