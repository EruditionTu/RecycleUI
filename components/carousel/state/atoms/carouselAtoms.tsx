import { atom , RecoilState } from "recoil";
/**
 * 拖动状态的接口类型
 */
interface MovementStateType{
    clickedIndex:number;//拖动的轮播图下标
    dragStart:number;//拖动开始的pageX坐标
    dragEnd:number;//拖动结束的pageX坐标
    dragOffset:number;//拖动的距离
}
/**
 * 轮播图轨道的样式接口类型
 */
interface TrackStylesType{
    marginLeft:number;
    marginRight:number;
    transform:number;
}
/**
 * 管理轮播图的拖动状态
 */
export const slideMovementState:RecoilState<MovementStateType>=atom<MovementStateType>({
    key:"slideMovementState",
    default:{
        clickedIndex:null,
        dragStart:null,
        dragEnd:null,
        dragOffset:0
    }
})
/**
 * 控制轮播图动画执行的状态
 */
export const transitionEnabledState:RecoilState<boolean>=atom({
    key:"transitionEnabledState",
    default:true
})
/**
 * 轮播图的轨道长度
 */
export const trackLengthState:RecoilState<number>=atom({
    key:"trackLengthState",
    default:0
})
/**
 * 轮播图的轨道样式
 */
export const trackStylesState:RecoilState<TrackStylesType>=atom({
    key:"trackStylesState",
    default:{
        marginLeft:0,
        marginRight:0,
        transform:0
    }
})
/**
 * 当前的轮播项目状态
 */
export const carouselValueState:RecoilState<number>=atom({
    key:"carouselValueState",
    default:0
})

export const carouselStrategiesState:RecoilState<Array<any>> = atom({
    key:"carouselStrategiesState",
    default:[]
})

