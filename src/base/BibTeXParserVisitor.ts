// Generated from BibTeXParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BibTexContext } from "./BibTeXParser";
import { EntryContext } from "./BibTeXParser";
import { FieldContext } from "./BibTeXParser";
import { KeyContext } from "./BibTeXParser";
import { ValueContext } from "./BibTeXParser";
import { ArticleContext } from "./BibTeXParser";
import { BookContext } from "./BibTeXParser";
import { BookletContext } from "./BibTeXParser";
import { IgemwikiContext } from "./BibTeXParser";
import { BachelorthesisContext } from "./BibTeXParser";
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
import { SoftwareContext } from "./BibTeXParser";
import { OnlineContext } from "./BibTeXParser";
import { GenaiContext } from "./BibTeXParser";
import { TranscriptContext } from "./BibTeXParser";
import { VideoContext } from "./BibTeXParser";
import { PatentContext } from "./BibTeXParser";
import { AudioContext } from "./BibTeXParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BibTeXParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface BibTeXParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `BibTeXParser.bibTex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBibTex?: (ctx: BibTexContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntry?: (ctx: EntryContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.article`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArticle?: (ctx: ArticleContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.book`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBook?: (ctx: BookContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.booklet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooklet?: (ctx: BookletContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.igemwiki`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIgemwiki?: (ctx: IgemwikiContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.bachelorthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBachelorthesis?: (ctx: BachelorthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.inbook`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInbook?: (ctx: InbookContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.incollection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncollection?: (ctx: IncollectionContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.inproceedings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInproceedings?: (ctx: InproceedingsContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.proceedings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProceedings?: (ctx: ProceedingsContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.manual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManual?: (ctx: ManualContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.mastersthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMastersthesis?: (ctx: MastersthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.phdthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhdthesis?: (ctx: PhdthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.misc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMisc?: (ctx: MiscContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.techreport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTechreport?: (ctx: TechreportContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.unpublished`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnpublished?: (ctx: UnpublishedContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.dataset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataset?: (ctx: DatasetContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.software`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoftware?: (ctx: SoftwareContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.online`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnline?: (ctx: OnlineContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.genai`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenai?: (ctx: GenaiContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.transcript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranscript?: (ctx: TranscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.video`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVideo?: (ctx: VideoContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.patent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatent?: (ctx: PatentContext) => Result;

	/**
	 * Visit a parse tree produced by `BibTeXParser.audio`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAudio?: (ctx: AudioContext) => Result;
}

