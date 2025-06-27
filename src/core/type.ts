export const EntryType = {
    ARTICLE: 'article',
    BOOK: 'book',
    BOOKLET: 'booklet',
    INBOOK: 'inbook',
    INCOLLECTION: 'incollection',
    INPROCEEDINGS: 'inproceedings',
    PROCEEDINGS: 'proceedings',
    MANUAL: 'manual',
    MASTERTHESIS: 'masterthesis',
    PHDTHESIS: 'phdthesis',
    MISC: 'misc',
    TECHREPORT: 'techreport',
    UNPUBLISHED: 'unpublished'
}

export enum ValueType {
    INTEGER= 'Integer',
    STRING= 'String'
}

interface BibEntry {
    raw?: string;
    [key: string]: any;
}

export type Entries = {
    entries: BibEntry[];
}

export type Field = {
    key: string;
    value: string | number;
    type: 'Integer' | 'String';
};

export type FullEntry = {
    type: string;
    id: string;
    raw?: string;
    fields: Field[];
};

export type Bib = {
    entries: FullEntry[];
};

export type EntryJSON = {
    id: string;
    type: string;
    raw: string;
    [key: string]: string;
}


export enum EntryTypeEnum {
    ARTICLE = "article",
    BOOK = "book",
    BOOKLET = "booklet",
    INBOOK = "inbook",
    INCOLLECTION = "incollection",
    INPROCEEDINGS = "inproceedings",
    PROCEEDINGS = "proceedings",
    MANUAL = "manual",
    MASTERTHESIS = "mastersthesis",
    PHDTHESIS = "phdthesis",
    MISC = "misc",
    TECHREPORT = "techreport",
    UNPUBLISHED = "unpublished"
}


