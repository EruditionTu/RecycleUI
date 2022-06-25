import { atom , RecoilState } from "recoil";
//多选
export const MenuMultipleState:RecoilState<boolean>=atom<boolean>({
    key:"MenuMultipleState",
    default:false
})
//sub展开方式
export const MenuTriggerSubMenuActionState:RecoilState<("hover"|"click")>=atom<("hover"|"click")>({
    key:"MenuTriggerSubMenuActionState",
    default:"hover"
})
//menu主题
export const MenuThemeState:RecoilState<("light"|"dark")>=atom<("light"|"dark")>({
    key:"MenuThemeState",
    default:"light"
})
//menu模式
export const MenuModeState:RecoilState<("horizontal"|"inline"|"vertical")>=atom<("horizontal"|"inline"|"vertical")>({
    key:"MenuModeState",
    default:"horizontal"
})
//menu的item是否点击可选
export const MenuSelectableState:RecoilState<boolean>=atom<boolean>({
    key:"MenuSelectableState",
    default:true
})
//menu的sub是否可以手动触发
export const MenuOpenableState:RecoilState<boolean>=atom<boolean>({
    key:"MenuOpenableState",
    default:true
})
//menu的sub的嵌套往后面移动的px
export const MenuInlineIndentState:RecoilState<number>=atom<number>({
    key:"MenuInlineIndentState",
    default:16
})
//menu关闭的时间延迟
export const MenuSubMenuCloseDelay:RecoilState<number>=atom<number>({
    key:"MenuSubMenuCloseDelay",
    default:100
})
//menu的打开延迟
export const MenuSubMenuOpenDelay:RecoilState<number>=atom<number>({
    key:"MenuSubMenuOpenDelay",
    default:0
})
