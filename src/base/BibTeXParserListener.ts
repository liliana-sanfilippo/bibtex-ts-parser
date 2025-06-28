// Generated from BibTeXParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BibTexContext } from "./BibTeXParser";
import { EntryContext } from "./BibTeXParser";
import { FieldContext } from "./BibTeXParser";
import { KeyContext } from "./BibTeXParser";
import { ValueContext } from "./BibTeXParser";
import { ArticleContext } from "./BibTeXParser";
import { BookContext } from "./BibTeXParser";
import { BookletContext } from "./BibTeXParser";
import { InbookContext } from "./BibTeXParser";
import { IncollectionContext } from "./BibTeXParser";
import { InproceedingsContext } from "./BibTeXParser";
import { ProceedingsContext } from "./BibTeXParser";
import { ManualContext } from "./BibTeXParser";
import { MastersthesisContext } from "./BibTeXParser";
import { PhdthesisContext } from "./BibTeXParser";
import { MiscContext } from "./BibTeXParser";
import { TechreportContext } from "./BibTeXParser";
import { UnpublishedContext } from "./BibTeXParser";
import { DatasetContext } from "./BibTeXParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BibTeXParser`.
 */
export interface BibTeXParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BibTeXParser.bibTex`.
	 * @param ctx the parse tree
	 */
	enterBibTex?: (ctx: BibTexContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.bibTex`.
	 * @param ctx the parse tree
	 */
	exitBibTex?: (ctx: BibTexContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.article`.
	 * @param ctx the parse tree
	 */
	enterArticle?: (ctx: ArticleContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.article`.
	 * @param ctx the parse tree
	 */
	exitArticle?: (ctx: ArticleContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.book`.
	 * @param ctx the parse tree
	 */
	enterBook?: (ctx: BookContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.book`.
	 * @param ctx the parse tree
	 */
	exitBook?: (ctx: BookContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.booklet`.
	 * @param ctx the parse tree
	 */
	enterBooklet?: (ctx: BookletContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.booklet`.
	 * @param ctx the parse tree
	 */
	exitBooklet?: (ctx: BookletContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.inbook`.
	 * @param ctx the parse tree
	 */
	enterInbook?: (ctx: InbookContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.inbook`.
	 * @param ctx the parse tree
	 */
	exitInbook?: (ctx: InbookContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.incollection`.
	 * @param ctx the parse tree
	 */
	enterIncollection?: (ctx: IncollectionContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.incollection`.
	 * @param ctx the parse tree
	 */
	exitIncollection?: (ctx: IncollectionContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.inproceedings`.
	 * @param ctx the parse tree
	 */
	enterInproceedings?: (ctx: InproceedingsContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.inproceedings`.
	 * @param ctx the parse tree
	 */
	exitInproceedings?: (ctx: InproceedingsContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.proceedings`.
	 * @param ctx the parse tree
	 */
	enterProceedings?: (ctx: ProceedingsContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.proceedings`.
	 * @param ctx the parse tree
	 */
	exitProceedings?: (ctx: ProceedingsContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.manual`.
	 * @param ctx the parse tree
	 */
	enterManual?: (ctx: ManualContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.manual`.
	 * @param ctx the parse tree
	 */
	exitManual?: (ctx: ManualContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.mastersthesis`.
	 * @param ctx the parse tree
	 */
	enterMastersthesis?: (ctx: MastersthesisContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.mastersthesis`.
	 * @param ctx the parse tree
	 */
	exitMastersthesis?: (ctx: MastersthesisContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.phdthesis`.
	 * @param ctx the parse tree
	 */
	enterPhdthesis?: (ctx: PhdthesisContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.phdthesis`.
	 * @param ctx the parse tree
	 */
	exitPhdthesis?: (ctx: PhdthesisContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.misc`.
	 * @param ctx the parse tree
	 */
	enterMisc?: (ctx: MiscContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.misc`.
	 * @param ctx the parse tree
	 */
	exitMisc?: (ctx: MiscContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.techreport`.
	 * @param ctx the parse tree
	 */
	enterTechreport?: (ctx: TechreportContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.techreport`.
	 * @param ctx the parse tree
	 */
	exitTechreport?: (ctx: TechreportContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.unpublished`.
	 * @param ctx the parse tree
	 */
	enterUnpublished?: (ctx: UnpublishedContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.unpublished`.
	 * @param ctx the parse tree
	 */
	exitUnpublished?: (ctx: UnpublishedContext) => void;

	/**
	 * Enter a parse tree produced by `BibTeXParser.dataset`.
	 * @param ctx the parse tree
	 */
	enterDataset?: (ctx: DatasetContext) => void;
	/**
	 * Exit a parse tree produced by `BibTeXParser.dataset`.
	 * @param ctx the parse tree
	 */
	exitDataset?: (ctx: DatasetContext) => void;
}

