const WebpackEsmConfig = require("./build/webpack.esm")
const WebpackUmdConfig = require("./build/webpack.umd")
const WebpackCjsConfig =require("./build/webpack.cjs")

module.exports = (env,argv)=>{
    switch(argv.env.target){
        case "esm":return WebpackEsmConfig;
        case "umd":return WebpackUmdConfig;
        case "cjs":return WebpackCjsConfig;
    }
}
