// this function is used to check the data included in dataSet.
// if inclued return data
// otherwise return defaultData
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
