var ETP = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require("purifycss-webpack");
var path = require('path');
var glob = require("glob");

module.exports = {
    entry: ["./assets/index.scss"],
    output: {
        filename: "assets/css/[name].bundle.css"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ETP.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                }),
            },
            {
                test: /\.ttf$/,
                exclude: /node_modules/,
                use: "url-loader"
            },
        ]
    },
    plugins: [
        new ETP({
            filename: "assets/css/[name].bundle.css",
        }),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, "*.hbs")),
            minimize: true,
        })
    ]
}
