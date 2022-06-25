import * as React from "react";
let clamp:(value:number,slides:Array<React.ReactNode>)=>number;
clamp=(value:number,slides:Array<React.ReactNode>):number=>{
    const maxValue:number = slides?slides.length-1:-1;
    if(value>maxValue)return maxValue;
    if(value<0)return 0;
    return value
}

export default clamp;
