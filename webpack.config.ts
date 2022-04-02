import nodeExternals from 'webpack-node-externals';
import WebpackShellPlugin from 'webpack-shell-plugin';
import path from 'path';
import {Configuration} from 'webpack';

import 'webpack-dev-server';

const {NODE_ENV = 'production'} = process.env;

const config: Configuration = {
    entry: './src/index.ts',
    mode: NODE_ENV as "none" | "development" | "production",
    target: 'node',
    watch: NODE_ENV === 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['npm run run:dev']
        })
    ],
    externals: [
        nodeExternals()
    ]
};

export default config;
