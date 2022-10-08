import * as React from "react";
import Tag from "../";
import "../style";
export default () => {
  const { CheckableTag } = Tag;
  return (
    <>
      <Tag size={"large"} color={"red"} closable effect={"dark"}>
        large
      </Tag>
      <Tag
        closable
        onClose={() => {
          alert("close");
        }}
        closeIcon={<>&</>}
        color={"green"}
        effect={"dark"}
      >
        default
      </Tag>
      <Tag closable size={"small"} color={"blue"}>
        small
      </Tag>
      <CheckableTag
        onChange={() => {
          alert("asdad");
        }}
      >
        checkabletag
      </CheckableTag>
    </>
  );
};
