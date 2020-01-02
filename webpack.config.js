//require plugins
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// modules
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },

    devServer: {
        contentBase: './dist',
    },
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
                use: [
                    {
                        // load with html loader and then minimize
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            interpolate: true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ],
                options: {
                    name: 'src/img/[name].[ext]',
                }
            },
        ]
    },
    plugins: [
        /*   new CleanWebpackPlugin({
              cleanAfterEveryBuildPatterns: ['dist']
          }), */
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
}