const merge=require("webpack-merge");
const path=require("path");
const chalk=require("chalk");
const webpack=require("webpack");
const ProgressBarPlugin=require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports=merge({
    entry:path.resolve(process.cwd(),"src/index.js"),
    output:{
        path:path.resolve(process.cwd(),"build"),
        filename:"[name].js",
        chunkFilename:"[name].chunk.js",
        publicPath:"/"
    },
    devtool:"inline-source-map",
    mode:process.env.NODE_ENV,
    module:{
        rules:[
            {
                //配置babel
                test:/\.(js|jsx)$/,
                exclude:/\node_modules/,
                use:["babel-loader"]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ProgressBarPlugin({
            format:"build [:bar] " + chalk.green.bold(":percent") + " (:elapsed seconds)"
        }),
        new HtmlWebpackPlugin({
            template:"src/index.html",
            inject:true
        })
    ]
});