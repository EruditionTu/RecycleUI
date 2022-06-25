import { atom , RecoilState } from "recoil";
import * as React from "react";
export const activeSlideIndexState:RecoilState<number>=atom<number>({
    key:"activeSlideIndexState",
    default:0
})
/**
 * 一个轮播项目的宽度
 */
export const slideWidthState:RecoilState<number>=atom<number>({
    key:"slideWidthState",
    default:0
})
/**
 * 轮播项目内容与项目边框之间的距离
 */
export const slideOffsetState:RecoilState<number>=atom<number>({
    key:"slideOffsetState",
    default:0
})
/**
 * 轮播图的轮播元素数组
 */
export const slidesState:RecoilState<Array<React.ReactNode>> = atom<Array<any>>({
    key:"slidesState",
    default:[]
})
