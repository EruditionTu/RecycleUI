import randomKey from "./randomKey";
//构建Item的路径，并同时将不同Item和不同Sub的key区分开
//新需求：加一个相同key产生的warning
let buildPath:(
    objectArray:Array<any>,
    prePath?:Array<string>,
    itemKeySet?:Set<string>,
    subKeySet?:Set<string>
)=>void;
buildPath=(
    objectArray:Array<any>,
    prePath:Array<string>=new Array(),
    itemKeySet:Set<string>=new Set<string>(),
    subKeySet:Set<string>=new Set<string>(),
):void =>{
    objectArray.forEach((item:any,index:number):void=>{
        let key:string =typeof item.key ==="string"? item.key : randomKey(100);
        if(item.type==="MenuItem"){
            if(itemKeySet.has(key)){
                key = key + randomKey(100);
            }else {
                itemKeySet.add(key)
            }
            const path:Array<string>=[...prePath,key];
            item.path=path;
        }else if(item.type==="SubMenu"){
            if(subKeySet.has(key)){
                key = key + randomKey(100);
            }else {
                subKeySet.add(key)
            }
            const path:Array<string>=[...prePath,key];
            item.path=path;
            buildPath(item.children,[...prePath,key],itemKeySet,subKeySet)
        }
        item.key=key;
    })
    return;
}
export default buildPath;
