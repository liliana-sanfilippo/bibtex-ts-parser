// Generated from src/grammar/BibTeX.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `BibTeX`.
 */
export interface BibTeXListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BibTeX.bibTex`.
	 * @param ctx the parse tree
	 */
	enterBibTex?: (ctx: BibTexContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.bibTex`.
	 * @param ctx the parse tree
	 */
	exitBibTex?: (ctx: BibTexContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.article`.
	 * @param ctx the parse tree
	 */
	enterArticle?: (ctx: ArticleContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.article`.
	 * @param ctx the parse tree
	 */
	exitArticle?: (ctx: ArticleContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.book`.
	 * @param ctx the parse tree
	 */
	enterBook?: (ctx: BookContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.book`.
	 * @param ctx the parse tree
	 */
	exitBook?: (ctx: BookContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.booklet`.
	 * @param ctx the parse tree
	 */
	enterBooklet?: (ctx: BookletContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.booklet`.
	 * @param ctx the parse tree
	 */
	exitBooklet?: (ctx: BookletContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.inbook`.
	 * @param ctx the parse tree
	 */
	enterInbook?: (ctx: InbookContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.inbook`.
	 * @param ctx the parse tree
	 */
	exitInbook?: (ctx: InbookContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.incollection`.
	 * @param ctx the parse tree
	 */
	enterIncollection?: (ctx: IncollectionContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.incollection`.
	 * @param ctx the parse tree
	 */
	exitIncollection?: (ctx: IncollectionContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.inproceedings`.
	 * @param ctx the parse tree
	 */
	enterInproceedings?: (ctx: InproceedingsContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.inproceedings`.
	 * @param ctx the parse tree
	 */
	exitInproceedings?: (ctx: InproceedingsContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.proceedings`.
	 * @param ctx the parse tree
	 */
	enterProceedings?: (ctx: ProceedingsContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.proceedings`.
	 * @param ctx the parse tree
	 */
	exitProceedings?: (ctx: ProceedingsContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.manual`.
	 * @param ctx the parse tree
	 */
	enterManual?: (ctx: ManualContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.manual`.
	 * @param ctx the parse tree
	 */
	exitManual?: (ctx: ManualContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.mastersthesis`.
	 * @param ctx the parse tree
	 */
	enterMastersthesis?: (ctx: MastersthesisContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.mastersthesis`.
	 * @param ctx the parse tree
	 */
	exitMastersthesis?: (ctx: MastersthesisContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.phdthesis`.
	 * @param ctx the parse tree
	 */
	enterPhdthesis?: (ctx: PhdthesisContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.phdthesis`.
	 * @param ctx the parse tree
	 */
	exitPhdthesis?: (ctx: PhdthesisContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.misc`.
	 * @param ctx the parse tree
	 */
	enterMisc?: (ctx: MiscContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.misc`.
	 * @param ctx the parse tree
	 */
	exitMisc?: (ctx: MiscContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.techreport`.
	 * @param ctx the parse tree
	 */
	enterTechreport?: (ctx: TechreportContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.techreport`.
	 * @param ctx the parse tree
	 */
	exitTechreport?: (ctx: TechreportContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeX.unpublished`.
	 * @param ctx the parse tree
	 */
	enterUnpublished?: (ctx: UnpublishedContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeX.unpublished`.
	 * @param ctx the parse tree
	 */
	exitUnpublished?: (ctx: UnpublishedContext) => void;
}

