import * as React from "react";
import classnames from "classnames";
import {
    ResetRecoilState,
    useRecoilState,
    RecoilRoot
} from "recoil";

import MenuContext from "./MenuContext";

import {
    MenuModeState,
    MenuThemeState,
    MenuMultipleState,
    MenuOpenableState,
    MenuSelectableState,
    MenuInlineIndentState,
    MenuSubMenuCloseDelay,
    MenuSubMenuOpenDelay,
    MenuTriggerSubMenuActionState
} from "./state/MenuAtoms";
import {
    compileToReactComponent,
    ItemType
} from "./tools/compileToReactComponents";
import buildPath from "./tools/buildPath";
import {
    MenuAttributesType,
    MenuEventsType,
    ItemObject
} from "./types/MenuTypes";

type MenuType=MenuEventsType&MenuAttributesType;

const Menu:React.FC<MenuType>=(props:MenuType):React.ReactElement=>{
    buildPath(props.items)
    const children= props.items&&compileToReactComponent(props.items);
    const [selectedItems,setSelectedItems]=React.useState<Set<string>>(new Set<string>());//被选择的item
    const [activedSub,setActivedSub]=React.useState<Set<string>>(new Set<string>());//被展开的Sub
    const [selectedSub,setSelectedSub]=React.useState<Set<string>>(new Set<string>());//被选择的Sub
    const [selectedSubPath,setSelectedSubPath]=React.useState<Set<string>>(new Set<string>());//被选择的SubPath

    const [menuMode,setMenuMode] = useRecoilState(MenuModeState);
    const [subMenuCloseDelay,setSubMenuCloseDelay] = useRecoilState(MenuSubMenuCloseDelay);
    const [subMenuOpenDelay,setSubMenuOpenDelay] = useRecoilState(MenuSubMenuOpenDelay);
    const [menuTheme,setMenuTheme] = useRecoilState(MenuThemeState);
    const [menuMultiple,setMenuMultiple] = useRecoilState(MenuMultipleState);
    const [menuSelectable,setMenuSelectable] = useRecoilState(MenuSelectableState);
    const [menuTriggerSubMenuAction,setMenuTriggerSubMenuAction] = useRecoilState(MenuTriggerSubMenuActionState);
    const [menuInlineIndent,setMenuInlineIndent] = useRecoilState(MenuInlineIndentState);
    const [menuOpenable,setMenuOpenable] = useRecoilState(MenuOpenableState);
    //只有组件第一次加载的时候才会对selectedItem赋值
    React.useEffect(():void=>{
        if(Array.isArray(props.selectedKeys))
            return;
        setSelectedItems(
            Array.isArray(props.defaultSelectedKeys)?
                new Set<string>(props.defaultSelectedKeys.filter(x=>typeof x === "string")):
                new Set<string>()
        )
    },[])
    //只有组件第一次加载的时候才会对activedSub赋值
    React.useEffect(():void=>{
        if(Array.isArray(props.openKeys))
            return;
        setActivedSub(
            Array.isArray(props.defaultOpenKeys)?
                new Set<string>(props.defaultOpenKeys.filter(x=>typeof x === "string")):
                new Set<string>()
        )
    },[])
    //使用openKeys来控制sub的打开，就不能用其他方式触发
    React.useEffect(():void=>{
       if(Array.isArray(props.openKeys)){
           setMenuOpenable(false)
       }
    },[props.openKeys])
    //可以使用selectedKeys来控制被选择的Item
    React.useEffect(():void=>{
        if(!Array.isArray(props.selectedKeys))
            return;
        setSelectedItems(new Set<string>(props.selectedKeys.filter(x=>typeof x === "string")))
    },[props.selectedKeys])
    //可以使用openKeys来控制被选择的Sub
    React.useEffect(():void=>{
        if(!Array.isArray(props.openKeys))
            return;
        setActivedSub(new Set<string>(props.openKeys.filter(x=>typeof x === "string")))
    },[props.openKeys])
    //根据选择的Sub的path来确认哪些sub是应该被选择的
    React.useEffect(():void=>{
        setSelectedSub(():Set<string>=>{
            const subSet:Set<string> = new Set<string>();
            selectedSubPath.forEach((subPath:string):void=>{
                const path:Array<string> = JSON.parse(subPath);
                path.forEach((sub:string):void=>{
                    subSet.add(sub)
                })
            })
            return subSet;
        });
    },[selectedSubPath,setSelectedSubPath])


    React.useEffect(():void=>{
        if(typeof props.subMenuCloseDelay==="number"){
            setSubMenuCloseDelay(props.subMenuCloseDelay);
        }
    },[props.subMenuCloseDelay,setSubMenuCloseDelay])
    React.useEffect(():void=>{
        if(typeof props.subMenuOpenDelay==="number"){
            setSubMenuOpenDelay(props.subMenuOpenDelay);
        }
    },[props.subMenuOpenDelay,setSubMenuOpenDelay])
    React.useEffect(():void=>{
        if(
            props.mode==="vertical"||
            props.mode==="horizontal"||
            props.mode==="inline"
        )
            setMenuMode(props.mode);
    },[props.mode,setMenuMode])
    React.useEffect(():void=>{
        if(
            props.theme==="light"||
            props.theme==="dark"
        )
            setMenuTheme(props.theme);
    },[props.theme,setMenuTheme])
    React.useEffect(():void=>{
        if(Array.isArray(props.selectedKeys)){
            setMenuSelectable(false);
        }else if(typeof props.selectable === "boolean"){
           setMenuSelectable(props.selectable);
        }
    },[props.selectable,setMenuSelectable,props.selectedKeys])
    React.useEffect(():void=>{
        if(
            props.triggerSubMenuAction==="click"||
            props.triggerSubMenuAction==="hover"
        ){
            setMenuTriggerSubMenuAction(props.triggerSubMenuAction)
        }
    },[props.triggerSubMenuAction,setMenuTriggerSubMenuAction])

    //选择Item
    const selectItem:(keyName:string)=>void = React.useCallback((keyName:string):void=>{
        if(props.multiple){
            setSelectedItems((oldSelectedItems:Set<string>):Set<string>=>{
                oldSelectedItems.add(keyName);
                return new Set<string>(oldSelectedItems)
            })
        }else{
            setSelectedSubPath(new Set<string>());
            setSelectedItems(():Set<string>=>{
                const newSelectedItems:Set<string>=new Set<string>();
                newSelectedItems.add(keyName);
                return newSelectedItems
            })
        }
    },[props.multiple,props.items,setSelectedItems])
    //取消选择-仅多选可以使用
    const cancelSelectItem:(keyName:string)=>void = React.useCallback((keyName:string):void=>{
        if(props.multiple){
            setSelectedItems(oldSelectedItems=>{
                oldSelectedItems.delete(keyName);
                return new Set<string>(oldSelectedItems);
            })
        }
    },[props.multiple,setSelectedItems])
    //打开Sub
    const open:(keyName:string,multiple:boolean)=>void = React.useCallback((keyName:string,multiple:boolean):void=>{
        if(multiple){
            setActivedSub((oldActivedSub:Set<string>):Set<string>=>{
                oldActivedSub.add(keyName);
                if(typeof props.onOpenChange === "function")
                    props.onOpenChange(Array.from(oldActivedSub))
                return new Set<string>(oldActivedSub)
            })
        }else{
            setActivedSub(():Set<string>=>{
                const newActivedSub:Set<string>=new Set<string>();
                newActivedSub.add(keyName);
                if(typeof props.onOpenChange === "function")
                    props.onOpenChange(Array.from(newActivedSub))
                return newActivedSub
            })
        }
    },[setActivedSub,props.onOpenChange])
    //关闭某个key的Sub
    const cancelOpen:(keyName:string)=>void = React.useCallback((keyName:string):void=>{

        setActivedSub((oldActivedSub:Set<string>):Set<string>=>{
            oldActivedSub.delete(keyName);
            if(typeof props.onOpenChange === "function")
                props.onOpenChange(Array.from(oldActivedSub));
            return new Set<string>(oldActivedSub);
        })
    },[setActivedSub])
    //选择某个key的Sub
    const selectSubPath:(keyName:string)=>void = React.useCallback((keyName:string):void=>{
        if(props.multiple){//可以多选
            setSelectedSubPath((oldSelectedSubPath:Set<string>):Set<string>=>{
                oldSelectedSubPath.add(keyName);
                return new Set<string>(oldSelectedSubPath);
            })
        }else { //不能多选
            setSelectedSubPath((oldSelectedSubPath):Set<string>=>{
                const newSelectedSubPath:Set<string> = new Set<string>();
                newSelectedSubPath.add(keyName);
                return newSelectedSubPath;
            })
        }
    },[props.multiple,setSelectedSubPath])
    //不再选择某个key的Sub
    const cancelSelectSubPath:(keyName:string)=>void = React.useCallback((keyName:string):void=>{
        setSelectedSubPath((oldSelectedSubPath): Set<string> => {
            oldSelectedSubPath.delete(keyName);
            return new Set<string>(oldSelectedSubPath)
        })
    },[
        setSelectedSub
    ])
    return (
        <MenuContext.Provider value={{
            open:open,
            cancleOpen:cancelOpen,
            selectItem:selectItem,
            cancelSelectItem :cancelSelectItem,
            selectSubPath:selectSubPath,
            cancelSelectSubPath:cancelSelectSubPath,
            selectedItems:selectedItems,
            activedSub:activedSub,
            selectedSub:selectedSub,
            onClick:(typeof props.onClick === "function")?props.onClick: ():void=>{},
            onDeselect:(typeof props.onDeselect === "function")?props.onDeselect: ():void=>{},
            onOpenChange:(typeof props.onOpenChange === "function")?props.onOpenChange:():void=>{},
            onSelect:(typeof props.onSelect === "function")?props.onSelect:():void=>{},
        }}>
            <ul className={classnames(
                "menu",
                `${(
                    props.mode==="inline"||
                    props.mode==="horizontal"||
                    props.mode==="vertical")? props.mode:"horizontal"
                }-menu`,
                `menu-${(props.theme&&props.theme==="dark")?"dark":"light"}`
            )}
            >
                {
                    children.map((child:React.ReactNode,index:number):React.ReactElement=>{
                        return React.cloneElement(child as React.ReactElement,{
                            ...(child as React.ReactElement).props,
                            index:index
                        })
                    })
                }
            </ul>
        </MenuContext.Provider>
    )
}
const MenuWarpper:React.FC<MenuType>=(props:MenuType):React.ReactElement=> {
    return (
        <RecoilRoot>
            <Menu {...props}></Menu>
        </RecoilRoot>
    )
}
export default React.memo(MenuWarpper);
