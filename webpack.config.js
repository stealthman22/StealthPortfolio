//require plugins
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// modules
module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    devServer: {},
    module: {
        rules: [
            // babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    // load with html loader and then minimize
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href'],
                        minimize: true,
                        interpolate: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css.loader']
            },
            {
                test: /\.(png|svg|jpg|gif|jpe?g)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    }
};