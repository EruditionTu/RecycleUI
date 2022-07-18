import * as React from 'react';
import Error from '../common/icon/error';
import Info from '../common/icon/info';
import Success from '../common/icon/success';
import Warn from '../common/icon/warn';
import Loading from '../common/icon/loading/loading';
export type MessageType = "success" | "error" | "info" | "loading" | "warn"|"normal";
const MessageIcon = (props: { type?: MessageType }) => {
    console.log(props.type)
    if(!props.type||props.type==='normal')
    return <></>
    if (props.type === "info")
        return <span className={"msg-icon"}>
            <Info width="16" height="16"/>
        </span>
    if (props.type === "success")
        return <span className={"msg-icon"}>
            <Success width="16" height="16"/>
        </span>
    if (props.type === "error")
        return <span className={"msg-icon"}>
            <Error width="16" height="16"/>
        </span>
    if (props.type === "warn")
        return <span className={"msg-icon"}>
            <Warn width="16" height="16"/>
        </span>
    return <span className={"msg-icon"}>
        <Loading/>
    </span>
}
export default MessageIcon;