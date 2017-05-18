const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './public/bundle.js'
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
    },
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'babel-preset-es2015', 'stage-0']
        },
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }

};
