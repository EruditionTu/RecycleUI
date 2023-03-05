const { resolve } = require('path');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCommonConfig = require('./webpack.common');
const ComponentsEntry = require("./components.json")

const basePath = resolve(__dirname, '..');


for(key in ComponentsEntry){
  ComponentsEntry[key]=resolve(basePath, ComponentsEntry[key]+'\\'+"index.tsx")
}


module.exports = merge(WebpackCommonConfig, {

  entry: {
    loader:{
      import:resolve(basePath,'packages/loader/index.tsx'),
    },
    button:{
      import:resolve(basePath,'packages/button/index.tsx'),
      dependOn:['loader']
    },
    message:{
      import:resolve(basePath,'packages/message/index.tsx'),
      dependOn:["loader"]
    },
    index: {
      import: resolve(basePath, 'packages/index.tsx'),
      filename: 'index.js',
      dependOn:["button","message","loader"]
    },
    // ...ComponentsEntry
  },
  output: {
    clean:true,
    path: resolve(basePath, 'es'),
    environment: { module: true },
    filename: '[name]/index.js',
    library: {
      type: 'module',
    },
  },
  plugins:[
    new MiniCssExtractPlugin({ filename: (content)=>{
    if(content.chunk.name==="index"){
      return "index.css"
    }
    return  '[name]/index.css'
    } 
  }),
  ],
  externals:{
    lodash:{
      module:'lodash'
    }
  },
  experiments: {
    outputModule:true
  },
});
