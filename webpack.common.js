const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/scripts/writeSomething.js',
    more: './src/scripts/writeSomething.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'    
  },
  plugins: [
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};