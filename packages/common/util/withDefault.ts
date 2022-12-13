/**
 * 检查数据是否包含在数据集中，如果包含在，那么返回这个数据，否则返回默认数据
 * @param data
 * @param dataSet
 * @param defaultData
 * @returns
 */
function withDefault(data: any, dataSet: Array<any>, defaultData: any) {
  if (
    !dataSet.find((item) => {
      return item === data;
    })
  )
    return defaultData;
  return data;
}
export default withDefault;
