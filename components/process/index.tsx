import * as React from "react";
import LinearProcess, { LinearProcessProps } from "./LinearProcess";
import CircleProcess, { CircleProcessProps } from "./CircleProcess";
type ProcessProps = LinearProcessProps &
  CircleProcessProps & { type?: "linear" | "circle" | "dashboard" };
const Process: React.FC<ProcessProps> = React.memo(
  (props: ProcessProps): React.ReactElement => {
    const { type } = props;
    const processType: string =
      type === "linear" || type === "circle" || type === "dashboard"
        ? type
        : "linear";
    return (
      <>
        {processType === "linear" && <LinearProcess {...props}></LinearProcess>}
        {processType === "circle" && <CircleProcess {...props}></CircleProcess>}
      </>
    );
  }
);
export default Process;
