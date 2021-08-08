const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

const awsPrefix = '/dashboard/latest/';

const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: `${awsPrefix}`
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard', // not require, but following convention
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': './src/bootstrap' // dashboard before @, matches the name of config.dev of marketing app
            },
            remotes: {
                shifts: `shifts@${domain}/shifts/latest/remoteEntry.js`,
                users: `users@${domain}/users/latest/remoteEntry.js`, // marketing before @, matches the name of config.dev of marketing app
                messages: `messages@${domain}/messages/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, prodConfig);