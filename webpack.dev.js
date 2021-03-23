const config = require("./webpack.config");
const { merge } = require("webpack-merge");

const fs = require('fs');

module.exports = merge(config, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    https: {
      key: fs.readFileSync('./localhost+2-key.pem'),
      cert: fs.readFileSync('./localhost+2.pem'),
    }
  },
})