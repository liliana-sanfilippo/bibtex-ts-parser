// WebPack configuration for development
const path = require('path');
const glob = require("glob");
module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: glob.sync('./src/test/**/*.test.ts').map((file) => './' + file),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false
        }
    },
    output: {
        filename: 'bibtex-ts-parser-dev.js',
        library: {
            name: 'AuthorNameParser',
            type: 'commonjs'
        },
        path: path.resolve(__dirname, 'dev'),
    }
};