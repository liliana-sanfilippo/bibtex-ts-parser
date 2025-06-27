/**
 * Enum representing the possible types of field values.
 */
export enum ValueType {
    INTEGER = 'Integer',
    STRING = 'String'
}

/**
 * Represents a single field within a BibTeX entry.
 */

export type Field = {
    key: string;
    value: string | number;
    type: ValueType;
};

/**
 * Represents a full BibTeX entry with its type, ID, raw string and fields.
 */
export type FullEntry = {
    type: string;
    id: string;
    raw?: string;
    fields: Field[];
};

/**
 * Interface representing a BibTeX library (collection of entries).
 */
export interface Bib {
    entries: any[];
}

/**
 * Enum representing all supported BibTeX entry types.
 */
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

/**
 * Interface for a BibTeX entry represented as JSON.
 * Contains id, type, optional raw string, and any other key-value pairs for fields.
 */
export interface EntryJSON {
    id: string;
    type: string;
    raw?: string;

    [key: string]: string | number | undefined;
}

