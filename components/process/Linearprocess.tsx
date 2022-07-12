import * as React from 'react';
import classNames from 'classnames';
export interface LinearProcessProps {
    percent: number;//进度条当前进度
    showInfo?: boolean;//是否显示进度数或状态图标(目前我没做状态图标的显示)
    status?: string;//状态可选：success exception normal active(仅限 line)
    strokeColor?: string;//进度条的色彩
    trailColor?: string;//未完成的分段的颜色
    strokeWidth?: number;//进度条线的宽度
}
const LinearProcessIcon: React.FC<{ status: string, percent: number }> = React.memo((props: { status: string, percent: number }) => {
    if (props.status === "success")
        return (
            <span className={'percent-icon'}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#52c41a" aria-hidden="true">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                    </path>
                </svg>
            </span>
        )
    if (props.status === "exception")
        return (
            <span className={'percent-icon'}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="#ff4d4f" aria-hidden="true">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z">
                    </path>
                </svg>
            </span>
        )
    return <span className={"percent-number"} >
        {props.percent}%
    </span>
})
const LinearProcess: React.FC<LinearProcessProps> = React.memo((props: LinearProcessProps): React.ReactElement => {
    const {
        percent,
        strokeWidth,
        strokeColor,
        trailColor,
        showInfo,
        status
    } = props;
    const strokeStyle = {
        width: `${typeof percent === "number" ? percent : 0}%`,
        backgroundColor: `${typeof strokeColor === "string" ? strokeColor : ""}`
    }
    const trailStyle = {
        backgroundColor: `${typeof trailColor === "string" ? trailColor : ""}`,
        height: `${typeof strokeWidth === 'number' ? strokeWidth + "px" : '40%'}`
    }
    const processStatus = (status === "success" || status === "exception" || status === "normal") ? status : "normal";
    const processShowInfo = (typeof showInfo === "boolean" ? showInfo : true);
    return <>
        <div className={classNames("linear-process", "process-wapper")}>
            <div className={"process-outer"}>
                <div className={"process-inner"} style={trailStyle}>
                    <div className={classNames("process-done", processStatus)} style={strokeStyle}></div>
                </div>
            </div>
            {
                processShowInfo&&
                <LinearProcessIcon status={processStatus} percent={percent}></LinearProcessIcon>
            }
        </div>
    </>
})
export default LinearProcess;


