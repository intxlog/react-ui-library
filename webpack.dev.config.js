const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  mode: 'production',
  entry: path.resolve(__dirname, 'src/lib/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          },
          require.resolve('sass-loader')
        ]
      }
    ]
  }
}