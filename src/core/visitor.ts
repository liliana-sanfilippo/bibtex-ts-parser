import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {BibTeXParserVisitor} from "../base/BibTeXParserVisitor";
import {
    ArticleContext,
    BookContext,
    BookletContext, DatasetContext,
    EntryContext,
    FieldContext,
    InbookContext,
    IncollectionContext,
    InproceedingsContext,
    ManualContext,
    MastersthesisContext, MiscContext,
    PhdthesisContext,
    ProceedingsContext, TechreportContext, UnpublishedContext
} from "../base/BibTeXParser";
import {Bib, EntryTypeEnum, Field, FullEntry, ValueType} from "./type";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import {Interval} from "antlr4ts/misc";


/**
 * Complete BibTeX visitor implementation for traversing and converting parse trees
 * into structured TypeScript objects.
 *
 * @author Liliana Sanfilippo
 */
export class Visitor extends AbstractParseTreeVisitor<any> implements BibTeXParserVisitor<any> {

    /**
     * The Bib object that stores all parsed entries.
     */
    _bib: Bib = {
        entries: []
    }

    /**
     * Default result required by AbstractParseTreeVisitor.
     * This is returned when no specific visit method applies.
     *
     * @protected
     * @returns An empty object by default
     */
    protected defaultResult() {
        return {};
    }


    /**
     * Visits an `EntryContext`, determines its specific type, converts it into a `FullEntry`,
     * and appends it to the Bib structure.
     *
     * @param ctx The entry context from the parse tree.
     * @returns The fully constructed BibTeX entry object.
     */
    visitEntry(ctx: EntryContext): FullEntry {
        const entry = this.getEntryType(ctx)
        this._bib.entries.push(entry);
        return entry;
    }

    /**
     * Determines the specific type of entry and delegates to the appropriate visitor method.
     *
     * @param ctx Entry context.
     * @returns Fully parsed entry object.
     * @throws Error if the entry type is unknown or unsupported.
     */
    getEntryType(ctx: EntryContext): FullEntry {
        if (ctx.article()) return this.visitArticle(ctx.article()!);
        if (ctx.book()) return this.visitBook(ctx.book()!);
        if (ctx.booklet()) return this.visitBooklet(ctx.booklet()!);
        if (ctx.inbook()) return this.visitInbook(ctx.inbook()!);
        if (ctx.incollection()) return this.visitIncollection(ctx.incollection()!);
        if (ctx.inproceedings()) return this.visitInproceedings(ctx.inproceedings()!);
        if (ctx.manual()) return this.visitManual(ctx.manual()!);
        if (ctx.mastersthesis()) return this.visitMastersthesis(ctx.mastersthesis()!);
        if (ctx.phdthesis()) return this.visitPhdthesis(ctx.phdthesis()!);
        if (ctx.proceedings()) return this.visitProceedings(ctx.proceedings()!);
        if (ctx.techreport()) return this.visitTechreport(ctx.techreport()!);
        if (ctx.unpublished()) return this.visitUnpublished(ctx.unpublished()!);
        if (ctx.misc()) return this.visitMisc(ctx.misc()!);
        if (ctx.dataset()) return this.visitDataset(ctx.dataset ()!);
        throw new Error("Unknown entry type in visitEntry");
    }

    /**
     * Returns the complete parsed BibTeX object.
     *
     * @returns The parsed Bib object containing all entries.
     */
    get bib(): Bib {
        return this._bib;
    }

    /**
     * Creates a new `Field` object from the given key, value, and value type.
     *
     * @param key The field key.
     * @param value The field value (string or number).
     * @param type The value type.
     * @returns A `Field` object.
     */
    newField(key: string, value: number | string, type: ValueType): Field {
        return {
            key: key,
            value: value,
            type: type
        }
    }


    /**
     * Constructs a `FullEntry` from a given context and entry type.
     *
     * @param type The type of the entry (e.g. ARTICLE, BOOK, etc.).
     * @param ctx The parser rule context containing the entry.
     * @returns The constructed `FullEntry`.
     */
    newEntry(type: EntryTypeEnum, ctx: ParserRuleContext): FullEntry {
        const idNode = (ctx as any).IDENTIFIER?.();
        const id = Array.isArray(idNode)
            ? idNode[0].symbol.text
            : idNode?.symbol.text ?? 'MISC';
        const raw = ctx.start.inputStream?.getText(
            Interval.of(ctx.start.startIndex, ctx.stop?.stopIndex ?? ctx.start.startIndex)
        ) ?? '';

        const fields = (ctx as any).field?.().map((f: any) => f.accept(this)) ?? [];

        return {type: type, id: id, raw: raw, fields: fields};
    }

    /**
     * Visits a `FieldContext` node and constructs the corresponding `Field` object.
     *
     * @param ctx Field context from the parse tree.
     * @returns A `Field` object with key, value, and type.
     * @throws Error if the field type is not supported.
     */
    visitField(ctx: FieldContext): Field {
        // Get key
        const key: string = ctx.key().IDENTIFIER().text;
        // Set value and value type
        if (ctx.value().STRING_LITERAL()) {
            // String literal
            let value: string = ctx.value().STRING_LITERAL()?.text ?? '';
            value = value.substring(1, value.length - 1);
            return this.newField(key, value, ValueType.STRING);
        } else if (ctx.value().INTEGER_LITERAL()) {
            // Integer literal
            return this.newField(key, parseInt(ctx.value().INTEGER_LITERAL()!.text), ValueType.INTEGER)
        } else {
            throw new Error(`The type of field ${key} value is not supported.`)
        }
    }

    // === Visitor methods for each BibTeX entry type ===

    visitArticle(ctx: ArticleContext) {
        return this.newEntry(EntryTypeEnum.ARTICLE, ctx);
    }

    visitBook(ctx: BookContext) {
        return this.newEntry(EntryTypeEnum.BOOK, ctx);
    }

    visitBooklet(ctx: BookletContext) {
        return this.newEntry(EntryTypeEnum.BOOKLET, ctx);
    }

    visitInbook(ctx: InbookContext) {
        return this.newEntry(EntryTypeEnum.INBOOK, ctx);
    }

    visitIncollection(ctx: IncollectionContext) {
        return this.newEntry(EntryTypeEnum.INCOLLECTION, ctx);
    }

    visitInproceedings(ctx: InproceedingsContext) {
        return this.newEntry(EntryTypeEnum.INPROCEEDINGS, ctx);
    }

    visitProceedings(ctx: ProceedingsContext) {
        return this.newEntry(EntryTypeEnum.PROCEEDINGS, ctx);
    }

    visitManual(ctx: ManualContext) {
        return this.newEntry(EntryTypeEnum.MANUAL, ctx);
    }

    visitMastersthesis(ctx: MastersthesisContext) {
        return this.newEntry(EntryTypeEnum.MASTERTHESIS, ctx);
    }

    visitPhdthesis(ctx: PhdthesisContext) {
        return this.newEntry(EntryTypeEnum.PHDTHESIS, ctx);
    }

    visitMisc(ctx: MiscContext) {
        return this.newEntry(EntryTypeEnum.MISC, ctx);
    }

    visitTechreport(ctx: TechreportContext) {
        return this.newEntry(EntryTypeEnum.TECHREPORT, ctx);
    }

    visitUnpublished(ctx: UnpublishedContext) {
        return this.newEntry(EntryTypeEnum.UNPUBLISHED, ctx);
    }

    visitDataset(ctx: DatasetContext) {
        return this.newEntry(EntryTypeEnum.DATASET, ctx);
    }

}
