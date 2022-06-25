let randomKey:(count:number)=>string;
/**
 * 生成随机字母和数字拼接字串
 * @param {*} param0.count 生成字串数量, 默认100个
 * @returns
 */
randomKey=(count:number):string=>{
    const res = new Set();
    for (let i = 0; i < count; i++) {
        // 获取5位有效随机整数
        const random = parseInt(Math.random().toString().substring(2), 10)
            .toString()
            .substring(0, 5);
        // 获取时间戳
        const now = Date.now();
        // 生成拼接数字字串
        const code = parseInt(random + now.toString() + i.toString(), 10)
            .toString(36)
            .toUpperCase();
        // 如果重复, 再生成一次
        if (res.has(code)) {
            i--;
            continue;
        }
        // 否则插入结果列表
        res.add(code);
    }
    // 返回结果
    return Array.from(res).join();
}
export default randomKey;
