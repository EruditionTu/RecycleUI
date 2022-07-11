import * as React from "react";
import Linearprocess,{LinearProcessProps} from "./Linearprocess";
import Circleprocess,{CircleProcessProps} from "./Circleprocess";
type ProcessProps=(LinearProcessProps&CircleProcessProps&{type?:"linear"|"circle"|"dashboard"})
const Process:React.FC<ProcessProps>=React.memo((props:ProcessProps):React.ReactElement=>{
    const {
        type
    }=props;
    const processType:string=(type==="linear"||type==="circle"||type==="dashboard")?type:"linear";
    return <>
        {
            processType==="linear"&&
            <Linearprocess {...props}></Linearprocess>
        }
        {
            processType==="circle"&&
            <Circleprocess {...props}></Circleprocess>
        }
        {
            processType==="dashboard"&&
            <div></div>
        }
    </>
})
export default  Process;
