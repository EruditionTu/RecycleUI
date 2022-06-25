import * as React from "react";
import classnames from "classnames";
interface CheckableTagPropsEventsType{
    size:("large"|"default"|"small");
    color:string;
    children?:React.ReactNode;
    checked?:boolean;//标签是否选中
    onChange?:(checked:boolean)=>void;//点击切换触发的事件
}
const CheckableTag:React.FC<CheckableTagPropsEventsType>=(props:CheckableTagPropsEventsType):React.ReactElement=>{
    const checkableTagRef = React.useRef(null);
    const [checked,setChecked]=React.useState(false);
    const clickTag = React.useCallback(()=>{
        props.onChange&&props.onChange(checked)
        setChecked(!checked)
    },[setChecked,props.onChange,checked])
    React.useEffect(()=>{
        if(checked){
            checkableTagRef.current.style.backgroundColor=props.color||"#1890ff";
            checkableTagRef.current.style.color="white";
        }else{
            checkableTagRef.current.style.backgroundColor="white";
            checkableTagRef.current.style.color = props.color || "black";
        }
    },[checked,props.color,checkableTagRef])
    return <div
        onClick={clickTag}
        ref={checkableTagRef}
        className={classnames(
            "tag",
            `${props.size?props.size:"default"}`
            )}>{props.children}</div>
}
export default React.memo(CheckableTag);
