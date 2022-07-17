import * as React from 'react';
import message from "../";
import "../style";
import Button from "../../button";
import "../../button/style";
export default ()=>{
    const [id,setId]=React.useState(0)
    const openMessage=()=>{
        message.success({content:"看见你很高兴",type:"success"});
        setId(id+1)
    }
    return <Button type={"primary"} onClick={openMessage}> Display normal message</Button>
}
