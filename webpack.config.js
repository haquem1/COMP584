var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});
const htmlWebpack = new HtmlWebpackPlugin({
  title:'Swish',
  template: __dirname + '/src/index.html',
  inject: 'body'
});

module.exports = {

  entry:{
    app:'./src/index.js',
    vendor:['react','react-dom']
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {//babel transpiler
        test: /\.jsx$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      },
      {//SASS support, and extract the css into another file
        test: /\.scss$/,
        exclude:/node_modules/,
        use: extractSass.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ],
          fallback: 'style-loader'
        })
      },
      {//support image loading in webpack
        test: /\.(png|svg|jpg|gif)$/,
        exclude:/node_modules/,
        use:['file-loader']
      },
      {//loading fonts
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        exclude:/node_modules/,
        use:['file-loader']
      }

    ]
  },

  plugins: [
    extractSass,
    htmlWebpack
  ]
};