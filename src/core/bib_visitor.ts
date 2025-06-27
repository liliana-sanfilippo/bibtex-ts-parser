import BibTeXVisitor from "../base/BibTeXVisitor";
import EntryVisitor from "./entry_visitor";
import {Bib, Entries, FullEntry} from "./type";
import {ArticleContext, BibTexContext, BookContext, BookletContext,
    EntryContext,
    FieldContext,
    InbookContext,
    IncollectionContext,
    InproceedingsContext,
    KeyContext,
    ManualContext,
    MastersthesisContext,
    MiscContext,
    PhdthesisContext,
    ProceedingsContext,
    TechreportContext,
    UnpublishedContext,
    ValueContext
} from "../base/BibTeX";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";

/**
 * Bib Visitor
 *
 * @author Yepeng Ding
 */
export default class BibVisitor implements BibTeXVisitor<FullEntry> {
    visitBibTex?: ((ctx: BibTexContext) => FullEntry) | undefined;
    visitField?: ((ctx: FieldContext) => FullEntry) | undefined;
    visitKey?: ((ctx: KeyContext) => FullEntry) | undefined;
    visitValue?: ((ctx: ValueContext) => FullEntry) | undefined;
    visitArticle?: ((ctx: ArticleContext) => FullEntry) | undefined;
    visitBook?: ((ctx: BookContext) => FullEntry) | undefined;
    visitBooklet?: ((ctx: BookletContext) => FullEntry) | undefined;
    visitInbook?: ((ctx: InbookContext) => FullEntry) | undefined;
    visitIncollection?: ((ctx: IncollectionContext) => FullEntry) | undefined;
    visitInproceedings?: ((ctx: InproceedingsContext) => FullEntry) | undefined;
    visitProceedings?: ((ctx: ProceedingsContext) => FullEntry) | undefined;
    visitManual?: ((ctx: ManualContext) => FullEntry) | undefined;
    visitMastersthesis?: ((ctx: MastersthesisContext) => FullEntry) | undefined;
    visitPhdthesis?: ((ctx: PhdthesisContext) => FullEntry) | undefined;
    visitMisc?: ((ctx: MiscContext) => FullEntry) | undefined;
    visitTechreport?: ((ctx: TechreportContext) => FullEntry) | undefined;
    visitUnpublished?: ((ctx: UnpublishedContext) => FullEntry) | undefined;
    visit(tree: ParseTree): FullEntry {
        throw new Error("Method not implemented.");
    }
    visitChildren(node: RuleNode): FullEntry {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): FullEntry {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): FullEntry {
        throw new Error("Method not implemented.");
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