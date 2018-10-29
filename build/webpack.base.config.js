const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

isProduction = process.env.NODE_ENV === 'production'

module.exports = {

    output: isProduction
    ? {
        path: path.resolve(__dirname, '../../../server/apps/logdeveldevils'),
        publicPath: '/logdeveldevils/',
        filename: 'build.js'
    } 
    : {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: isProduction 
                    ? ExtractTextPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [ 'css-loader', 'sass-loader' ]
                    })
                    : ['vue-style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: isProduction,
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg|gif)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: isProduction 
    ? [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new VueLoaderPlugin()
    ] : [
        new VueLoaderPlugin()
    ]
}