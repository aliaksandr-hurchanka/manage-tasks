var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: __dirname,
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'react-router',
            'webpack-hot-middleware/client',
            'babel-polyfill'
        ],
        application: path.resolve(__dirname, 'manage-tasks-ui/src/index')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.jsx$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
}
