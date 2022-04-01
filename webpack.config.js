const HtmlWebPackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  output:{
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
    }),
  ],
  module: {
    rules:[
      {

        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: () => [
                require("autoprefixer")()
              ],
            },
          },
          'sass-loader',
        ]
      }
    ],
  },
};
