import * as React from 'react';
import classNames from 'classnames';
import LoadingIcon from "./LoadingIcon";
type ButtonType="primary"|"default"|"dashed"|"text"|"link";
type ButtonShape="default"|"circle"|"round";
type ButtonSize="small"|"default"|"large";
//Button配置
interface ButtonProps{
    type?:ButtonType;
    shape?:ButtonShape;
    size?:ButtonSize;
    block?:boolean;
    danger?:boolean;
    disabled?:boolean;
    loading?:boolean;
    children:React.ReactNode;
    [otherprops: string]: any;
}
//Button事件
interface ButtonEvents{
    onClick?:React.MouseEventHandler<HTMLElement>;
}
//图标节点
const IconNode:React.FC<ButtonProps>=React.memo(()=>{
    return (
        <div>IconNode</div>
    )
})
//链接节点
const LinkNode:React.FC<ButtonProps&ButtonEvents>=React.memo((props:ButtonProps&ButtonEvents):React.ReactElement=>{
    const {
        type,
        shape,
        size,
        block,
        danger,
        disabled,
        children,
        onClick,
        loading,
        ...otherprops
    }=props
    const [ buttontype,setButtontype]=React.useState(type===undefined||type===null?"default":type)
    const [ buttonsize,setButtonsize]=React.useState(size==="default"||size===undefined||size===null?"default":(size==="large"?"lg":"sm"))
    const [ baseclass,setBaseclass]=React.useState(`link${buttonsize==="default"?"":`-${buttonsize}`}`);
    const clickCallback=React.useCallback((event:any):void=>{
        let cb:Function=():void=>{}
        if(disabled||loading){
            cb=(e:any):void=>{
                e.preventDefault();
            }
        }else if(typeof onClick==="function"){
            cb=onClick;
        }
        cb(event)
    },[disabled,loading,onClick])
    const classes=classNames({
        [baseclass]:!disabled,
        "link-disabled":disabled,
        "link-danger":danger,
        "loading":loading
    })
    return (
        <>
            {
                loading&&<LoadingIcon danger={danger} type={type} disabled={disabled}></LoadingIcon>
            }
            <a className={classes} {...otherprops} onClick={clickCallback}>{children}</a>
        </>
    )
})
//文本节点
const TextNode:React.FC<ButtonProps&ButtonEvents>=React.memo((props:ButtonProps&ButtonEvents):React.ReactElement=> {
    const {
        type,
        shape,
        size,
        block,
        danger,
        disabled,
        onClick,
        children,
        loading,
        ...otherprops
    }=props
    const [buttontype,setButtontype]=React.useState(type===undefined||type===null?"default":type)
    const [buttonsize,setButtonsize]=React.useState(size==="default"||size===undefined||size===null?"default":(size==="large"?"lg":"sm"))
    const [baseclass,setButtonclass]=React.useState(`text${buttonsize==="default"?"":`-${buttonsize}`}`);
    const clickCallback=React.useCallback((event:any):void=>{
        let cb:Function=():void=>{}
        if(typeof onClick==="function"&&!disabled&&!loading){
            cb=onClick;
        }
        cb(event);
    },[disabled,loading,onClick])
    const classes=classNames({
        [baseclass]:!disabled,
        "text-disabled":disabled,
        "text-danger":danger,
        "loading":loading
    })
    return(
        <>
            {
                loading&&<LoadingIcon danger={danger} type={type} disabled={disabled}></LoadingIcon>
            }
            <span className={classes} {...otherprops} onClick={clickCallback}>{children}</span>
        </>
    )
})
//按钮节点
const ButtonNode:React.FC<ButtonProps&ButtonEvents>=React.memo((props:ButtonProps&ButtonEvents):React.ReactElement=>{
    const {
        type,
        shape,
        size,
        block,
        danger,
        disabled,
        loading,
        children,
        onClick,
        ...otherprops
    }=props
    const [buttontype,setButtontype]=React.useState(type===undefined||type===null?"default":type)
    const [buttonshape,setButtonshape]=React.useState(shape==="default"||shape===undefined||shape===null?"rect":shape)
    const [buttonsize,setButtonsize]=React.useState(size==="default"||size===undefined||size===null?"default":(size==="large"?"lg":"sm"))
    const [baseclass,setBaseclass]=React.useState(`btn-${buttontype}-${buttonshape}${buttonsize==="default"?"":`-${buttonsize}`}`);
    const clickCallback=React.useCallback((event:any)=>{
        let cb:Function=():void=>{}
        if(typeof onClick==="function"&&!disabled&&!loading){
            cb=onClick;
        }
        cb(event)
    },[disabled,loading,onClick])
    const classes=classNames(baseclass,{
        "btn-primary-hover":!loading&&!disabled&&type==="primary",
        "btn-white-hover":!loading&&!disabled&&!danger&&(buttontype==="default"||buttontype==="dashed"),
        "btn-disabled":disabled,
        [`btn-${buttontype}-danger`]:danger,
        "block":block,
        "loading":loading
        })
    return(
        <button className={classes} {...otherprops} onClick={clickCallback}>
            {
                loading&&<LoadingIcon danger={danger} type={type} disabled={disabled}></LoadingIcon>
            }
            {children}
        </button>
    )
})
const Button:React.FC<ButtonProps&ButtonEvents>=(props:ButtonProps&ButtonEvents):React.ReactElement=>{
    const {
        type,
        shape,
        size,
        block,
        danger,
        disabled,
        loading,
        children
    }=props
    if(type==="link"){
        return <LinkNode {...props}>{children}</LinkNode>
    }
    if(type==="text"){
        return <TextNode {...props}>{children}</TextNode>
    }
   return <ButtonNode {...props}></ButtonNode>
}
export default React.memo(Button);


