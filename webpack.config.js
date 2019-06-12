const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = env => {
  let BASE_URL = "";
  if (env.NODE_ENV == "dev") BASE_URL = "https://local.local.com.br";
  if (env.NODE_ENV == "prod") BASE_URL = "https://prod.prod.com.br";
  else BASE_URL = "https://local.local.com.br";

  const config = {
    entry: ['@babel/polyfill', './src/index.jsx'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html"
        // filename: '../index.html'
      }),
      new webpack.ProvidePlugin({
        _: "lodash"
      }),
      new webpack.DefinePlugin({
        BASE_URL: JSON.stringify(BASE_URL)
      })
    ],
    resolve: {
      alias: {
        "~": `${path.resolve("src")}`
      },
      extensions: [".js", ".jsx", ".json"]
    },

    devServer: {
      historyApiFallback: true,
      port: 3002
    }
  };

  return config;
};
