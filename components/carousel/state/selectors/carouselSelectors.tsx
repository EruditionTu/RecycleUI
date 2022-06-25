import { selector } from "recoil";
import _flow from "lodash/flow";
import _bind from "lodash/bind";
import {
    slideMovementState,
    carouselValueState,
    carouselStrategiesState
} from "../atoms/carouselAtoms";
import {
    slideOffsetState,
    slidesState,
    slideWidthState
} from "../atoms/slideAtoms"

import clamp from "../../tools/clamp";

import { CAROUSELSTRATEGIES } from "../../constants/carouselStraegies";

/**
 * 当前的轮播项目状态
 */
export const currentValueSelector = selector({
    key:"currentValueSelector",
    get:({get}):number=>{
        const value:number = get(carouselValueState);
        const slides:Array<React.ReactNode> = get(slidesState);
        const getCurrentValueBase = ():number=>clamp(value,slides);
        return getCurrentValueBase();
    },
    set:({set,get},value:number):void=>{
        const slides:Array<React.ReactNode> = get(slidesState);
        const getCurrentValueBase = ():number=>clamp(value,slides);
        const newValue:number=getCurrentValueBase();
        set(carouselValueState, newValue)
    }
})

/**
 * 轨道的移动状态
 */
export const transformOffsetSelector = selector({
    key:"transformOffsetSelector",
    get:({ get }):number=>{
        const slideWidth:number = get(slideWidthState);
        const slideOffset:number = get(slideOffsetState);
        const dragOffset:number = get(slideMovementState).dragOffset;
        const value:number = get(carouselValueState);
        const getTransformOffsetBase = ():number=> {
            //一个轮播元素的宽度，包括轮播的项目长度和轮播
            const elementWidthWithOffset:number = slideWidth + slideOffset;
            return dragOffset - value * elementWidthWithOffset;
        }
        return getTransformOffsetBase();
    }
})

/**
 *
 */
export const nearestSlideSelector = selector({
    key:"nearestSlideSelector",
    get:({ get }):number=>{
        const slideWidth:number = get(slideWidthState);
        const dragOffset:number = get(slideMovementState).dragOffset;
        const value:number = get(carouselValueState);
        // console.log(slideWidth,dragOffset,value)
        const slides:Array<React.ReactNode> = get(slidesState);
        const getNearestSlideBase =():number=>{
            const slideIndexOffset = -Math.round(dragOffset / slideWidth);
            return clamp(value + slideIndexOffset, slides);
        }
        return getNearestSlideBase();
    }
})
