const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// pindahkan workbox webpack plugin ke sini jika ingin dilakukan pada semua mode
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');



module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]

      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      inject: 'body',
      minify: {
        minifyCSS: true,
        minifyJS: true,
      }
    }),
    
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/heros/*.jpg'],
          }
        },
      ],
    }),
    new CleanWebpackPlugin(),
    
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
    // all mode
    // new WorkboxWebpackPlugin.InjectManifest({
    //   swSrc: path.resolve(__dirname, "src/scripts/sw.js"),
    //   swDest: "./sw.bundle.js"
    // }),
  ],
};
