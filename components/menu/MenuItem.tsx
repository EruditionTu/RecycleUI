import * as React from "react";
import classnames from "classnames";
import { useRecoilValue } from "recoil";

import {
    MenuMultipleState
} from "./state/MenuAtoms"
import MenuContext from "./MenuContext";
import {
    MenuItemPropTypes
} from "./types/MenuItemTypes";
import {
    MenuSelectableState,
    MenuThemeState
} from "./state/MenuAtoms";

const MenuItem:React.FC<MenuItemPropTypes>=(props:MenuItemPropTypes):React.ReactElement=>{
    const context = React.useContext(MenuContext);
    const [actived,setActived] = React.useState<boolean>(false);//Item是否被鼠标hover
    const [selected,setSelected] = React.useState<boolean>(false)//Item是否被选中
    const multiple = useRecoilValue(MenuMultipleState);
    const selectable = useRecoilValue(MenuSelectableState);
    const theme = useRecoilValue(MenuThemeState);
    React.useEffect(():void=>{
        setSelected(context.selectedItems.has(props.name))
    },[context.selectedItems,setSelected])
    const MouseEnter:()=>void=React.useCallback(():void=>{
        setActived(true)
    },[setActived])
    const MouseLeave:()=>void=React.useCallback(():void=>{
        setActived(false)
    },[setActived])
    const MouseClick:(e:any)=>void=React.useCallback((e:any):void=>{
        context.onClick({
            key:props.name,
            keyPath:props.path,
            domEvent:e
        })
        if(!selectable)return
        if(selected){//已经被选中，多选的时候再次点击取消选中
            context.cancelSelectItem(props.name);
            context.onDeselect({
                key:props.name,
                keyPath:props.path,
                domEvent:e,//点击产生的选择
                selectedKeys:Array.from(context.selectedItems)
            })
        }else {//没有被选中
            context.selectItem(props.name);
            context.onSelect({
                key:props.name,
                keyPath:props.path,
                domEvent:e,//点击产生的选择
                selectedKeys:Array.from(context.selectedItems)
            })
        }
    },[
        selectable,
        context.selectItem,
        context.onClick,
        context.onSelect,
        context.cancelSelectItem,
        selected
    ])
    return(
        <li
            onClick={MouseClick}
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}
            className={classnames(
                "menu-item",
                `menu-item-${theme}`,
                {
                    [`menu-item-${theme}-active`]:actived,
                    [`menu-item-${theme}-selected`]:selected
                }
                )}>
            <span className={"menu-item-content"}>
                {
                    props.label||"MenuItem"
                }
            </span>
        </li>
    )
}
export {
    MenuItemPropTypes
}
export default React.memo(MenuItem);
