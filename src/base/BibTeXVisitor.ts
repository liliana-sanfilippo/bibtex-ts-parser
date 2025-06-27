// Generated from src/grammar/BibTeX.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BibTexContext } from "./BibTeX";
import { EntryContext } from "./BibTeX";
import { FieldContext } from "./BibTeX";
import { KeyContext } from "./BibTeX";
import { ValueContext } from "./BibTeX";
import { ArticleContext } from "./BibTeX";
import { BookContext } from "./BibTeX";
import { BookletContext } from "./BibTeX";
import { InbookContext } from "./BibTeX";
import { IncollectionContext } from "./BibTeX";
import { InproceedingsContext } from "./BibTeX";
import { ProceedingsContext } from "./BibTeX";
import { ManualContext } from "./BibTeX";
import { MastersthesisContext } from "./BibTeX";
import { PhdthesisContext } from "./BibTeX";
import { MiscContext } from "./BibTeX";
import { TechreportContext } from "./BibTeX";
import { UnpublishedContext } from "./BibTeX";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BibTeX`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default interface BibTeXVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `BibTeX.bibTex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBibTex?: (ctx: BibTexContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntry?: (ctx: EntryContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.article`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArticle?: (ctx: ArticleContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.book`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBook?: (ctx: BookContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.booklet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooklet?: (ctx: BookletContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.inbook`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInbook?: (ctx: InbookContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.incollection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncollection?: (ctx: IncollectionContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.inproceedings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInproceedings?: (ctx: InproceedingsContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.proceedings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProceedings?: (ctx: ProceedingsContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.manual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManual?: (ctx: ManualContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.mastersthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMastersthesis?: (ctx: MastersthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.phdthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhdthesis?: (ctx: PhdthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.misc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMisc?: (ctx: MiscContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.techreport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTechreport?: (ctx: TechreportContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeX.unpublished`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnpublished?: (ctx: UnpublishedContext) => Result;
}

