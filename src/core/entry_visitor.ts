import BibTeXVisitor from "../base/BibTeXVisitor";
import FieldVisitor from "./field_visitor";
import {EntryTypeEnum, FullEntry} from "./type";
import {
    ArticleContext,
    BibTexContext,
    BookContext,
    BookletContext, EntryContext,
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
    TechreportContext, UnpublishedContext,
    ValueContext
} from "../base/BibTeX";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {Interval} from "antlr4ts/misc";

/**
 * Entry Visitor
 *
 * @author Yepeng Ding
 */
export default class EntryVisitor implements BibTeXVisitor<FullEntry> {
    visitBibTex?: ((ctx: BibTexContext) => FullEntry) | undefined;
    visitField?: ((ctx: FieldContext) => FullEntry) | undefined;
    visitKey?: ((ctx: KeyContext) => FullEntry) | undefined;
    visitValue?: ((ctx: ValueContext) => FullEntry) | undefined;
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

    fieldVisitor = new FieldVisitor();

    visitArticle(ctx: ArticleContext) {
        return this.#newEntry(EntryTypeEnum.ARTICLE, ctx);
    }

    visitBook(ctx: BookContext) {
        return this.#newEntry(EntryTypeEnum.BOOK, ctx);
    }

    visitBooklet(ctx: BookletContext) {
        return this.#newEntry(EntryTypeEnum.BOOKLET, ctx);
    }

    visitInbook(ctx: InbookContext) {
        return this.#newEntry(EntryTypeEnum.INBOOK, ctx);
    }

    visitIncollection(ctx: IncollectionContext) {
        return this.#newEntry(EntryTypeEnum.INCOLLECTION, ctx);
    }

    visitInproceedings(ctx: InproceedingsContext) {
        return this.#newEntry(EntryTypeEnum.INPROCEEDINGS, ctx);
    }

    visitProceedings(ctx: ProceedingsContext) {
        return this.#newEntry(EntryTypeEnum.PROCEEDINGS, ctx);
    }

    visitManual(ctx: ManualContext) {
        return this.#newEntry(EntryTypeEnum.MANUAL, ctx);
    }

    visitMastersthesis(ctx: MastersthesisContext) {
        return this.#newEntry(EntryTypeEnum.MASTERTHESIS, ctx);
    }

    visitPhdthesis(ctx: PhdthesisContext) {
        return this.#newEntry(EntryTypeEnum.PHDTHESIS, ctx);
    }

    visitMisc(ctx:  MiscContext) {
        return this.#newEntry(EntryTypeEnum.MISC, ctx);
    }

    visitTechreport(ctx: TechreportContext) {
        return this.#newEntry(EntryTypeEnum.TECHREPORT, ctx);
    }

    visitUnpublished(ctx: UnpublishedContext) {
        return this.#newEntry(EntryTypeEnum.UNPUBLISHED, ctx);
    }

    #newEntry(type: EntryTypeEnum, ctx: ParserRuleContext): FullEntry {
        const idNode = (ctx as any).IDENTIFIER?.();
        const id = Array.isArray(idNode)
            ? idNode[0].symbol.text
            : idNode?.symbol.text ?? 'UNKNOWN';
        const raw = ctx.start.inputStream?.getText(
            Interval.of(ctx.start.startIndex, ctx.stop?.stopIndex ?? ctx.start.startIndex)
        ) ?? '';

        const fields = (ctx as any).field?.().map((f: any) => f.accept(this.fieldVisitor)) ?? [];

        return { type: type, id: id, raw: raw, fields: fields };
    }


    visitEntry(ctx: EntryContext) {
        let type: EntryTypeEnum;
        let subCtx:
            | ArticleContext
            | BookContext
            | BookletContext
            | InbookContext
            | IncollectionContext
            | InproceedingsContext
            | ProceedingsContext
            | ManualContext
            | MastersthesisContext
            | PhdthesisContext
            | MiscContext
            | TechreportContext
            | UnpublishedContext
            | undefined;

        if ((subCtx = ctx.article())) {
            type = EntryTypeEnum.ARTICLE;
        } else if ((subCtx = ctx.book())) {
            type = EntryTypeEnum.BOOK;
        } else if ((subCtx = ctx.booklet())) {
            type = EntryTypeEnum.BOOKLET;
        } else if ((subCtx = ctx.inbook())) {
            type = EntryTypeEnum.INBOOK;
        } else if ((subCtx = ctx.incollection())) {
            type = EntryTypeEnum.INCOLLECTION;
        } else if ((subCtx = ctx.inproceedings())) {
            type = EntryTypeEnum.INPROCEEDINGS;
        } else if ((subCtx = ctx.proceedings())) {
            type = EntryTypeEnum.PROCEEDINGS;
        } else if ((subCtx = ctx.manual())) {
            type = EntryTypeEnum.MANUAL;
        } else if ((subCtx = ctx.mastersthesis())) {
            type = EntryTypeEnum.MASTERTHESIS;
        } else if ((subCtx = ctx.phdthesis())) {
            type = EntryTypeEnum.PHDTHESIS;
        } else if ((subCtx = ctx.misc())) {
            type = EntryTypeEnum.MISC;
        } else if ((subCtx = ctx.techreport())) {
            type = EntryTypeEnum.TECHREPORT;
        } else if ((subCtx = ctx.unpublished())) {
            type = EntryTypeEnum.UNPUBLISHED;
        } else {
            throw new Error("Unknown entry type.");
        }

        return this.#newEntry(type, subCtx);
    }

}