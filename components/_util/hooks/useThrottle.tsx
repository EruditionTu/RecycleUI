import {useEffect, useRef, useCallback } from 'react'
let useThrottle:(fn:Function,delay:number,dep:Array<any>)=>Function
useThrottle=(fn:Function,delay:number,dep:Array<any>):Function=>{
    const { current } =useRef({
        fn,
        timer:null
    })
    useEffect(()=>{
        current.fn=fn
    },[fn])
    return useCallback((...args)=>{
        if(!current.timer){
            current.timer=setTimeout(()=>{
                delete  current.timer
            })
        }
        current.fn.call(this,...args)
    },dep)
}
export default useThrottle;
