//创建组件和文档文件的一个简单的脚手架
const fs = require("fs");
const componentName = process.argv[2];
const componentPath = "components/" + componentName;
//创建文件夹
const createFileBox = (boxPath) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(boxPath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(boxPath);
      }
    });
  });
};
//创建文件
const createFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, "", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(filePath);
      }
    });
  });
};
const createDoc = () => {
  const docName = componentName[0].toUpperCase() + componentName.slice(1);
  console.log(docName);
  if (fs.existsSync(`docs/Components/${docName}`)) {
    console.log("component doc has been created");
    return;
  }
  createFile(`docs/Components/${docName}.md`)
    .then(() => {
      console.log("component document create success!");
    })
    .catch((err) => {
      console.log("component document create has some error!");
      console.error(err);
    });
};
createDoc();
(function () {
  try {
    if (fs.existsSync(componentPath)) {
      throw new Error("this component has been created");
    } else {
      createFileBox(componentPath).then(() => {
        createFile(`${componentPath}/index.tsx`).catch(() => {
          throw new Error(`fail to create file ${componentPath}/index.tsx `);
        });
        createFileBox(`${componentPath}/style`)
          .then(() => {
            createFile(`${componentPath}/style/index.less`).catch(() => {
              throw new Error(
                `fail to create file ${componentPath}/style/index.less `
              );
            });
            createFile(`${componentPath}/style/index.tsx`).catch(() => {
              throw new Error(
                `fail to create file ${componentPath}/style/index.tsx `
              );
            });
          })
          .catch(() => {
            throw new Error(`fail to create filebox ${componentPath}/style`);
          });
        createFileBox(`${componentPath}/demo`).catch(() => {
          throw new Error(`fail to create filebox ${componentPath}/demo`);
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
})();
