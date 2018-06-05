const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const port = 3001;
const ip = require("ip");
const chalk = require("chalk");
const host = 'localhost'; //使用默认的协议
const webpackHotMiddleware = require("webpack-hot-middleware");

let app = express();

let webpackConfig = require("../webpack/webpack.dev.config");

const comliper = webpack(webpackConfig);
const devMiddle = webpackDevMiddleware(comliper);

const fs = require("fs")

app.use(devMiddle);
app.use(webpackHotMiddleware(comliper));

// app.get("/", (req,res) =>{
//     fs.readFile(path.resolve(process.cwd(), "src/index.html"), (err,file) =>{
//         res.send(file.toString())
//     })
// })

app.listen(port, host, err => {
  console.log(`

Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}

${chalk.blue(`Press ${chalk.italic("CTRL-C")} to stop`)}
    `);
});


const openBrowser = require("react-dev-utils/openBrowser")

devMiddle.waitUntilValid(() =>{
    openBrowser(`http://${host}:${port}`)
})
