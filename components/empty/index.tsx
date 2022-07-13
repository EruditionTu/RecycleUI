import * as React from 'react';
import classNames from 'classnames';
export interface EmptyProps{
    description?:React.ReactNode;//自定义描述内容
    image?:React.ReactNode;//设置显示图片
    imageStyle?:React.CSSProperties;//图片样式
    children?:React.ReactNode;
}
const Empty:React.FC<EmptyProps>=React.memo((props:EmptyProps):React.ReactElement=>{
    return <div className={"empty-wapper"}>
        <div className={"empty-image"}></div>
        <div className={"empty-description"}></div>
    </div>
})
