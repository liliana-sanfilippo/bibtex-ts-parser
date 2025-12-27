import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {BibTeXParserVisitor} from "../base/BibTeXParserVisitor";
import {
    ArticleContext, AudioContext, BachelorthesisContext,
    BookContext,
    BookletContext, DatasetContext,
    EntryContext,
    FieldContext, GenaiContext, IgemwikiContext,
    InbookContext,
    IncollectionContext,
    InproceedingsContext,
    ManualContext,
    MastersthesisContext, MiscContext, OnlineContext, PatentContext,
    PhdthesisContext,
    ProceedingsContext, SoftwareContext, TechreportContext, TranscriptContext, UnpublishedContext, VideoContext
} from "../base/BibTeXParser";
import {Bib, EntryTypeEnum, Field, FullEntry, ValueType} from "./type";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import {Interval} from "antlr4ts/misc";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";


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
        if (ctx.online()) return this.visitOnline(ctx.online ()!);
        if (ctx.transcript()) return this.visitTranscript(ctx.transcript ()!);
        if (ctx.genai()) return this.visitGenai(ctx.genai ()!);
        if (ctx.software()) return this.visitSoftware(ctx.software ()!);
        if (ctx.video()) return this.visitVideo(ctx.video ()!);
        if (ctx.audio()) return this.visitAudio(ctx.audio ()!);
        if (ctx.patent()) return this.visitPatent(ctx.patent ()!);
        if (ctx.bachelorthesis()) return this.visitBachelorthesis(ctx.bachelorthesis()!);
        if (ctx.igemwiki()) return this.visitIgemwiki(ctx.igemwiki()!);
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
     * @param idNode The Terminal Node of the Context
     * @returns The constructed `FullEntry`.
     */
    newEntry(type: EntryTypeEnum, ctx: ParserRuleContext, idNode: TerminalNode): FullEntry {
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
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.ARTICLE, ctx, idNode);
    }

    visitBook(ctx: BookContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.BOOK, ctx, idNode);
    }

    visitBooklet(ctx: BookletContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.BOOKLET, ctx, idNode);
    }

    visitInbook(ctx: InbookContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.INBOOK, ctx, idNode);
    }

    visitIncollection(ctx: IncollectionContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.INCOLLECTION, ctx, idNode);
    }

    visitInproceedings(ctx: InproceedingsContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.INPROCEEDINGS, ctx, idNode);
    }

    visitProceedings(ctx: ProceedingsContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.PROCEEDINGS, ctx, idNode);
    }

    visitManual(ctx: ManualContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.MANUAL, ctx, idNode);
    }

    visitMastersthesis(ctx: MastersthesisContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.MASTERTHESIS, ctx, idNode);
    }

    visitPhdthesis(ctx: PhdthesisContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.PHDTHESIS, ctx, idNode);
    }

    visitMisc(ctx: MiscContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.MISC, ctx, idNode);
    }

    visitTechreport(ctx: TechreportContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.TECHREPORT, ctx, idNode);
    }

    visitUnpublished(ctx: UnpublishedContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.UNPUBLISHED, ctx, idNode);
    }

    visitDataset(ctx: DatasetContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.DATASET, ctx, idNode);
    }

    visitSoftware(ctx: SoftwareContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.SOFTWARE, ctx, idNode);
    }

    visitGenai(ctx: GenaiContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.GENAI, ctx, idNode);
    }

    visitOnline(ctx: OnlineContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.ONLINE, ctx, idNode);
    }

    visitTranscript(ctx: TranscriptContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.TRANSCRIPT, ctx, idNode);
    }
    visitVideo(ctx: VideoContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.VIDEO, ctx, idNode);
    }

    visitAudio(ctx: AudioContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.AUDIO, ctx, idNode);
    }

    visitPatent(ctx: PatentContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.PATENT, ctx, idNode);
    }

    visitBachelorthesis(ctx: BachelorthesisContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.BACHELORTHESIS, ctx, idNode);
    }

    visitIgemwiki(ctx: IgemwikiContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.IGEMWIKI, ctx, idNode);
    }

}
