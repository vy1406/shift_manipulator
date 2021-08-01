const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;
// sharing the container package.json dependencies to pass directly to shared modules
const awsPrefix = '/container/latest/';

const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: `${awsPrefix}`
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', // not require, but following convention
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`, // marketing before @, matches the name of config.dev of marketing app
                auth: `auth@${domain}/auth/latest/remoteEntry.js`, // marketing before @, matches the name of config.dev of marketing app
                dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, prodConfig);