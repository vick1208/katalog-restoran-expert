const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, "src/scripts/sw.js"),
      swDest: "./sw.bundle.js"
    }),
    new WebpackPwaManifest({
      id: "bon-app-pwa-1",
      start_url: "/",
      name: "Bon Appetit Restaurants Lite",
      short_name: "restaurant app",
      description: "Restaurant search App",
      display: "standalone",
      theme_color: "#1E293B",
      background_color: "#fffafa",
      icons: [
        {
          src: path.resolve(__dirname,'src/public/images/favicon-wb.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any'
        }
      ],
      publicPath: '/'
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