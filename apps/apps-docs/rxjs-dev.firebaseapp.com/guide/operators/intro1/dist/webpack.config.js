var path = require("path");
var CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // open: true,
        compress: true,
        writeToDisk: true,
        port: 8080
    },
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
//# sourceMappingURL=webpack.config.js.map