import {Bib} from "../src/core/type";

export const MyPublications = `
@inproceedings{ding_derepo_2020,
title = {Derepo: a distributed privacy-preserving data repository with decentralized access control for smart health},
copyright = {All rights reserved},
isbn = {1-72816-550-4},
booktitle = {2020 7th {IEEE} {International} {Conference} on {Cyber} {Security} and {Cloud} {Computing} ({CSCloud})/2020 6th {IEEE} {International} {Conference} on {Edge} {Computing} and {Scalable} {Cloud} ({EdgeCom})},
publisher = {IEEE},
author = {Ding, Yepeng and Sato, Hiroyuki},
year = {2020},
pages = {29--35},
}

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


@inproceedings{ding_bloccess_2020,
	title = {Bloccess: towards fine-grained access control using blockchain in a distributed untrustworthy environment},
	copyright = {All rights reserved},
	isbn = {1-72811-035-1},
	booktitle = {2020 8th {IEEE} {International} {Conference} on {Mobile} {Cloud} {Computing}, {Services}, and {Engineering} ({MobileCloud})},
	publisher = {IEEE},
	author = {Ding, Yepeng and Sato, Hiroyuki},
	year = {2020},
	pages = {17--22},
}

@inproceedings{ding_formalizing_2020,
	title = {Formalizing and {Verifying} {Decentralized} {Systems} with {Extended} {Concurrent} {Separation} {Logic}},
	copyright = {All rights reserved},
	booktitle = {International {Conference} on {Algorithms} and {Architectures} for {Parallel} {Processing}},
	publisher = {Springer},
	author = {Ding, Yepeng and Sato, Hiroyuki},
	year = {2020},
	pages = {480--494},
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
}`

export const MyPublicationsBib: Bib = {
    entries: [
        {
            type: 'inproceedings',
            id: 'ding_dagbase_2020',
            raw: '@inproceedings{ding_dagbase_2020,\n' +
                'title = {Dagbase: a decentralized database platform {Using} {DAG}-based consensus},\n' +
                'copyright = {All rights reserved},\n' +
                'isbn = {1-72817-303-5},\n' +
                'booktitle = {2020 {IEEE} 44th {Annual} {Computers}, {Software}, and {Applications} {Conference} ({COMPSAC})},\n' +
                'publisher = {IEEE},\n' +
                'author = {Ding, Yepeng and Sato, Hiroyuki},\n' +
                'year = {2020},\n' +
                'pages = {798--807},\n' +
                '}',
            fields: [
                {
                    key: 'title',
                    value: 'Dagbase: a decentralized database platform {Using} {DAG}-based consensus',
                    type: 'String'
                },
                {key: 'copyright', value: 'All rights reserved', type: 'String'},
                {key: 'isbn', value: '1-72817-303-5', type: 'String'},
                {
                    key: 'booktitle',
                    value: '2020 {IEEE} 44th {Annual} {Computers}, {Software}, and {Applications} {Conference} ({COMPSAC})',
                    type: 'String'
                },
                {key: 'publisher', value: 'IEEE', type: 'String'},
                {
                    key: 'author',
                    value: 'Ding, Yepeng and Sato, Hiroyuki',
                    type: 'String'
                },
                {key: 'year', value: '2020', type: 'String'},
                {key: 'pages', value: '798--807', type: 'String'}
            ]
        },
        {
            type: 'article',
            id: 'ding_formalism-driven_2022',
            raw: '@article{ding_formalism-driven_2022,\n' +
                'title = {Formalism-{Driven} {Development}: {Concepts}, {Taxonomy}, and {Practice}},\n' +
                'volume = {12},\n' +
                'copyright = {All rights reserved},\n' +
                'issn = {2076-3417},\n' +
                'url = {https://www.mdpi.com/2076-3417/12/7/3415},\n' +
                'doi = {10.3390/app12073415},\n' +
                'number = {7},\n' +
                'journal = {Applied Sciences},\n' +
                'author = {Ding, Yepeng and Sato, Hiroyuki},\n' +
                'year = {2022},\n' +
                '}',
            fields: [
                {
                    key: 'title',
                    value: 'Formalism-{Driven} {Development}: {Concepts}, {Taxonomy}, and {Practice}',
                    type: 'String'
                },
                {key: 'volume', value: '12', type: 'String'},
                {key: 'copyright', value: 'All rights reserved', type: 'String'},
                {key: 'issn', value: '2076-3417', type: 'String'},
                {
                    key: 'url',
                    value: 'https://www.mdpi.com/2076-3417/12/7/3415',
                    type: 'String'
                },
                {key: 'doi', value: '10.3390/app12073415', type: 'String'},
                {key: 'number', value: '7', type: 'String'},
                {key: 'journal', value: 'Applied Sciences', type: 'String'},
                {
                    key: 'author',
                    value: 'Ding, Yepeng and Sato, Hiroyuki',
                    type: 'String'
                },
                {key: 'year', value: '2022', type: 'String'}
            ]
        }
    ]
}
