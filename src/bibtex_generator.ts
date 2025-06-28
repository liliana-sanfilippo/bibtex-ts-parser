import {ValueType, Bib, EntryJSON, Field} from "./core/type";

/**
 * Parse bib object to EntryJSON (JSON) object
 *
 * @param bib
 * @returns {*}
 */
const parseBibToJSON = (bib: Bib): EntryJSON[] => {
    return bib.entries.map(entry=> {
        const entryJSON: EntryJSON = {
            id: entry.id,
            type: entry.type,
            raw: entry.raw
        }
        entry.fields.forEach((field: Field) => {
            if (field.type === ValueType.INTEGER && typeof field.value === 'string') {
                entryJSON[field.key] = parseInt(field.value);
            } else if (field.type === ValueType.INTEGER && typeof field.value === 'number') {
                entryJSON[field.key] = field.value; // ist schon eine Zahl
            } else if (field.type === ValueType.STRING && typeof field.value === 'string') {
                entryJSON[field.key] = toPlainString(field.value);
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