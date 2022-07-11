import * as React from 'react';
import classNames from 'classnames';
export interface CircleProcessProps{
    percent:number;//进度条当前进度
    showInfo?:boolean;//是否显示进度数或状态图标(目前我没做状态图标的显示)
    status?:string;//状态可选：success exception normal active(仅限 line)
    strokeColor?:string;//进度条的色彩
    trailColor?:string;//未完成的分段的颜色
    strokeWidth?:number;//进度条线的宽度
    width?:number;//圆形进度条画布宽度，单位PX
}
const CircleProcess:React.FC<CircleProcessProps>=React.memo((props:CircleProcessProps):React.ReactElement=>{
    const {
        percent,
        showInfo,
        status,
        strokeColor,
        trailColor,
        strokeWidth,
        width
    }=props;
    const [progressLen]=React.useState(314.15926);
    const processStrokeColor=(typeof strokeColor==="string"?strokeColor:"#1890ff")
    const processTrailColor=(typeof strokeColor==="string"?trailColor:"#0000000a")
    const processStrokeWidth=(typeof strokeWidth==="number"?strokeWidth:8)
    const svgWidth=(typeof width==="number"?width:120)
    const processPercent=(typeof percent ==="number"?percent:0);
    const getStrokeDashOffset=React.useCallback((percent:number):number=>{
        if(percent>100)return
        return progressLen-(progressLen/100)*percent;
    },[progressLen])
    console.log(getStrokeDashOffset(processPercent))
    return <>
        <svg viewBox="0 0 100 100" width={svgWidth} height={svgWidth} className={"circle-process"}>
            <circle cx="50" cy="50" r="46" fill="none" strokeWidth={processStrokeWidth} stroke={processTrailColor} className={"process-trail"}></circle>
            <circle cx="50" cy="50" r="46" fill="none" strokeWidth={processStrokeWidth} stroke={processStrokeColor} className={"process-stroke"} strokeDashoffset={getStrokeDashOffset(processPercent)} transform="rotate(-90 50 50)"></circle>
            <text  x="50" y="54" textAnchor="middle"className={"process-text"}><tspan>{percent}%</tspan></text>
        </svg>
    </>
})
export default CircleProcess;
