import * as React from 'react';
import Button from '../button';
import "../style";
export default ()=>{
    return (
        <>
            <Button type="primary" onClick={()=>{
                alert("hellow world")
            }} >
                Primary Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type="link" href={"https://github.com/Tu-Bowen"} danger>
                Link Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"text"} onClick={()=>{
                alert("hellow world")
            }}>
                Text Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"primary"} onClick={()=>{
                alert("AAA")
            }} size={"large"} shape={"circle"}>
                A
            </Button>
        </>
    )
}
