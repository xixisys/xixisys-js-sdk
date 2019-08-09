const webpack = require('webpack')
const path = require('path')

module.exports = env => {
  const apiKey = env.API_KEY || ''

  return {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    plugins:[
      new webpack.DefinePlugin({
        'process.env.API_KEY': JSON.stringify(apiKey)
      })
    ]
  }
}
