import {parse} from "./bibtex_parser";
import {parseBibToJSON, parseToEntries} from "./bibtex_generator";
import {Bib, EntryJSON} from "./core/type";

/**
 * Parse BibTeX string to JSON object
 *
 * @param input BibTeX string
 * @returns {*} BibTeX JSON object
 */
export const parseToJSON = (input: string): EntryJSON[] => {
    const bib: Bib = parse(input);
    return parseBibToJSON(bib);
}

/**
 * Parse BibTeX string to Entry list
 *
 * @param input BibTeX string
 * @returns {*} BibTeX Entry list
 */
export const parseToEntry =  (input: string): Entry[] => {
    const bib: Bib = parse(input);
    return parseToEntries(bib);
}


/**
 * Parse BibTeX string to JSON string
 *
 * @param input BibTeX string
 * @returns {string} BibTeX JSON string without raw texts
 */
export const parseToJSONString = (input: string): string => {
    const bib = parse(input);
    bib.entries.forEach(entry => delete entry.raw);
    return JSON.stringify(parseBibToJSON(bib));
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
    abstract?: string
}