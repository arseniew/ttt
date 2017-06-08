const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, 'dist')
    ],
    compress: true,
    port: 9000
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'static/index.html'}
    ])
  ]
}
