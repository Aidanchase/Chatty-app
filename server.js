var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");
const express = require("express");
const WsServer = require("ws").Server;
const server = express();


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
})
  .listen(3000, "0.0.0.0", function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log("Running at http://0.0.0.0:3000");
  });
  
