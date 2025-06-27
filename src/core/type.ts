export enum ValueType {
    INTEGER= 'Integer',
    STRING= 'String'
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

export interface Bib {
    entries: any[];
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
 export interface EntryJSON {
     id: string;
     type: string;
     raw?: string;
     [key: string]: string | number | undefined;
 }

