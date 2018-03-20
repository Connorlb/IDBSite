const webpack = require('webpack');

module.exports = {
entry: [
  './src/index.js'
],
output: {
  path: __dirname + '/static',
  filename: 'bundle.js',
},
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
	presets: ['es2015', 'react']
      }
    },
  ],
},
plugins: [
]
};
