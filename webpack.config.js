const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const pkg = require('./package.json');

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
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
    ],
    // minimize:false
  },
  plugins: [
    new webpack.BannerPlugin(`${pkg.description} version ${pkg.version}\nAuthor Evan.G\nFor more information, please visit ${pkg.author.github}\n${pkg.description} is available under the terms of the MIT license.`)
  ]
  
};