import * as React from "react";
import classnames from "classnames";
import {
    useRecoilState,
    useRecoilValue
} from "recoil";
import MenuContext from "./MenuContext";
import {
    MenuSelectableState,
    MenuMultipleState,
    MenuModeState,
    MenuThemeState,
    MenuTriggerSubMenuActionState,
    MenuInlineIndentState,
    MenuOpenableState,
    MenuSubMenuCloseDelay
}from "./state/MenuAtoms";
import MenuItems from "./MenuItem";
import {
    compileToReactComponent,
} from "./tools/compileToReactComponents";
import {
    ItemObject
} from "./types/MenuTypes";
import {
    SubMenuPropTypes,
    PopupTypes
} from "./types/SubMenuTypes";

//渲染SubMenu的弹窗组件
const Popup:React.FC<PopupTypes>=(props:PopupTypes):React.ReactElement=>{
    const context = React.useContext(MenuContext);
    const selectable = useRecoilValue(MenuSelectableState);
    const multiple = useRecoilValue(MenuMultipleState);
    const mode = useRecoilValue(MenuModeState);
    const theme = useRecoilValue(MenuThemeState);
    const triggerSubMenuAction = useRecoilValue(MenuTriggerSubMenuActionState);
    const inlineIndent = useRecoilValue(MenuInlineIndentState);
     const openable = useRecoilValue(MenuOpenableState);
    const subMenuCloseDelay = useRecoilValue(MenuSubMenuCloseDelay);
    const timer = React.useRef<Map<string,any>>(new Map<string,any>());
    //选择Item
    const select:(
        keyName:string,
        path:Array<string>,
        e:any
        )=>void = React.useCallback((
            keyName:string,
            path:Array<string>,
            e:any):void=>{
        if(!selectable)return;
        context.onSelect({
            key:keyName,
            keyPath:path,
            selectedKeys:Array.from(context.selectedItems),
            domEvent:e
        })
        context.selectItem(keyName);
        context.selectSubPath(JSON.stringify(props.path));
        },
        [
            selectable,
            props.path,
            context.selectSubPath,
            context.selectItem,
        ])
    //取消选择-仅多选可以使用
    const cancelSelect:(
        keyName:string,
        path:Array<string>,
        e:any
    )=>void = React.useCallback((
        keyName:string,
        path:Array<string>,
        e:any
    ):void=>{
        if(!selectable)return;
        context.onDeselect({
            key:keyName,
            keyPath:path,
            selectedKeys:Array.from(context.selectedItems),
            domEvent:e
        })
        context.cancelSelectItem(keyName);
        context.cancelSelectSubPath(JSON.stringify(props.path))
    },[
        selectable,
        context.cancelSelectItem,
        context.cancelSelectSubPath,
        context.onDeselect,
        props.path
    ])
    //点击展开子菜单
    const ClickOpenSub:(keyName:string)=>void=React.useCallback((keyName:string):void=>{
        if(!openable)return
        if(mode==="inline"){
            if(context.activedSub.has(keyName)){
                context.cancleOpen(keyName)
            }else{
                context.open(keyName,true);
            }
        } else if(triggerSubMenuAction==="click") {
            context.open(keyName,true);
        }
    },[
        context.open,
        context.cancleOpen,
        context.activedSub,
        triggerSubMenuAction,
        mode,
        openable
    ])
    //鼠标进入展开子菜单
    const MouseEnter:(keyName:string)=>void=React.useCallback((keyName:string):void=>{
        if(!openable)return;
        if(mode==="inline")return;
        if(
            triggerSubMenuAction==="hover"||
            (
                triggerSubMenuAction==="click"&&
                props.actived
            )
        ){
            if(timer.current.has(keyName)&&timer.current.get(keyName)) {
                clearTimeout(timer.current.get(keyName));
                timer.current.set(keyName,null);
            }
            context.open(keyName,true);
        }
    },[
        context.activedSub,
        context.open,
        props.actived,
        timer,
        timer.current,
        triggerSubMenuAction,
        openable,
        mode
    ])
    //鼠标出去触发的事件
    const MouseLeave:(keyName:string)=>void=React.useCallback((keyName:string):void=>{
        if(!openable)return;
        if(mode==="inline")return;
        const timeout:any=setTimeout(():void=>{
            timer.current.set(keyName,null);
            context.cancleOpen(keyName);
        },subMenuCloseDelay)
        timer.current.set(keyName,timeout);
    },[
        context.cancleOpen,
        subMenuCloseDelay,
        timer.current,
        mode,
        openable
    ])
    return (
        <ul className={classnames(
            "sub-menu-popup",
            `sub-menu-popup-${theme}`,
            {
                "hidden":!props.actived,
                "sub-menu-popup-deep":props.depth!==1
            }
            )}
        >
            {
                Array.isArray(props.children) &&
                props.children.map((child:ItemObject&{
                    path:Array<string>
                },index:number):React.ReactElement=>{
                        return<li
                            key={index+JSON.stringify(child)}
                            className={classnames(
                                "sub-menu-popup-item",
                                `sub-menu-popup-item-${theme}`,
                                {
                                    [`sub-menu-popup-item-${theme}-selected`]:(
                                        child.type==="MenuItem"&&context.selectedItems.has(child.key)
                                        || child.type==="SubMenu"&&context.selectedSub.has(child.key)
                                    ),
                                    [`sub-menu-popup-item-${theme}-selected-nopopup`]:child.type==="MenuItem"&&context.selectedItems.has(child.key)
                                }
                                )}
                            onMouseEnter={()=> {
                                if(child.type==="SubMenu")
                                    MouseEnter(child.key)
                            }}
                            onMouseLeave={()=> {
                                if(child.type==="SubMenu")
                                    MouseLeave(child.key)
                            }}
                        >
                            <div
                                className={classnames('sub-menu-popup-item-title')}
                                onClick={(e)=> {
                                    if(child.type==="MenuItem") {
                                        context.onClick({
                                            key:child.key,
                                            keyPath:(child as any).path,
                                            domEvent:e
                                        })
                                        if(!context.selectedItems.has(child.key)) {
                                            select(child.key,child.path,e);
                                        } else {
                                            cancelSelect(child.key,child.path,e)
                                        }
                                    }else if(child.type==="SubMenu"){
                                        if(typeof child.onTitleClick === 'function'){
                                            child.onTitleClick({
                                                key:child.key,
                                                domEvent:e
                                            })
                                        }
                                        ClickOpenSub(child.key);
                                    }
                                }}
                            >
                                <span
                                    style={{
                                        marginLeft:`${mode==="inline"?(props.depth+1)*(inlineIndent):0}px`
                                    }}
                                    className={"sub-menu-popup-item-label"}
                                >
                                    {child.type==="MenuItem"?child.label:child.key}
                                    {context.activedSub.has(child.key)}
                                </span>
                                {/*箭头*/}
                                {
                                    child.type==="SubMenu"&&(mode==="horizontal"||mode==="vertical")&&
                                    <i className={classnames("arrow-right", "sub-menu-popup-item-arrow")}></i>
                                }
                                {
                                    child.type==="SubMenu"&&mode==="inline"&&
                                    <i className={classnames(
                                        "sub-menu-popup-item-arrow",
                                        {
                                            "arrow-top":!context.activedSub.has(child.key),
                                            "arrow-bottom":context.activedSub.has(child.key)
                                        }
                                    )}></i>
                                }
                            </div>
                            {
                                child.type==="SubMenu"&&
                                <Popup
                                    index={index}
                                    depth={props.depth+1}
                                    path={child.path}
                                    name={child.key}
                                    children={child.children}
                                    actived={context.activedSub.has(child.key)}
                                />
                            }
                        </li>
                })
            }
        </ul>
    )
}

const SubMenu:React.FC<SubMenuPropTypes>=(props:SubMenuPropTypes):React.ReactElement=>{
    const context = React.useContext(MenuContext);
    const [ actived,setActived ] = React.useState<boolean>(false);//是否展开
    const [ selectd,setSelected] = React.useState<boolean>(false);//是够被选中
    const multiple = useRecoilValue(MenuMultipleState);
    const subMenuCloseDelay = useRecoilValue(MenuSubMenuCloseDelay)
    const mode = useRecoilValue(MenuModeState);
    const theme = useRecoilValue(MenuThemeState);
    const triggerSubMenuAction = useRecoilValue(MenuTriggerSubMenuActionState);
    const openable=useRecoilValue(MenuOpenableState);
    const [label,setLabel] =  React.useState(props.label||"MenuItem");
    const children = compileToReactComponent(props.children);
    const timer = React.useRef(null);
    React.useEffect(():void=>{
        setActived(():boolean=>{
            let status:boolean=context.activedSub.has(props.name)
            return status
        })
    },[
        context.activedSub,
        props.name,
        setActived,
    ])
    React.useEffect(():void=>{
        setSelected(():boolean=>{
            let status:boolean=context.selectedSub.has(props.name)
            return status
        })
    },[
        context.selectedSub,
        setSelected,
        props.name
    ])

    //鼠标点击事件
    const MouseClick:(e:any)=>void=React.useCallback((e:any)=>{
        if(typeof props.onTitleClick === "function"){
            props.onTitleClick({
                key:props.name,
                domEvent:e
            })
        }
        if(!openable)return
        if(mode==="inline"){
            if(!actived) context.open(props.name,true);
            else context.cancleOpen(props.name);
        } else if(triggerSubMenuAction==="click") {
            context.open(props.name,true);
        }
    },[
        props.onTitleClick,
        props.name,
        triggerSubMenuAction,
        actived,
        mode,
        openable,
        context.open,
        context.cancleOpen
    ])
    //鼠标移入事件
    const MouseEnter:()=>void=React.useCallback(()=>{
        if(!openable)return
        if(mode==="inline")return
        if(
            triggerSubMenuAction==="hover"||
            (triggerSubMenuAction==="click"&&actived)
        ){
            if(timer.current)
                clearTimeout(timer.current)
            context.open(props.name,true);
        }
    },[
        openable,
        actived,
        triggerSubMenuAction,
        mode,
        timer.current,
        context.open
    ])
    //鼠标出去触发的事件
    const MouseLeave:()=>void=React.useCallback(()=>{
        if(!openable)return
        if(mode==="inline") return
        timer.current=setTimeout(
            ()=>{
                timer.current=null;
                context.cancleOpen(props.name);
                },
            subMenuCloseDelay)
    },[
        context.cancleOpen,
        subMenuCloseDelay,
        timer.current,
        mode,
        openable
    ])
    return(
            <li className={
                classnames(
                    "sub-menu",
                    `sub-menu-${theme}`,
                    {
                        [`sub-menu-${theme}-selected`]:selectd
                    }
                )}
                onMouseLeave={MouseLeave}
                onMouseEnter={MouseEnter}
            >
                <div className={classnames({"sub-menu-titleContainer":mode==="inline"})} onClick={(e:any)=>MouseClick(e)}>
                <span className={classnames("sub-menu-title")}>
                    {label}
                </span>
                    {/*横版的选择条*/}
                    {
                        theme==="light"&&mode==="horizontal"?
                            <div className={
                                classnames(
                                    "after",
                                    {
                                        "after-active":actived,
                                        "after-selected":selectd
                                    })
                            }></div>:null
                    }
                    {/*箭头*/}
                    {
                        mode==="vertical"&&
                        <i className={classnames("arrow-right", "sub-menu-arrow")}></i>
                    }
                    {
                        mode==="inline"&&
                        <i className={classnames(
                            "sub-menu-arrow",
                            {
                                "arrow-top":!actived,
                                "arrow-bottom":actived
                            }
                        )}></i>
                    }
                </div>
                <Popup
                    path={props.path}
                    actived={actived}
                    name={props.name}
                    children={props.children}
                    depth={1}
                />
            </li>
    )
}
export {
    SubMenuPropTypes
}
export default React.memo(SubMenu);
