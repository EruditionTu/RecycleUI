import * as React from 'react';
import Process from '../';
import Button from '../../button';
import '../../button/style';
import "../style"
export default  ()=>{
    const [process,setProcess]=React.useState(50)
    return<>
        <h3>显示进度数字</h3>
        <br/>
        <Button type={"primary"} onClick={
            ()=>{
                setProcess(_process=>_process+10)
            }
        }>进度增加</Button>
        <Process percent={process} ></Process>
        <br/>
        <h3>不显示进度数字</h3>
        <Process percent={70} showInfo={false}/>
        <br/>
        <h3>更改Linear进度条的宽度</h3>
        <Process percent={20} strokeWidth={50}></Process>
        <br/>
        <h3>success版本的Linear进度条</h3>
        <Process percent={50} status={"success"} ></Process>
    </>
}
