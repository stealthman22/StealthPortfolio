//require plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebPackPlugin } = require('clean-webpack-plugin');

// modules
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devtool: 'eval',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        // load with html loader and then minimize
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

        ]
    },
    plugins: [
        new CleanWebPackPlugin({

        }),
        new HtmlWebpackPlugin({
            title: 'Portfolio'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    }
}