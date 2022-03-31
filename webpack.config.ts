import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {Configuration} from 'webpack';

import 'webpack-dev-server';

const config: Configuration = {
    entry: './src/index.ts',
    mode: 'production',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin()]
};

export default config;
