const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')


const awsPrefix = '/messages/latest/';

const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: `${awsPrefix}`
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'messages', 
            filename: 'remoteEntry.js',
            exposes: {
                './MessagesApp': './src/bootstrap' 
            },
            shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, prodConfig);