import * as React from 'react';
import classnames from "classnames";
import { useRecoilState , useSetRecoilState , useRecoilValue } from "recoil";
import _compact from "lodash/compact"

import { CarouselPropsType, CarouselWrapperPropTypes } from "../types/components.types"

import simulateEvent from "../tools/simulateEvent";
import getChildren from "../tools/getChildren";
import carouselPluginresolver from "../tools/carouselPluginresolver";

import useOnResize from "../../_util/hooks/useOnResize";
import useEventListener from "../../_util/hooks/useEventlistener";

import CarouselItem from "./CarouselItem";

import {
    slidesState,//轮播项目数组
    slideOffsetState,//轮播项目内容与项目边框之间的距离
    slideWidthState,//轮播项目的宽度
} from "../state/atoms/slideAtoms";
import {
    carouselValueState,
    trackLengthState,//轮播轨道长度
    trackStylesState,//轮播轨道的样式
    transitionEnabledState,//轮播轨道是否执行动画
    slideMovementState,//拖动相关的状态
} from "../state/atoms/carouselAtoms";

import "../style/carousel.less";

const  Carousel:React.FC<CarouselPropsType>=(props:CarouselPropsType):React.ReactElement=>{

    const [v] = useRecoilState(carouselValueState)
    React.useEffect(()=>{
        console.log(v)
    },[v])
    //获取轮播元素
    const children:Array<React.ReactNode> = getChildren(props.children,props.slides);

    //为组件添加atom状态
    const [slideMovement,setSlidMovement] = useRecoilState(slideMovementState);//拖动数据
    const [trackLength,setTrackLength] = useRecoilState(trackLengthState);//轨道长度
    const [trackStyles,setTrackStyles] = useRecoilState(trackStylesState);//轨道样式
    const [transitionEnabled,setTransitionEnabled] = useRecoilState(transitionEnabledState);//是否执行过渡动画
    const [slides,setSlides] = useRecoilState(slidesState);//轮播的项目
    const setSlideOffset = useSetRecoilState(slideOffsetState);//设置offset状态
    const [ slideWidth,setSlideWidth ] = useRecoilState(slideWidthState);//轮播项目的宽度

    //获取组件dom实例
    const carouselRef = React.useRef(null);
    const trackContainerRef = React.useRef(null);

    //加载插件
    const {
        beforeCarouselItems,//左箭头插件
        afterCarouselItems//右箭头插件
    }=carouselPluginresolver(props)

    //事件函数
    /**
     * onMouseDown
     * 用户按下鼠标触发的事件（仅限于PC端）
     * 绑定在轮播项目上
     * 用于更新动画是否执行的状态，点击的下标，开始的坐标等状态
     */
    const onMouseDown = React.useCallback((event:any,index:number):void=>{
        const { pageX }=event;
        //禁止点击的默认事件
        event.preventDefault();
        event.stopPropagation();
        //静止过渡动画
        setTransitionEnabled(false);
        setSlidMovement({
            ...slideMovement,
            clickedIndex:index,
            dragStart:pageX
        })
    },[setTransitionEnabled,setSlidMovement,slideMovement])
    /**
     * onMouseMove
     * 鼠标移动的事件（仅限于PC端）
     * 绑定在轮播轨道上
     * 用于同步拖动的距离，拖动结束的坐标等slideMovement信息
     */
    const onMouseMove=React.useCallback((event:any):void=>{
        const { pageX } = event;
        if (slideMovement.dragStart!==null){
            setSlidMovement(
                (previousState)=>({
                    ...slideMovement,
                    dragOffset:pageX - previousState.dragStart,
                    dragEnd: pageX
                })
            )
        }
    },[setSlidMovement,slideMovement])
    /**
     * mouseup
     * 鼠标拖动或者移动端手指拖动结束的事件
     * 绑定在轮播轨道上
     * 用于初始化拖动状态slideMovement
     */
    const onMouseUpTouchEnd = React.useCallback((e):void=>{
       if(slideMovement.dragStart!==null){
           props.changeSlide(props.nearestSlideIndex)
           setSlidMovement({
               clickedIndex:null,
               dragStart:null,
               dragEnd:null,
               dragOffset:0
           })
       }
       setTransitionEnabled(true)
    },[
        setSlidMovement,
        setTransitionEnabled,
        slideMovement.dragStart,
        props.nearestSlideIndex,
        props.changeSlide
    ])
    /**
     * onTouchStart事件
     * 移动端的事件（类似PC端Web的onMouseDown事件）
     * 绑定在轮播项目上
     * 用于更新拖动的项目下标，拖动开始的坐标等slideMovement信息
     * 目前还没有做移动端的适配，所以先放这里
     */
    const onTouchStart = React.useCallback((event:any,index:number):void=>{
        const { changedTouches } = event;
        setSlidMovement({
            ...slideMovement,
            clickedIndex:index,
            dragStart:changedTouches[0].pageX
        })
    },[setSlidMovement])

    useOnResize({
        width:slideWidth,
        setItemWidth:setSlideWidth,
        trackContainerRef,
        carouselRef
    })



    // 更新轮播子元素列表状态
    React.useEffect(()=>{
        setSlides(children)
    },[children,setSlides])
    //更新轮播项目的offset
    React.useEffect(():void=>{
        setSlideOffset( props.offset || 0)
    },[props.offset,setSlideOffset])
    //更新轮播轨道的长度
    React.useEffect(()=>{
        const trackLength = children.length * slideWidth
        setTrackLength(trackLength)
    },[children.length,slideWidth,setTrackLength])
    //更新轮播轨道的位置
    React.useEffect(()=>{
        setTrackStyles({
            ...trackStyles,
            transform:props.transformOffset
        })
    },[props.transformOffset,setTrackStyles])
    //更新轮播项目的宽度
    React.useEffect(():void=>{
        setSlideWidth( props.itemWidth || 0)
    },[props.itemWidth,setSlideWidth])



    /**
     * mouseup事件绑定在window全局变量上是应为拖动结束的事件可能会在页面任意的地方触发
     */
    useEventListener('mouseup', onMouseUpTouchEnd, {
        passive: true,
        capture: true,
    });
    /**
     * 处理移动端的拖动事件
     */
    useEventListener(
        'touchstart',
        simulateEvent,
        { passive: true, capture: true },
        carouselRef.current,
    );
    useEventListener('touchmove', simulateEvent,carouselRef.current);
    useEventListener(
        'touchend',
        simulateEvent,
        { passive: true, capture: true },
        carouselRef.current,
    );


    //渲染轮播元素
    const renderCarouselItems= React.useCallback(():React.ReactElement=>{
        const animationSpeed:number = props.animationSpeed || 500;
        const draggable:boolean = props.draggable || false
        const  currnetTrackStyles = {
            width:`${trackLength}px`,
            transitionDuration:transitionEnabled
                ? `${animationSpeed}ms, ${animationSpeed}ms`
                : null,
            transform: `translateX(${trackStyles.transform}px)`,
            marginLeft:`${trackStyles.marginLeft}px`,
            marginRight:`${trackStyles.marginRight}px`
        }
        return (
            <div className={"carousel-trackContainer"} ref={trackContainerRef}>
                <ul
                    className={classnames("carousel-track",{
                        'carousel-track--transition': transitionEnabled
                    })}
                    style={currnetTrackStyles}>
                    {
                        _compact(slides).map((carouselItem,index)=>(
                            <CarouselItem
                                key={index+carouselItem}
                                index={index}
                                width={props.itemWidth||slideWidth}
                                onTouchStart={onTouchStart}
                                onMouseDown={onMouseDown}
                                offset={props.offset? props.offset:0}
                            >
                                {carouselItem}
                            </CarouselItem>
                        ))
                    }
                </ul>
            </div>
        )
    },[
        props.animationSpeed,
        props.draggable,
        props.itemWidth,
        props.offset,
        trackStyles.transform,
        trackStyles.marginLeft,
        trackStyles.marginRight,
        onTouchStart,
        onMouseDown,
        slides,
        trackContainerRef,
        transitionEnabled,
        trackLength
    ])
    return(
        <div className={"carousel-container"}>
            <div
                className={classnames(
                    "carousel",
                    props.calssName
                )}
                onMouseMove={onMouseMove}
                ref={carouselRef}>
                {React.createElement(React.Fragment,null,beforeCarouselItems)}
                {renderCarouselItems()}
                {React.createElement(React.Fragment,null,afterCarouselItems)}
            </div>
        </div>
    )
}
export default React.memo(Carousel);
