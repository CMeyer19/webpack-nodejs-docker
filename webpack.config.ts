import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import {Configuration} from 'webpack';

import 'webpack-dev-server';

const {NODE_ENV = 'production'} = process.env;

const config: Configuration = {
    entry: './src/index.ts',
    mode: NODE_ENV as "none" | "development" | "production",
    target: 'node',
    devtool: 'inline-source-map',
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
        new HtmlWebpackPlugin()
    ],
    externals: [
        nodeExternals()
    ]
};

export default config;
