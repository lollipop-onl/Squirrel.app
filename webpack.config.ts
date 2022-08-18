import type { Configuration } from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import { ESBuildMinifyPlugin } from "esbuild-loader";
import path from "node:path";

import "webpack-dev-server";

const isProduction = process.env.WEBPACK_MODE === "production";

const config: Configuration = {
  mode: isProduction ? "production" : "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "static"),
    },
  },
  entry: {
    app: path.join(__dirname, "src/app.tsx"),
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
  plugins: [
    new CopyPlugin({
      patterns: ["static"],
    }),
  ],
};

export default config;
