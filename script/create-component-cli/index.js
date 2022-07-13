const fs = require('fs');
const componentName = process.argv[2];
const componentPath = 'components/' + componentName;
const createFileBox = (boxPath) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(boxPath, (error) => {
      if (error) {
        reject(error)
      } else {
        resolve(boxPath)
      }
    })
  })
}
const createFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath,"",(error) => {
      if (error) {
        reject(error)
      } else {
        resolve(filePath)
      }
    })
  })
}
(function () {
  try {
    if (fs.existsSync(componentPath)) {
      throw new Error("this component has been created");
    } else {
      createFileBox(componentPath).then(() => {
        createFile(`${componentPath}/index.tsx`)
        createFileBox(`${componentPath}/style`).then(() => {
          createFile(`${componentPath}/style/index.less`)
          createFile(`${componentPath}/style/index.tsx`)
        })
        createFileBox(`${componentPath}/demo`)
      })
    }
  } catch (error) {
    console.error(error)
  }
})()
