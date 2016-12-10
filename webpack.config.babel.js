const webpack = require('webpack');
const pascalCase = require('pascal-case');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const { name } = require('./package.json');
const NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin');

const DEBUG = process.env.NODE_ENV !== 'production';

const configs = {
  entry: {
    app: DEBUG === true ? [
      'webpack-dev-server/client?http://localhost:8080',
      './src/index',
    ] : ['./src/index'],
  },
  target: 'electron',
  output: {
    path: `${__dirname}/bundle/`,
    filename: `${name}.js`,
    publichPath: './bundle',
    library: pascalCase(name),
    libraryTarget: 'commonjs2',
  },
  externals: [
    'electron',
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: DEBUG === true ? ['babel'] : ['babel'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },
};

switch (process.env.NODE_ENV) {
  case 'production':
    configs.plugins = [
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ];
    configs.devtool = '';
    break;

  default:
    configs.plugins = [
      new LiveReloadPlugin({
        appendScriptTag: true,
        ignore: null,
      }),
    ];
    configs.devtool = 'inline-source-map';
    break;
}

configs.plugins.push(new NodeTargetPlugin());
configs.plugins.push(new ExtractTextPlugin('bundle.css'));
configs.plugins.push(new webpack.ExternalsPlugin('commonjs', ['electron']));

module.exports = configs;
