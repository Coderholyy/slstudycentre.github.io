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
    filename: 'slsc.bundle.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: '/'
  },
  mode: isDevelopment ? 'development' : 'production',
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