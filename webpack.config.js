const webpack = require("webpack");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        "bundle": ["./src/index.tsx"],
        "main": ["./src/main.ts"]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader"},

            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            useRelativePath: true,
                            outputPath: "./public/img"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor-manifest.json')
        }),
        new MonacoWebpackPlugin({
            languages:[]
            // ,features:["coreCommands","find","contextmenu","inPlaceReplace"]
        })
    ],
    target: "electron-renderer"
};