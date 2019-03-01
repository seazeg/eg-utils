const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: './src/index.ts',
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
    filename: 'eg-utils.js',
    path: path.resolve(__dirname, 'dist'),
    library: "egUtils",
    libraryTarget: "window"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
    ],
    // minimize:false
  }
};