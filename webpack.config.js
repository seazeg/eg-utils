const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'egUtils.js',
    path: path.resolve(__dirname, 'dist'),
    library: "egUtils",
    libraryTarget: "umd"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
    ],
    minimize:false
  }
};