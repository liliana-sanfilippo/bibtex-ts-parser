import {ValueType, Bib, EntryJSON, Field} from "./core/type";
import {Entry} from "./core/type";

/**
 * Parse bib object to EntryJSON (JSON) object
 *
 * @param bib
 * @returns EntryJSON[]
 */
export function parseBibToJSON(bib: Bib): EntryJSON[] {
    return bib.entries.map(entry=> {
        const entryJSON: EntryJSON = {
            id: entry.id,
            type: entry.type,
            raw: entry.raw
        }
        entry.fields.forEach((field: Field) => {
            field.key = checkField(field.key);
            if (field.type === ValueType.INTEGER && typeof field.value === 'string') {
                entryJSON[field.key] = parseInt(field.value);
            } else if (field.type === ValueType.INTEGER && typeof field.value === 'number') {
                entryJSON[field.key] = field.value;
            } else if (field.type === ValueType.STRING && typeof field.value === 'string') {
                entryJSON[field.key] = toPlainString(field.value);
            }
        })
        return entryJSON;
    })
}

/**
 * Convert BibTeX string to plain string
 *
 * @param str BibTeX string
 * @returns {string} plain string
 */
const toPlainString = (str: string) => {
    return str.replaceAll(/[{}]/g, "").replace("\"", "\\\"");
}


function checkField(name: string): string {
    switch (name) {
        case "journaltitle":
            return "journal";
        case "maintitle":
            return "title";
        case "bookauthor":
            return "author";
        default: return name;
    }
}


/**
 * Parse bib object to Entry object
 *
 * @param bib
 * @returns Entry[]
 */
export function parseToEntries(bib: Bib): Entry[] {
    return bib.entries.map(ent=> {
        const entry: Entry = {
            id: ent.id as string,
            type: ent.type as string,
            title: ""
        }
        for (const field of ent.fields) {
            const set = setters[field.key as keyof Entry];
            if (!set) continue; // Unbekannte Keys ignorieren
            const v = (toPlainString(field.value) ?? "");
            set(entry, v);
        }
        return entry;
    });
}


/**
 * Setters for transformation from Bib to Json.
 */
const setters: { [K in keyof Entry]?: (e: Entry, v: string) => void } = {
    title:     (e,v) => { e.title = v; },
    author:    (e,v) => { e.author = v; },
    editor:    (e,v) => { e.editor = v; },
    booktitle: (e,v) => { e.booktitle = v; },
    publisher: (e,v) => { e.publisher = v; },
    school:    (e,v) => { e.school = v; },
    address:   (e,v) => { e.address = v; },
    month:     (e,v) => { e.month = v; },
    pages:     (e,v) => { e.pages = v; },
    journal:   (e,v) => { e.journal = v; },
    volume:    (e,v) => { e.volume = v; },
    series:    (e,v) => { e.series = v; },
    doi:       (e,v) => { e.doi = v; },
    issn:      (e,v) => { e.issn = v; },
    url:       (e,v) => { e.url = v; },
    urldate:   (e,v) => { e.urldate = v; },
    language:  (e,v) => { e.language = v; },
    copyright: (e,v) => { e.copyright = v; },
    note:      (e,v) => { e.note = v; },
    keyword:   (e,v) => { e.keyword = v; },
    abstract:  (e,v) => { e.abstract = v; },
    isbn:  (e,v) => { e.isbn = v; },
    day:  (e,v) => { e.day = v; },
    edition:  (e,v) => { e.edition = v; },
    howpublished:  (e,v) => { e.howpublished = v; },
    organization:  (e,v) => { e.organization = v; },
    version:  (e,v) => { e.version = v; },
    chapter:  (e,v) => { e.chapter = v; },
    subtitle:  (e,v) => { e.subtitle = v; },
    holder:  (e,v) => { e.holder = v; },
    date:  (e,v) => { e.date = v; },
    eventtitle:  (e,v) => { e.eventtitle = v; },
    eventdate:  (e,v) => { e.eventdate = v; },
    venue:  (e,v) => { e.venue = v; },
    accessdate:  (e,v) => { e.accessdate = v; },
    year:   (e,v) => { const n = parseInt(v,10); e.year   = Number.isNaN(n) ? v : n; },
    number: (e,v) => { const n = parseInt(v,10); e.number = Number.isNaN(n) ? v : n; }
};
