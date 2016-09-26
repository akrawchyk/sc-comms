const path = require('path')
const suitcss = require('suitcss-preprocessor')
const webpack = require('webpack')
const config = require('./config')
const url = require('url')

module.exports = {
  entry: [
    'whatwg-fetch',
    path.join(__dirname, 'client', 'client.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: url.parse(config.get('staticUrl')).path,
    filename: 'client.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  plugins: [
    new webpack.DefinePlugin({
      staticUrl: config.get('staticUrl')
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: {
          plugins: [suitcss()]
        }
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss'
      }
    ]
  }
}
