const path = require('path')
const suitcss = require('suitcss-preprocessor')
const webpack = require('webpack')
const config = require('./config')
const url = require('url')

module.exports = {
  entry: path.join(__dirname, 'client', 'client.js'),
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: url.parse(config.get('staticUrl')).path,
    filename: 'client.bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      staticUrl: config.get('staticUrl')
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/, // may apply this only for some modules
      options: {
        postcss () {
          return [suitcss]
        }
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  }
}
