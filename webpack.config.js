const suitcss = require('suitcss-preprocessor')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/static/',
    filename: 'client.bundle.js'
  },
  plugins: [
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
