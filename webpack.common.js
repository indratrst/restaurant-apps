const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

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
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      id: 'restaurant-list-lite-pwa-1',
      filename: 'app.webmanifest',
      start_url: './index.html',
      name: 'Restaurant List Lite',
      short_name: 'Restaurant List',
      description: 'Recomendation destination for you',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      publicPath: '/',
      icons: [
        {
          src: path.resolve('src/public/logos.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          purpose: 'any',
        },
        {
          src: path.resolve('src/public/logos.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
