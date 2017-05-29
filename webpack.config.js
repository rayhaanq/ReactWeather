const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: {
    app: './app/app.jsx'
},
  output: {
    path: path.resolve(__dirname),
    filename: './public/bundle.js'
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Navigation: path.resolve(__dirname, 'app/components/Navigation.jsx'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      Apixu: path.resolve(__dirname, 'app/api/Apixu.jsx')
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
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: "/public"
        })
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    Tether: "tether",
    "window.Tether": "tether",
    Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
    Button: "exports-loader?Button!bootstrap/js/dist/button",
    Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
    Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
    Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
    Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
    Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
    Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    Util: "exports-loader?Util!bootstrap/js/dist/util",
  }),
    new ExtractTextPlugin({
      filename: "./public/main.css",
      disable: false,
      allChunks: true

    }),
    new webpack.ProvidePlugin({
      "window.Tether": "tether"
    })
]

};
