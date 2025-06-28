import * as path from 'path';
import webpack, { Configuration } from 'webpack';
import { LicenseWebpackPlugin } from 'license-webpack-plugin';
const LicensePlugin: any = LicenseWebpackPlugin;
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log('Checking imports and variables...');

try {
    console.log('path:', typeof path !== 'undefined');
    console.log('webpack:', typeof webpack !== 'undefined');
    console.log('LicenseWebpackPlugin:', typeof LicenseWebpackPlugin !== 'undefined');
    console.log('require:', typeof require !== 'undefined');
    console.log('__dirname:', __dirname);
    console.log('__filename:', __filename);
} catch (e) {
    console.error('Import/require problem:', e);
    process.exit(1); // Falls du in node arbeitest
}

console.log("VOR CONFIG")
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('LIB_TYPE:', process.env.LIB_TYPE);


console.log('Using ProvidePlugin to inject process and Buffer');

let type: 'umd' | 'commonjs' = 'umd';
let subdir = 'umd';
if (process.env.LIB_TYPE === 'commonjs') {
    type = 'commonjs';
    subdir = 'cjs';
}

const config: Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'web',
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
    plugins: [
        new LicensePlugin({
            perChunkOutput: false,
            outputFilename: '3rdpartylicenses.txt',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),

    ],
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false,
            assert: require.resolve('assert/'),
            buffer: require.resolve('buffer/'),
            process: require.resolve('process/browser'),
        },
    },
};

console.log("NACH CONFIG")
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('LIB_TYPE:', process.env.LIB_TYPE);
console.log('Webpack build target:', config.target);

export default config;
