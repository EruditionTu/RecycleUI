import * as React from "react";
import classnames from "classnames";
import { CarouselSlidePropsType } from "../types/components.types";
import "../style/carousel-item.less";
const CarouselItem:React.FC<CarouselSlidePropsType>=(props:CarouselSlidePropsType):React.ReactElement=>{
    const childrenRef=React.useRef(null)

    //鼠标点击开始事件
    const onItemMouseDown:(event:any)=>void = React.useCallback((event:any):void=>{
        props.onMouseDown(event,props.index);
    },[props.onMouseDown,props.index])
    //移动端手指触摸事件
    const onItemTouchStart:(event:any)=>void = React.useCallback((event):void=>{
        props.onTouchStart(event,props.index)
    },[props.onTouchStart,props.index])
    return (
        <li
            className={classnames("carousel-item")}
            style={{
                marginRight:`${props.offset/2}px`,
                marginLeft:`${props.offset/2}px`,
                width:`${props.width}px`,
                maxWidth:`${props.width}px`,
                minWidth:`${props.width}px`,
                pointerEvents: null
        }}
            onMouseDown={onItemMouseDown}
            onTouchStart={onItemTouchStart}
        >
            {props.children}
        </li>
    )
}
export default  React.memo(CarouselItem);
