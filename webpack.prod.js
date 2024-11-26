const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, "src/scripts/sw.js"),
      swDest: "./sw.bundle.js"
    }),
    new MiniCssExtractPlugin({
      filename: 'app.bundle.css'
    }),
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerWebpackPlugin({
        minimizer: {
          implementation: ImageMinimizerWebpackPlugin.imageminMinify,
          options: {
            plugins: [
              'imagemin-mozjpeg',
              'imagemin-pngquant'
            ],
          },
        },
      }),
    ],
  },
  
});