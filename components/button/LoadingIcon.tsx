import * as React from 'react';
type ButtonType="primary"|"default"|"dashed"|"text"|"link";
interface LoadingIconProps{
    danger?:boolean;
    type?:ButtonType;
    disabled?:boolean;
}
const LoadingIcon:React.FC<LoadingIconProps>=(props:LoadingIconProps)=>{
    const {
        danger,
        type,
        disabled
    }=props
    const [classes,setclasses]=React.useState(`rotate-animate${type==="primary"?"-primary":"-whitebg"}${danger?"-danger":"-default"}`)
    return (
        <div className={classes}></div>
    )
}
export default React.memo(LoadingIcon);
