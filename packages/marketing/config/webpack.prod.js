const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing', // not require, but following convention
            filename: 'remoteEntry.js',
            exposes: {
                MarketingApp: './src/bootstrap' // marketing before @, matches the name of config.dev of marketing app
            },
            shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, prodConfig);