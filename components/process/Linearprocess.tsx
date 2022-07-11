import * as React from 'react';
import classNames from 'classnames';
export interface LinearProcessProps{
    percent:number;//进度条当前进度
    showInfo?:boolean;//是否显示进度数或状态图标(目前我没做状态图标的显示)
    status?:string;//状态可选：success exception normal active(仅限 line)
    strokeColor?:string;//进度条的色彩
    trailColor?:string;//未完成的分段的颜色
    strokeWidth?:number;//进度条线的宽度
}
const LinearProcess:React.FC<LinearProcessProps>=React.memo((props:LinearProcessProps):React.ReactElement=>{
    const {
        percent,
        strokeWidth,
        strokeColor,
        trailColor,
        showInfo,
        status
    }=props;
    const strokeStyle={
        width:`${typeof percent==="number"?percent:0}%`,
        backgroundColor:`${typeof strokeColor==="string"?strokeColor:""}`
    }
    const trailStyle={
        backgroundColor: `${typeof trailColor==="string"?trailColor:""}`,
        height:`${typeof strokeWidth==='number'?strokeWidth+"px":'40%'}`
    }
    const processStatus=(status==="success"||status==="exception"||status==="normal")?status:"normal";
    const processShowInfo=(typeof showInfo==="boolean"?showInfo:true);
    return <>
        <div className={"linear-process"}>
            <div className={"process-outer"}>
                <div className={"process-inner"} style={trailStyle}>
                    <div className={classNames("process-done",processStatus)} style={strokeStyle}></div>
                </div>
            </div>
            {
                processShowInfo&&
                <span className={"percent-number"} >
                    {percent}%
                </span>
            }
        </div>
    </>
})
export default  LinearProcess;


