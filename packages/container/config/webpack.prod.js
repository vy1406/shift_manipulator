const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;
console.log(domain)
// sharing the container package.json dependencies to pass directly to shared modules

const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', // not require, but following convention
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js` // marketing before @, matches the name of config.dev of marketing app
            },
            shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, prodConfig);