import {ValueType, Bib, FullEntry} from "./core/type";

/**
 * Parse bib object to JSON object
 *
 * @param bib
 * @returns {*}
 */
const parseBibToJSON = (bib: Bib): FullEntry[] => {
    return bib.entries.map(entry=> {
        const entryJSON: FullEntry = {
            id: entry.id,
            type: entry.type,
            raw: entry.raw,
            fields: []
        }
        entry.fields.forEach(field => {
            if (field.type === ValueType.STRING) {
                entryJSON.fields.push({key: field.key, type: ValueType.STRING,  value: field.value});
            } else if (field.type === ValueType.INTEGER) {
                entryJSON.fields.push({key: field.key, type: ValueType.INTEGER,  value: field.value});
            }

        })
        return entryJSON
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

export {parseBibToJSON}