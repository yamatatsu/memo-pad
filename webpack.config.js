const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    // for hot module replacement
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',

    './src/index.js',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
  },

}
