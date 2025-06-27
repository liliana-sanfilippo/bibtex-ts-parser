// WebPack configuration for development
const path = require('path');
const glob = require("glob");
module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: glob.sync('./test/**/*.test.ts'),
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
        extensions: ['.ts', '.js'], // Wichtig für .ts-Dateien
        fallback: {
            fs: false
        }
    },
    output: {
        filename: 'bibtex-ts-parser-dev.js', // .js statt .ts, weil Webpack JS ausgibt!
        library: {
            name: 'BibtexParser',
            type: 'commonjs'
        },
        path: path.resolve(__dirname, 'dist/dev'),
    }
};
