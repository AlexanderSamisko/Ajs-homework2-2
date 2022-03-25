const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "scope"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        })
    ]
}
