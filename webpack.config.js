const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'none',
    context: path.resolve(__dirname, 'src'),
    entry: {
        polyfill: 'babel-polyfill',
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            inject: 'body',
        }),
        new WebpackCleanupPlugin()
    ],
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|\.test\.js$)/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }, 'strip-loader?strip[]=debugger,strip[]=debug,strip[]=console.log']
            }

        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
