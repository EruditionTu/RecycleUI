import * as React from 'react';
import classNames from 'classnames';
export interface CircleProcessProps {
    percent: number;//进度条当前进度
    showInfo?: boolean;//是否显示进度数或状态图标(目前我没做状态图标的显示)
    status?: string;//状态可选：success exception normal
    strokeColor?: string;//进度条的色彩
    trailColor?: string;//未完成的分段的颜色
    strokeWidth?: number;//进度条线的宽度
    width?: number;//圆形进度条画布宽度
}
const CircleProcessIcon: React.FC<{ status: string, percent: number }> = React.memo((props: { status: string, percent: number }) => {
    if (props.status === "success")
        return (
            <span className={'process-text'}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="24px" height="24px" fill="#52c41a" aria-hidden="true">
                    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                    </path>
                </svg>
            </span>
        )
    if (props.status === "exception")
        return (
            <span className={'process-text'}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="24px" height="24px" fill="#ff4d4f" aria-hidden="true">
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                    </path>
                </svg>
            </span>
        )
    return <span className={"process-text"}>{props.percent >= 100 ? 100 : props.percent}%</span>
})
const CircleProcess: React.FC<CircleProcessProps> = React.memo((props: CircleProcessProps): React.ReactElement => {
    const {
        percent,
        showInfo,
        status,
        strokeColor,
        trailColor,
        strokeWidth,
        width
    } = props;
    const processLen: number = Math.PI * 100;
    const processStrokeColor: string|undefined = (typeof strokeColor === "string" ? strokeColor : undefined);
    const processTrailColor: string|undefined = (typeof trailColor === "string" ? trailColor : undefined);
    const svgWidth = (typeof width === "number" ? width : 120);
    const processPercent: number = (typeof percent === "number" ? percent : 0);
    const processShowInfo: boolean = (typeof showInfo === "boolean" ? showInfo : true);
    const processStatus: string = (typeof status === "string" ? status : "normal");
    const [processStrokeWidth] = React.useState(typeof strokeWidth === "number" ? strokeWidth : 8);
    const [viewBox,setViewBox] = React.useState(116)
    const strokeStyle = {
        strokeWidth: processStrokeWidth,
        stroke: processStrokeColor
    }
    const trailStyle = {
        strokeWidth: processStrokeWidth,
        stroke: processTrailColor
    }
    React.useEffect(()=>{
        console.log()
        setViewBox((processStrokeWidth+50)*2);
    },[processStrokeWidth,setViewBox])
    const getStrokeDashOffset = React.useCallback((percent: number): number => {
        if (percent > 100) return 0
        return processLen - Math.PI * percent;
    }, [processLen])
    return <>
        <div className={classNames("circle-process", "process-wapper")}>
            <svg viewBox={`0 0 ${viewBox} ${viewBox}`} width={svgWidth} height={svgWidth}>
                <circle
                    style={trailStyle}
                    cx={`${50+processStrokeWidth}`} cy={`${50+processStrokeWidth}`} r="50" fill="none"
                    strokeWidth={processStrokeWidth}
                    stroke={'#000000d9'}
                    className={"process-trail"}>
                </circle>
                <circle
                    style={strokeStyle}
                    cx={`${50+processStrokeWidth}`} cy={`${50+processStrokeWidth}`} r="50" fill="none"
                    strokeWidth={processStrokeWidth}
                    stroke={'#1890ff'}
                    className={classNames("process-stroke", `${processStatus}-stroke`)}
                    strokeDasharray={processLen}
                    strokeDashoffset={getStrokeDashOffset(processPercent)}
                >
                </circle>
            </svg>
            {
                processShowInfo &&
                <CircleProcessIcon status={processStatus} percent={percent}></CircleProcessIcon>
            }
        </div>
    </>
})
export default CircleProcess;
