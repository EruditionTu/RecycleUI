import * as React from "react";
//CarouselWrapper组件的Props类型
export interface CarouselWrapperPropTypes {
  value?: number;
  itemWidth?: number;
  slides?: Array<React.ReactNode>;
  offset?: number;
}
//Carousel组件的Props类型
export interface CarouselPropsType {
  changeSlide: Function; //切换幻灯片
  nearestSlideIndex: number;
  value?: number;
  itemWidth?: number; //轮播项目的宽度
  calssName?: any; //对轮播图的自定义样式
  offset?: number; //轮播内容之间的间隔
  transformOffset?: number; //触摸事件，定时事件或者点击事件导致轮播轨道的移动
  animationSpeed?: number; //轮播过渡执行的速度
  children?: Array<React.ReactNode> | React.ReactNode; //轮播的元素数组
  slides?: Array<React.ReactNode>; //从props中传递需要轮播的元素
  draggable?: boolean; //是否可以拖拽触发轮播效果
}
//CarouselSlide组件的Props类型
export interface CarouselSlidePropsType {
  index: number; //每个轮播页的下标
  offset: number; //轮播内容之间的间隔
  width: number; //轮播内容的宽度
  children: React.ReactNode; //当前轮播页面渲染的子元素
  onMouseDown: (events, index) => void;
  onTouchStart: (events, index) => void;
}
