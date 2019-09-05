const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    output:{
        filename: 'bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "./index.html"
        })
    ]
}