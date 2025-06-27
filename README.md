# BibTeX JS Parser

A BitTeX parser implemented in TypeScript (ESNext) adapted from the [bibtex js parser](https://github.com/yepengding/bibtex-js-parser) 

Transforming a BibTeX file to an object in memory or a semi-structured file on disk.

## Features

- [x] Full (insensitive-case) entry types support
- [x] Browser support
- [x] NPM support

## Demo

Input:

```
@inproceedings{ding_dagbase_2020,
	title = {Dagbase: a decentralized database platform {Using} {DAG}-based consensus},
	copyright = {All rights reserved},
	isbn = {1-72817-303-5},
	booktitle = {2020 {IEEE} 44th {Annual} {Computers}, {Software}, and {Applications} {Conference} ({COMPSAC})},
	publisher = {IEEE},
	author = {Ding, Yepeng and Sato, Hiroyuki},
	year = {2020},
	pages = {798--807},
}

@article{ding_formalism-driven_2022,
	title = {Formalism-{Driven} {Development}: {Concepts}, {Taxonomy}, and {Practice}},
	volume = {12},
	copyright = {All rights reserved},
	issn = {2076-3417},
	url = {https://www.mdpi.com/2076-3417/12/7/3415},
	doi = {10.3390/app12073415},
	number = {7},
	journal = {Applied Sciences},
	author = {Ding, Yepeng and Sato, Hiroyuki},
	year = {2022},
}
```

Output:

```json
[
  {
    "id": "ding_dagbase_2020",
    "type": "inproceedings",
    "title": "Dagbase: a decentralized database platform Using DAG-based consensus",
    "copyright": "All rights reserved",
    "isbn": "1-72817-303-5",
    "booktitle": "2020 IEEE 44th Annual Computers, Software, and Applications Conference (COMPSAC)",
    "publisher": "IEEE",
    "author": "Ding, Yepeng and Sato, Hiroyuki",
    "year": "2020",
    "pages": "798--807"
  },
  {
    "id": "ding_formalism-driven_2022",
    "type": "article",
    "title": "Formalism-Driven Development: Concepts, Taxonomy, and Practice",
    "volume": "12",
    "copyright": "All rights reserved",
    "issn": "2076-3417",
    "url": "https://www.mdpi.com/2076-3417/12/7/3415",
    "doi": "10.3390/app12073415",
    "number": "7",
    "journal": "Applied Sciences",
    "author": "Ding, Yepeng and Sato, Hiroyuki",
    "year": "2022"
  }
]
```

## Quickstart

### NPM



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
