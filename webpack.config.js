var ETP = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require("purifycss-webpack");
var path = require('path');

module.exports = {
    entry: ["./assets/index.scss"],
    output: {
        filename: "dist/[name].bundle.css",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ETP.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.(ttf|svg)$/,
                exclude: /node_modules/,
                use: "url-loader?limit=1024&name=dist/fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ETP({
            filename: "./dist/[name].bundle.css",
        }),
        // new PurifyCSSPlugin({
        //     paths: [path.resolve(__dirname, "dist/main.bundle.css")],
        // })
    ]
}
