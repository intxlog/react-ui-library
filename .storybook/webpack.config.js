module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          }
        ]
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
      },
      {
        test: /\.(?:jpe?g|gif|png|wav|mp3)$/,
        loader: 'file-loader?name=[name]-[hash].[ext]'
      },
    ]
  }
}