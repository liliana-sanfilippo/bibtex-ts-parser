# BibTeX TS Parser

I adapted the JS Parser from [bibtex js parser](https://github.com/yepengding/bibtex-js-parser). Now in TypeScript (ESNext).

Transforming a BibTeX file to an object in memory or a semi-structured file on disk.

## Features

- [x] Full (insensitive-case) entry types support
- [x] Browser support
- [x] NPM support


## Quickstart

### NPM

```bash
npm install @liliana-sanfilippo/bibtex-ts-parser
```

### In-Browser Use


## Build

Environment

I used Node.js v20.19.3

### For Dev

Build a CommonJS script to `dist/dev/bibtex-js-parser-dev.js` with source map.

```shell
npm run dev
```

Configuration is changeable in `.webpack.config.dev.ts`.

### For Test

Run tests defined in `test` after building for dev.

```shell
npm run test
```

### For Production


Configuration is changeable in `.webpack.config.prod.ts`.

## Usage


## Related Projects

- [BibTeX Grammar](https://github.com/yepengding/BibTeX-Grammar)
- [BibTex Java Parser](https://github.com/yepengding/BibTeX-Java-Parser)
