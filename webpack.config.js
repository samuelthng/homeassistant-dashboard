/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const nodePackage = require("./package.json");

const isProd = process.env.NODE_ENV === "production";
const publicPath = isProd
  ? nodePackage.panelServingUrl
  : `http://${nodePackage.devServer.host}:${nodePackage.devServer.port}/`;
const buildPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: isProd ? "production" : "development",
  entry: ["react-hot-loader/patch", "./src"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // For config .yml files.
        test: /\.ya?ml$/,
        type: "json", // Required by Webpack v4
        use: "yaml-loader",
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["url-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "@resources": path.resolve(__dirname, "src/resources"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@packages": path.resolve(__dirname, "src/packages"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __PUBLIC_PATH__: JSON.stringify(publicPath),
    }),
  ],
  output: {
    uniqueName: nodePackage.name,
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: buildPath,
    publicPath,
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    ...nodePackage.devServer,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
