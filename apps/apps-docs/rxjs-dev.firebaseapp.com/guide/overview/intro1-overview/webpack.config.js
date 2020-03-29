const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CopyPlugin([
      {
        from: "src/index.html",
        to: ""
      }
    ])
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
};
