import type { Configuration } from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import { ESBuildMinifyPlugin } from "esbuild-loader";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import path from "node:path";

import "webpack-dev-server";

const isProduction = process.env.WEBPACK_MODE === "production";

const config: Configuration = {
  mode: isProduction ? "production" : "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "static"),
    },
    webSocketServer: false,
  },
  entry: {
    app: path.join(__dirname, "src/entry.tsx"),
  },
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "ESNext",
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(svg)$/,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "ESNext",
        css: true,
      }),
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  stats: "errors-warnings",
  plugins: [
    new CopyPlugin({
      patterns: ["static"],
    }),
  ],
};

export default config;
