import { join } from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: join(__dirname, 'src/index.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: join(__dirname, 'src'),
      },
      {
        test: /\.vue$/,
        loader: 'vue',
        include: join(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'index.html'),
      inject: false,
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
};
