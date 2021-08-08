const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')


const awsPrefix = '/shifts/latest/';

const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: `${awsPrefix}`
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shifts',
            filename: 'remoteEntry.js',
            exposes: {
                './ShiftsApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, prodConfig);