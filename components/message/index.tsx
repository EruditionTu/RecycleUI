import * as React from 'react';
import ReactDom from "react-dom";
import MessageItem, { MessageType, ItemProps } from './MessageItem';
interface Message {
    success: (msgInfo: MessageParams) => void;
    error: (msgInfo: MessageConfig) => void;
    info: (msgInfo: MessageConfig) => void;
    warn: (msgInfo: MessageConfig) => void;
    loading: (msgInfo: MessageConfig) => void;
};
const message: Message = {
    success: () => { },
    error: () => { },
    info: () => { },
    warn: () => { },
    loading: () => { }
};
export interface MessageParams{
    content:MessageType;
    duration?:number;
    onClose?:()=>void;
}
export interface MessageConfig {
    duration?: number;//默认自动关闭的时间
    maxCount?: number;//最大显示数量，超过限制时，最早的信息会被自动关闭
    top?: number;//消息距离顶部的距离
}
export type MessageList = Array<ItemProps>;
const MessageContainer = () => {
    const [duration,setDuration]=React.useState(3)
    const [msgList, setMsgList] = React.useState<MessageList>([{
        type: "success",
        content: "message",
        duration:duration
    }]);
    //添加Message
    const addMessage = React.useCallback((msgItem: ItemProps) => {
        setMsgList((oldItem: MessageList): MessageList => {
            oldItem.unshift(msgItem);
            return [...oldItem]
        })
    }, [setMsgList])
    //移除Message
    const rmvMessage = React.useCallback(() => {
        setMsgList((oldItem: MessageList): MessageList => {
            oldItem.pop();
            return [...oldItem]
        })
    }, [setMsgList])
    //添加Success
    const addSuccess = React.useCallback((msg: MessageParams) => {
        addMessage({
            type: 'success',
            content: msg.content,
            duration:duration
        })
    }, [addMessage])
    // 添加Info
    // const addInfo = React.useCallback((content: MessageType) => {
    //     addMessage({
    //         type: 'info',
    //         content: content
    //     })
    // }, [addMessage])
    // //添加error
    // const addError = React.useCallback((content: MessageType) => {
    //     addMessage({
    //         type: 'error',
    //         content: content
    //     })
    // }, [addMessage])
    // //添加warn
    // const addWarn = React.useCallback((content:MessageType)=>{
    //     addMessage({
    //         type: 'warn',
    //         content: content
    //     })
    // },[addMessage])
    // //添加loading
    // const addLoading = React.useCallback((content:MessageType)=>{
    //     addMessage({
    //         type: 'warn',
    //         content: content
    //     })
    // },[addMessage])
    message.success=addSuccess;
    return <div className='msg-box'>
        {
            msgList.map((msgItem: ItemProps): React.ReactElement => {
                return <MessageItem content={msgItem.content} duration={msgItem.duration} type={msgItem.type}></MessageItem>
            })
        }
    </div>
}
//检查页面上是不是含有message容器,没有的话加上
function initMessageContainer() {
    let messageContainer = document.getElementById("recycleui-message-container");
    if (messageContainer) return;
    //不存在容器那么进行创建
    messageContainer = document.createElement('div');
    messageContainer.id = 'recycleui-message-container';
    document.body.appendChild(messageContainer);
    //将react组件挂载到dom上面
    ReactDom.render(<MessageContainer></MessageContainer>, messageContainer)
    return
}
initMessageContainer()
export default message;