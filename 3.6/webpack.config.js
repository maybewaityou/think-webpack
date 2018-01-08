const path = require('path');

module.exports = {
  entry: './main',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: 'source-map',
  resolve: {
    alias:{
      'react$': '/path/to/react.min.js'
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
