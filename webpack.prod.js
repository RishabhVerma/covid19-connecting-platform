const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new CompressionPlugin(),
    new webpack.DefinePlugin({ "process.env.API_URL": JSON.stringify("http://join.navgurukul.org/api/")})
  ]
});