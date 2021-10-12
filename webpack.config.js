const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']},
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.mp4$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "video"
                }
            }
        ]
      }
    ]
  },
  output: {
    filename: isDevelopment? 'slsc.bundle.js' : 'slsc.bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin({
      //we don't want to remove the index.html file after the incremental build triggered by watch
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './dist/index.html'
    })
  ],
  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    poll: 1000,
    ignored: 'node_modules/**',
    aggregateTimeout: 600
  },
  devServer: {
    historyApiFallback: true,
    port: 9000
  },
  resolve: {
    alias: {
      layouts: path.resolve(__dirname, 'src/layouts'),
      components: path.resolve(__dirname, 'src/components')
    }
  }
}