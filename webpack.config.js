const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const vendorConfig = require('./webpack.vendor-config');
const buyerConfig = require('./webpack.buyer-config');
const adminConfig = require('./webpack.admin-config');

const ENV = require('./config.const').ENV;
const BUILD = require('./config.const').BUILD;

const dependencies = [
    'babel-polyfill',
    'angular',
    'angular-ui-router',
    'angular-route'
];

const webpackConfig = {
    entry: {
        dependencies
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.json', '.css', 'html']
    },
    module: {
        rules: [
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
                    use: 'css-loader'
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/app', 'index.html'),
            hash: true,
            inject: true,
            chunksSortMode: (chunk1, chunk2) => {
                const orders = ['dependencies', 'vendor', 'buyer', 'admin'];
                const order1 = orders.indexOf(chunk1.names[0]);
                const order2 = orders.indexOf(chunk2.names[0]);
                return order1 - order2;
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                // defaults the environment to development if not specified
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || ENV.development)
            }
        }),
        new webpack.ProvidePlugin({}),
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
        // aggregates multiple changes to a single rebuild
        poll: 2000 // intervall in ms

    },
    devtool: 'source-map',
    target: 'web'
};

module.exports = getWebpackConfig;

function getWebpackConfig(build, env) {
    switch (build) {
        case(BUILD.vendor): {
            Object.assign(webpackConfig.entry, vendorConfig.entry);
            Object.assign(webpackConfig.output, vendorConfig.output);
            break;
        }
        case(BUILD.buyer): {
            Object.assign(webpackConfig.entry, buyerConfig.entry);
            Object.assign(webpackConfig.output, buyerConfig.output);
            break;
        }
        case(BUILD.admin): {
            Object.assign(webpackConfig.entry, adminConfig.entry);
            Object.assign(webpackConfig.output, adminConfig.output);
            break;
        }
    }

    if (env === ENV.production) {
        webpackConfig.plugins.push(
            new UglifyJSPlugin()
        )
    }

    return webpackConfig;
}