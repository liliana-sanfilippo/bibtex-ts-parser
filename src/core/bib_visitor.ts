import BibTeXVisitor from "../base/BibTeXVisitor";
import EntryVisitor from "./entry_visitor";
import {Bib} from "./type";
import {
    EntryContext
} from "../base/BibTeX";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";

/**
 * Bib Visitor
 *
 * @author Yepeng Ding
 */
export default class BibVisitor extends  AbstractParseTreeVisitor<any>  implements BibTeXVisitor<any>{

    visitChildren(node: RuleNode): any {
        return super.visitChildren(node);
    }

    protected defaultResult(): any {
        return null
    }

    #entryVisitor = new EntryVisitor();

    #bib: Bib = {
        entries: []
    }

    visitEntry(ctx: EntryContext) {
        const entry = ctx.accept(this.#entryVisitor);
        this.#bib.entries.push(entry)
        return entry;
    }

    get bib() {
        return this.#bib;
    }
}