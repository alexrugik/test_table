const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ENV = require('./config.const').ENV;

const dependencies = require('./dependencies');

module.exports = {
    entry: {
        dependencies,
        app: path.resolve(__dirname, 'src/app/app.module')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src', 'assets')
        ],
        extensions: ['.js', '.json', '.css', 'html']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ng-annotate-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                })
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 5000,
                            name: 'assets/images/[hash].[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'assets/fonts/[hash].[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            hash: true,
            inject: true,
            chunksSortMode: (chunk1, chunk2) => {
                const orders = ['common', 'dependencies', 'app'];
                const order1 = orders.indexOf(chunk1.names[0]);
                const order2 = orders.indexOf(chunk2.names[0]);
                return order1 - order2;
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new webpack.DefinePlugin({
            'process.env': {
                // defaults the environment to development if not specified
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || ENV.development)
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'popper.js'
        }),
        new ExtractTextPlugin('styles.bundler.css')
    ],
    devServer: {
        port: 8090,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        stats: {
            cached: false,
            colors: true
        }
    },
    watchOptions: {
        aggregateTimeout: 2000, // in ms
        poll: 2000 // intervall in ms

    },
    devtool: 'source-map',
    target: 'web'
};