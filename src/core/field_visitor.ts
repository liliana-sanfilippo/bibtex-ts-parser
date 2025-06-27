import BibTeXVisitor from "../base/BibTeXVisitor";
import {Field, ValueType} from "./type";
import {ArticleContext, BibTexContext, BookContext, BookletContext, EntryContext,
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
 * Field Visitor
 *
 * @author Yepeng Ding
 */
export default class FieldVisitor implements BibTeXVisitor<Field> {
    visitBibTex?: ((ctx: BibTexContext) => Field) | undefined;
    visitEntry?: ((ctx: EntryContext) => Field) | undefined;
    visitKey?: ((ctx: KeyContext) => Field) | undefined;
    visitValue?: ((ctx: ValueContext) => Field) | undefined;
    visitArticle?: ((ctx: ArticleContext) => Field) | undefined;
    visitBook?: ((ctx: BookContext) => Field) | undefined;
    visitBooklet?: ((ctx: BookletContext) => Field) | undefined;
    visitInbook?: ((ctx: InbookContext) => Field) | undefined;
    visitIncollection?: ((ctx: IncollectionContext) => Field) | undefined;
    visitInproceedings?: ((ctx: InproceedingsContext) => Field) | undefined;
    visitProceedings?: ((ctx: ProceedingsContext) => Field) | undefined;
    visitManual?: ((ctx: ManualContext) => Field) | undefined;
    visitMastersthesis?: ((ctx: MastersthesisContext) => Field) | undefined;
    visitPhdthesis?: ((ctx: PhdthesisContext) => Field) | undefined;
    visitMisc?: ((ctx: MiscContext) => Field) | undefined;
    visitTechreport?: ((ctx: TechreportContext) => Field) | undefined;
    visitUnpublished?: ((ctx: UnpublishedContext) => Field) | undefined;
    visit(tree: ParseTree): Field {
        throw new Error("Method not implemented.");
    }
    visitChildren(node: RuleNode): Field {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): Field {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): Field {
        throw new Error("Method not implemented.");
    }

    visitField(ctx: FieldContext) {
        // Get key
        const key: string = ctx.key().IDENTIFIER().text;

        // Set value and value type
        if (ctx.value().STRING_LITERAL()) {
            // String literal
            let value: string = ctx.value().STRING_LITERAL()?.text ?? '';
            value = value.substring(1, value.length - 1);
            return FieldVisitor.#newField(key, value, ValueType.STRING);
        } else if (ctx.value().INTEGER_LITERAL()) {
            // Integer literal
            return FieldVisitor.#newField(key, parseInt(ctx.value().INTEGER_LITERAL()!.text), ValueType.INTEGER)
        } else {
            throw new Error(`The type of field ${key} value is not supported.`)
        }
    }

    static #newField(key:string, value: number | string, type: ValueType): Field {
        return {
            key: key,
            value: value,
            type: type
        }
    }
}