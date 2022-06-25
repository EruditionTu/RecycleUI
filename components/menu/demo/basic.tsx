import * as React from "react"
import Menu from "../";
import "../style";
const items = [
    {
        label: '菜单项一',
        type:"MenuItem",
        key: 'item-1'
    }, // 菜单项务必填写 key
    {
        label: '菜单项二',
        type:"MenuItem",
        key: 'item-2',
    },
    {
        label: '子菜单',
        type:"SubMenu",
        key: 'submenu',
        onTitleClick:(e)=>{
            console.log(e)
        },
        children: [
            {
                label: 'bytedance',
                type:"MenuItem",
                key: 'item-14997497'
            },
            {
                label: 'tencent',
                type:"MenuItem",
                key: 'item-6568'
            },
            {
                label: 'alibaba',
                type:"SubMenu",
                key: 'alibaba',
                children:[
                    {
                    label: '蚂蚁',
                    type:"MenuItem",
                    key: 'item-1444'
                    },
                    {
                    label: '阿里云',
                    type:"MenuItem",
                    key: 'item-6564'
                    },
                    {
                        label: "淘宝",
                        type: "SubMenu",
                        key:"taobao",
                        children:[
                            {
                                label: '大淘宝',
                                type:"MenuItem",
                                key: 'adsdasfgjaf'
                            },
                            {
                                label: '陶特',
                                type:"MenuItem",
                                key: '464684868'
                            },
                        ]
                    }
                ]
            },
            {
                label: "Kuaishou",
                type: "SubMenu",
                key:"kuaishou",
                children:[{
                        label: '社科',
                        type:"MenuItem",
                        key: 'item-1561'
                    }, {
                        label: '快看点',
                        type:"MenuItem",
                        key: 'item-74791'
                    }]
            }],
    },
]
export default ()=>{
    const [arr,setArr]=React.useState([]);
    const [suba,setSuba]=React.useState([]);
    const [num,setNum]=React.useState(1)
    return (<>
        <button onClick={()=>{
            let a="item-"+num
            setArr([...arr,a])
            setNum(num+1)
        }}>
            select
        </button>
            <button onClick={()=>{
                setSuba(["submenu","submenu-item-1"])
            }}>
                open
            </button>
        <div style={{
            width:"250px"
        }}>
            <Menu  items={items} mode={"vertical"}  inlineIndent={10} theme={"dark"}
                   onSelect={(e)=>{
                       console.log(e)
                   }}
                   // onOpenChange={(e)=>{
                   //     console.log(e)
                   // }}
                   onDeselect={e=>{
                       console.log(e)
                   }}
                   subMenuCloseDelay={50}/>
        </div>
        </>
    )
}
