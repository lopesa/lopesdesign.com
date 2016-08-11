var path = require("path");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./app/App.js",
  output: {
    // filename: "public/bundle.js",
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
}
