// megre function is what's going to allow us to take all the 
// config that we just wrote out inside that common file and merge
// it together with a config that we're about to write inside this dev file
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

// sharing the container package.json dependencies to pass directly to shared modules

const packageJson = require('../package.json')

const port = '8080'

const devConfig = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${port}/`
    },
    devServer: {
        port: port,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', // not require, but following convention
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js', // marketing before @, matches the name of config.dev of marketing app
                auth: 'auth@http://localhost:8082/remoteEntry.js' // marketing before @, matches the name of config.dev of marketing app
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);