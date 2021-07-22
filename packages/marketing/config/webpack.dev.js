// megre function is what's going to allow us to take all the 
// config that we just wrote out inside that common file and merge
// it together with a config that we're about to write inside this dev file
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: packageJson.dependencies
        }),

        new HtmlWebpackPlugin({
          template: './public/index.html',
        }), 
    ]
};

module.exports = merge(commonConfig, devConfig);