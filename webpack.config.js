const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
//TODO: this file has simply been copied. Make it an actual library-bundle!
module.exports = {
  mode: 'production',
  entry: {
    main: "./src/index"
  },
	output: {
    filename: '[name].js',
    path: 'lib',
    libraryTarget: 'umd',
    path: path.resolve('dist')
  },
  resolve: {extensions: ['.json', '.css', '.scss', '.ts', '.tsx', '.js'],
		modules: ['src', 'node_modules'],
  },

  module: {
    rules: [ // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },{
        test: /\.tsx?$/,
        use: [{
          loader: "awesome-typescript-loader",
          query: {
            useBabel: true,
            useCache: true,
            babelCore: "@babel/core"
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              camelcase: true,
              namedExport: true,
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]"//_[hash:base64:8]" // '[local]' // "[name]--[local]--[hash:base64:8]"
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, // has separate config, see postcss.config.js nearby
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              camelcase: true,
              namedExport: true,
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: "[name]_[local]"//_[hash:base64:8]" // '[local]' // "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader",
          'sass-loader'
        ]
      },
    ]
  },
  externals: {
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.WatchIgnorePlugin([
      /scss\.d\.ts$/
    ]),
    new webpack.ProvidePlugin({
      "React": "react",
      "Quagga": "quagga"
    }),
    new MiniCssExtractPlugin({
      filename: 'metaexplorer-react-style.css',
    }),
  ]
}