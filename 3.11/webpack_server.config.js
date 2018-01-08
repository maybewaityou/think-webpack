const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index',
  target: 'node',
  externals: [ nodeExternals() ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle_server.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
