import * as React from 'react';
import * as ReactDom from "react-dom";
import useTimeout from '../_util/hooks/useTimeout';
import MessageItem, { MessageType, MsgItemProps } from './MessageItem';
//导出的消息对象接口
export interface Message {
    success: (msgInfo: string) => void;
    // error: (msgInfo: MessageConfig) => void;
    // info: (msgInfo: MessageConfig) => void;
    // warn: (msgInfo: MessageConfig) => void;
    // loading: (msgInfo: MessageConfig) => void;
};
// //导出对象的类
// export class MessageClass implements MessageInterface{
//     constructor(success) {
//         this.=success
//     }
//     success(){
//
//     }
// }
//导出的消息对象
let message: Message;
export interface MessageParams{
    content:MessageType;
    duration?:number;
    onClose?:()=>void;
}
// export interface MessageConfig {
//     duration?: number;//默认自动关闭的时间
//     maxCount?: number;//最大显示数量，超过限制时，最早的信息会被自动关闭
//     top?: number;//消息距离顶部的距离
// }

//MessgeContainer组件state的接口
export interface MessageContainerStateType{
    nodeList: Array<MsgItemProps>;
    activeIDList: Array<any>;
    rmvList:Array<number>;
    duration:number;
    delay:number;
}
//节点列表
export type MessageList = Array<MsgItemProps>;
// class MessageContainer extends React.Component<any,MessageContainerStateType>{
//     constructor(props) {
//         super(props);
//         this.state = {
//             nodeList: [],
//             activeIDList: [],
//             rmvList:[],
//             duration:360,
//             delay:3000
//         };
//         const addMessage = async (item:MsgItemProps) => {
//             let nodeNew = [...this.state.nodeList];
//             let id = new Date().getTime();
//             nodeNew.push({
//                 content:item.content,
//                 id:id,
//                 type:item.type,
//                 duration:item.duration,
//                 delay:item.delay
//             })
//             let newActiveIDList = [...this.state.activeIDList, id];
//             return new Promise((resolve)=>{
//                 this.setState({
//                     ...this.state,
//                     activeIDList: newActiveIDList,
//                     nodeList: nodeNew,
//                 },()=>{
//                     resolve(id);
//                 })
//             })
//         };
//         const removeMessage = async (id) => {
//             // let {
//             //     duration,
//             //     delay
//             // } = this.state.nodeList.find(item=>item.id===id);
//             const duration=150,delay=3000
//             console.log(this.state.nodeList.find(item=>item.id===id))
//             return new Promise((resolve, reject) =>{
//                 setTimeout(()=>{
//                     let newActiveIDList = this.state.activeIDList.filter(item=>item!==id)
//                     this.setState({
//                         ...this.state,
//                         activeIDList:newActiveIDList
//                     },()=>{
//                         let newNodeList = this.state.nodeList.filter(item => item.id !== id);
//                         setTimeout(() => {
//                             this.setState({
//                                 ...this.state,
//                                 nodeList: newNodeList,
//                             }, () => {
//                                 resolve(id)
//                             });
//                         }, duration);
//                     })
//                 },delay)
//             })
//         };
//         //创建一个success的message
//         const addSuccess=async (content)=>{
//             let lastIndex=await addMessage({
//                 type:"success",
//                 content:content,
//                 duration:this.state.duration,
//                 delay:this.state.delay
//             })
//             // const s=await removeMessage(lastIndex)
//             // console.log(s)
//             const rml=[...this.state.rmvList,Number(lastIndex)]
//             this.setState({
//                 ...this.state,
//                 rmvList:rml
//             },()=>{
//                 console.log(this.state.rmvList)
//                 console.log(this.state.nodeList)
//             })
//         }
//         message= {
//             success:addSuccess
//         }
//     }
//     render(){
//     return <div className='msg-box'>
//         {
//             this.state.nodeList.map((msgItem:MsgItemProps,msgIndex:number): React.ReactElement => {
//                 return <MessageItem
//                     index={msgIndex}
//                     key={msgIndex}
//                     id={msgItem.id}
//                     content={msgItem.content}
//                     duration={msgItem.duration}
//                     delay={msgItem.delay}
//                     type={msgItem.type}
//                     hidden={this.state.activeIDList.indexOf(msgItem.id)===-1}
//                 ></MessageItem>
//             })
//         }
//     </div>
//     }
// }
const MessageContainer = () => {
    const [duration,setDuration]=React.useState(3);
    const [delay,setDelay]=React.useState(1.5);
    const [msgList, setMsgList] = React.useState<MessageList>([]);
    const [preRemoveList,setPreRemoveList]=React.useState([])

    //维护一个预先删除队列，每次删除一个
    React.useEffect(()=>{
        if(preRemoveList.length===0)return
        setMsgList((oldList: MessageList): MessageList => {
            const targetId=preRemoveList.shift();
            const targetIdx=oldList.findIndex(item=>item.id===targetId)
            oldList.splice(targetIdx,1)
            return [...oldList]
        })
    },[preRemoveList,setMsgList])

    //添加Message
    const addMessage = React.useCallback((msgItem: MsgItemProps) => {
        setMsgList((oldList: MessageList): MessageList => {
            return [...oldList,msgItem]
        })
    }, [setMsgList])
    //移除Message，不是真正意义上的删除，而是加入预先删除队列
    const removeMessage = React.useCallback((id:number) => {
        setPreRemoveList((oldList)=>{
            return [...oldList,id]
        })
    }, [setPreRemoveList])
    //添加Success
    const addSuccess = React.useCallback((msg: string) => {
        addMessage({
            type: 'success',
            content: msg,
            duration:duration,
            id:new Date().getTime(),
            delay:delay
        })
    }, [addMessage])
    // // 添加Info
    // const addInfo = React.useCallback((msg: MessageParams) => {
    //     addMessage({
    //         type: 'info',
    //         content: msg.content,
    //         duration:duration
    //     })
    // }, [addMessage])
    // //添加error
    // const addError = React.useCallback((msg: MessageParams) => {
    //     addMessage({
    //         type: 'error',
    //         content: msg.content,
    //         duration:msg.duration
    //     })
    // }, [addMessage])
    // //添加warn
    // const addWarn = React.useCallback((msg: MessageParams)=>{
    //     addMessage({
    //         type: 'warn',
    //         content:msg.content,
    //         duration:msg.duration
    //     })
    // },[addMessage])
    // //添加loading
    // const addLoading = React.useCallback((msg: MessageParams)=>{
    //     addMessage({
    //         type: 'warn',
    //         content: msg.content,
    //         duration: msg.duration
    //     })
    // },[addMessage])
    message={
        success:addSuccess
    }
    // message.info=addInfo;
    // message.error=addError;
    // message.warn=addWarn;
    // message.loading=addLoading;
    return <div className='msg-box'>
        {
            msgList.map((msgItem: MsgItemProps,msgIndex:number): React.ReactElement => {
                return <MessageItem
                    id={msgItem.id}
                    key={msgItem.id}
                    content={msgItem.content}
                    duration={msgItem.duration}
                    type={msgItem.type}
                    delay={delay}
                    rmvMessage={removeMessage}
                    index={msgIndex}
                ></MessageItem>
            })
        }
    </div>
}
//检查页面上是不是含有message容器,没有的话加上
(function initMessageContainer() {
    let messageContainer = document.getElementById("recycleui-message-container");
    if (messageContainer) return;
    //不存在容器那么进行创建
    messageContainer = document.createElement('div');
    messageContainer.id = 'recycleui-message-container';
    document.body.appendChild(messageContainer);
    //将react组件挂载到dom上面
    ReactDom.render(<MessageContainer></MessageContainer>, messageContainer)
    return
})()
export default message;
