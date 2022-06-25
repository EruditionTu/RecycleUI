import * as React from 'react';
import Button from '../button';
import "../style";
export default ()=>{
    const [loading,setLoading]=React.useState(false)
    return (
        <>
            <Button type={"primary"} size={"large"} loading onClick={()=>alert("你好")}>
                LoadingIcon Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"primary"} size={"large"} onClick={()=>alert("你好")}>
                LoadingIcon Button
            </Button>
            <br/>
            <br/>
            <Button type={"default"} size={"large"} loading>
                LoadingIcon Button
            </Button>
            <br/>
            <br/>
            <Button type={"dashed"} size={"large"} loading danger>
                LoadingIcon Button
            </Button>
            <br/>
            <br/>
            <Button type={"default"} loading danger shape={"circle"}>
                A
            </Button>
            <br/>
            <br/>
            <Button type={"dashed"} size={"small"} loading danger>
                LoadingIcon Button
            </Button>
            <br/>
            <br/>
            <Button type={"text"} size={"large"} loading danger>
                Text Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"text"} size={"large"} onClick={()=>alert("哈哈")} danger>
                Text Button
            </Button>
            <br/>
            <br/>
            <Button type={"link"} size={"large"} href={"https://github.com/Tu-Bowen"} loading danger>
                Link Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"link"} size={"large"} href={"https://github.com/Tu-Bowen"} danger>
                Link Button
            </Button>
            <br/>
            <br/>
            <Button type={"primary"} size={"large"} onClick={()=> {
                setLoading(true)
                setTimeout(()=>{
                    alert("你好")
                    setLoading(false)
                },3000)
            }} loading={loading}>
                tbwbutton
            </Button>
        </>
    )
}
