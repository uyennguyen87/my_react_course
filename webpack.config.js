var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port:3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: './styles',
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.css$/,
        include: './styles',
        loader: ['style', 'css']
      }
    ]
  },
  // plugins: [
       // new ExtractTextPlugin('app.css', {
       //     allChunks: true
       // })
  //   new ExtractTextPlugin('app.css')
  // ]
}