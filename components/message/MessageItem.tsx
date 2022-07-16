import * as React from 'react';
import useTimeout from '../_util/hooks/useTimeout';
export interface ItemProps {
    content: string;
    type: MessageType;
    duration: number;
}
export type MessageType = "success" | "error" | "info" | "loading" | "warn";
const MsgIcon = (props: { type: MessageType }) => {
    if (props.type === "info")
        return <span className={"msg-icon"}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="850" width="16" height="16">
                <path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m32 704h-64v-64h64v64z m-64-128V256h64v384h-64z" fill="#1296db" p-id="851">
                </path>
            </svg>
        </span>
    if (props.type === "success")
        return <span className={"msg-icon"}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="994" width="16" height="16">
                <path d="M512.3 960.5c-247.5 0-448.1-200.6-448.1-448.1S264.8 64.2 512.3 64.2s448.1 200.6 448.1 448.1-200.6 448.2-448.1 448.2z m252.6-587.1c-8.8-8.7-22.9-8.7-31.7 0L463.8 642.8 321.2 500.2c-8.8-8.8-22.9-8.8-31.7 0-8.7 8.8-8.7 22.9 0 31.7L448 690.3c8.8 8.7 22.9 8.7 31.7 0l285.2-285.2c8.7-8.8 8.7-23 0-31.7z" fill="green" p-id="995">
                </path>
            </svg>
        </span>
    if (props.type === "error")
        return <span className={"msg-icon"}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1138" width="20" height="20">
                <path d="M512 32C251.4285715625 32 32 251.4285715625 32 512s219.4285715625 480 480 480 480-219.4285715625 480-480-219.4285715625-480-480-480z m205.7142853125 617.142856875c20.5714284375 20.5714284375 20.5714284375 48 0 61.714286249999994-20.5714284375 20.5714284375-48 20.5714284375-61.714285312499996 0l-137.142856875-137.1428578125L374.857143125 717.7142853125c-20.5714284375 20.5714284375-48 20.5714284375-68.5714284375 0s-20.5714284375-54.857143125 0-68.5714284375l144-144-137.1428578125-137.142856875c-20.5714284375-13.714285312500001-20.5714284375-41.142856875 0-61.714285312499996 20.5714284375-20.5714284375 48-20.5714284375 61.714286249999994 0l137.142856875 137.142856875 144-144c20.5714284375-20.5714284375 48-20.5714284375 68.5714284375 0 20.5714284375 20.5714284375 20.5714284375 48 0 68.5714284375L580.5714284375 512l137.142856875 137.142856875z" fill="#d81e06" p-id="1139">
                </path>
            </svg>
        </span>
    if (props.type === "warn")
        return <span className={"msg-icon"}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="882" width="20" height="20">
                <path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m32 704h-64v-64h64v64z m-64-128V256h64v384h-64z" fill="#f4ea2a" p-id="883">
                </path>
            </svg>
        </span>
    //loadingIcon
    return <span>

    </span>
}
const MessageItem: React.FC<ItemProps> = React.memo((props: ItemProps)=> {
    const rmItem=React.useCallback(()=>{
        
    },[])
    const timeout=useTimeout(rmItem,props.duration);
    return <div className='msg-row'>
    <div className='msg-item'>
        <MsgIcon type={props.type} />
        <span className={"msg-text"}>{props.content}</span>
    </div>
</div>
})
export default MessageItem;