const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const { loader } = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        // Точки входа
        index: './src/js/index.js',
        about: './src/js/about.js',
        paper: './src/js/paper.js'
    },

    output: {
        // Исходные файы
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    },

    module: {
        rules: [
                //
                {
                test: /\.css$/i,
                use: [
                        isDev ? 'style-loader' : { 
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                 publicPath: '../',
                                }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                ]
                },

                { // тут описываются правила
                    test: /\.js$/,
                    use: { loader: "babel-loader" },
                    exclude: /node_modules/,
                },
                // загрузка шрифтов
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'vendor/fonts',
                        useRelativePath: 'true',
                    }
                },
                // загрузка картинок
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]',
                                useRelativePath: 'true',
                            }

                        },

                        {
                            loader: 'image-webpack-loader',
                            options: {
                                // оптимизация jpg
                                mozjpeg: {
                                    progressive: true,
                                    quality: 70,
                                },
                                // оптимизация png 
                                optipng: {
                                    optimizationLevel: 7,
                                },
                                pngquant: {
                                    quality: [0.70, 0.90],
                                    speed: 4,
                                },
                                // оптимизация svg
                                svgo: {
                                    removeMetadata: true,
                                    removeComments: true,
                                    removeEmptyAttrs: true,
                                    removeEmptyText: true,
                                    removeEmptyContainers: true,
                                    reusePaths: true,
                                },
                                // оптимизация gif 
                                gifsicle: {
                                    interlaced: true,
                                    optimizationLevel: 1,
                                },
                                // преобразование png и jpg в webp
                                /*webp: {

                                }*/

                            }
                        }
                    ]

                },
            ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './pages/[name].[contenthash].css'
        }),

        new HtmlWebpackPlugin ({
            inject: false,
            chunks: ['index'],
            template: './src/index.html',
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin ({
            inject: false,
            chunks: ['about'],
            template: './src/about.html',
            filename: 'about.html'
        }),

        new HtmlWebpackPlugin ({
            inject: false,
            chunks: ['paper'],
            template: './src/paper.html',
            filename: 'paper.html'
        }),

    ]
}
