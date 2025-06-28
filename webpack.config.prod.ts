import * as path from 'path';
import { Configuration } from 'webpack';
import { LicenseWebpackPlugin } from 'license-webpack-plugin';
const LicensePlugin: any = LicenseWebpackPlugin;
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let type: 'umd' | 'commonjs' = 'umd';
let subdir = 'umd';
if (process.env.LIB_TYPE === 'commonjs') {
    type = 'commonjs';
    subdir = 'cjs';
}

const config: Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'bibtex-ts-parser.js',
        path: path.resolve(__dirname, 'dist', subdir),
        library: {
            name: 'BibtexParser',
            type: type,
        },
        environment: {
            arrowFunction: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { targets: 'defaults' }]],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false,
            assert: "assert",
        },
    },
    plugins: [new LicensePlugin({
        perChunkOutput: false,
        outputFilename: '3rdpartylicenses.txt',
    })],
};

export default config;
