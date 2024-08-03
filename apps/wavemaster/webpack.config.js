const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    mainFields: ['main'],
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
    new CopyWebpackPlugin({
      patterns: [
        { from: '.env' },
      ],
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  target: 'node',
};
