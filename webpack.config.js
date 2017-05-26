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
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      OpenWeatherMap: path.resolve(__dirname, 'app/api/OpenWeatherMap.jsx')
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
