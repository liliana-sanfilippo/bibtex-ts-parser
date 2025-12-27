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
    UNPUBLISHED = "unpublished",
    DATASET = "dataset",
    SOFTWARE = "software",
    GENAI = "genai",
    ONLINE = "online",
    TRANSCRIPT = "transcript",
    AUDIO = "audio",
    VIDEO = "video",
    PATENT = "patent",
    BACHELORTHESIS = "bachelorthesis",
    IGEMWIKI = 'igemwiki'
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

/**
 * Entry Interface to work with in TypeScript projects.
 */
export interface Entry {
        id: string,
        type: string,
        title: string,
        author?: string,
        editor?: string,
        booktitle?: string,
        publisher?: string,
        school?: string,
        address?: string,
        year?: string | number,
        month?: string,
        pages?: string,
        journal?: string,
        volume?: string,
        number?: string | number,
        series?: string,
        doi?: string,
        issn?: string,
        url?: string,
        urldate?: string,
        language?: string,
        copyright?: string,
        note?: string,
        keyword?: string,
        abstract?: string,
        day?: string,
        organization?: string,
        institution?: string,
        isbn?: string,
        edition?: string,
        howpublished?: string,
        chapter?: string,
        subtitle?: string,
        holder?: string,
        eventtitle?: string,
        eventdate?: string
        date?: string,
        venue?: string,
        accessdate?: string,
        version?: string
}
