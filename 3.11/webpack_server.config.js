const path = require('path');
const nodeExternals = require('webpack_node_externals');

module.exports = {
  entry: './index',
  target: 'node',
  externals: [ nodeExternals() ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle_server.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: ['ignore-loader']
      }
    ]
  }
};
