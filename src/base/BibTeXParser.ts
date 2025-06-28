// Generated from BibTeXParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BibTeXParserListener } from "./BibTeXParserListener";
import { BibTeXParserVisitor } from "./BibTeXParserVisitor";


export class BibTeXParser extends Parser {
	public static readonly ARTICLE = 1;
	public static readonly BOOK = 2;
	public static readonly BOOKLET = 3;
	public static readonly INBOOK = 4;
	public static readonly INCOLLECTION = 5;
	public static readonly INPROCEEDINGS = 6;
	public static readonly PROCEEDINGS = 7;
	public static readonly MANUAL = 8;
	public static readonly MASTERTHESIS = 9;
	public static readonly PHDTHESIS = 10;
	public static readonly MISC = 11;
	public static readonly TECHREPORT = 12;
	public static readonly UNPUBLISHED = 13;
	public static readonly DATASET = 14;
	public static readonly IDENTIFIER = 15;
	public static readonly EQ = 16;
	public static readonly COMMA = 17;
	public static readonly DQUOTE = 18;
	public static readonly LPAREN = 19;
	public static readonly RPAREN = 20;
	public static readonly LBRACE = 21;
	public static readonly RBRACE = 22;
	public static readonly AT = 23;
	public static readonly STRING_LITERAL = 24;
	public static readonly INTEGER_LITERAL = 25;
	public static readonly WS = 26;
	public static readonly LINE_COMMENT = 27;
	public static readonly RULE_bibTex = 0;
	public static readonly RULE_entry = 1;
	public static readonly RULE_field = 2;
	public static readonly RULE_key = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_article = 5;
	public static readonly RULE_book = 6;
	public static readonly RULE_booklet = 7;
	public static readonly RULE_inbook = 8;
	public static readonly RULE_incollection = 9;
	public static readonly RULE_inproceedings = 10;
	public static readonly RULE_proceedings = 11;
	public static readonly RULE_manual = 12;
	public static readonly RULE_mastersthesis = 13;
	public static readonly RULE_phdthesis = 14;
	public static readonly RULE_misc = 15;
	public static readonly RULE_techreport = 16;
	public static readonly RULE_unpublished = 17;
	public static readonly RULE_dataset = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bibTex", "entry", "field", "key", "value", "article", "book", "booklet", 
		"inbook", "incollection", "inproceedings", "proceedings", "manual", "mastersthesis", 
		"phdthesis", "misc", "techreport", "unpublished", "dataset",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'='", "','", "'\"'", "'('", "')'", "'{'", "'}'", 
		"'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", "INCOLLECTION", "INPROCEEDINGS", 
		"PROCEEDINGS", "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", "TECHREPORT", 
		"UNPUBLISHED", "DATASET", "IDENTIFIER", "EQ", "COMMA", "DQUOTE", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "AT", "STRING_LITERAL", "INTEGER_LITERAL", 
		"WS", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BibTeXParser._LITERAL_NAMES, BibTeXParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BibTeXParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BibTeXParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return BibTeXParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BibTeXParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BibTeXParser._ATN, this);
	}
	// @RuleVersion(0)
	public bibTex(): BibTexContext {
		let _localctx: BibTexContext = new BibTexContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BibTeXParser.RULE_bibTex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BibTeXParser.ARTICLE) | (1 << BibTeXParser.BOOK) | (1 << BibTeXParser.BOOKLET) | (1 << BibTeXParser.INBOOK) | (1 << BibTeXParser.INCOLLECTION) | (1 << BibTeXParser.INPROCEEDINGS) | (1 << BibTeXParser.PROCEEDINGS) | (1 << BibTeXParser.MANUAL) | (1 << BibTeXParser.MASTERTHESIS) | (1 << BibTeXParser.PHDTHESIS) | (1 << BibTeXParser.MISC) | (1 << BibTeXParser.TECHREPORT) | (1 << BibTeXParser.UNPUBLISHED) | (1 << BibTeXParser.DATASET))) !== 0)) {
				{
				{
				this.state = 38;
				this.entry();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this.match(BibTeXParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entry(): EntryContext {
		let _localctx: EntryContext = new EntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BibTeXParser.RULE_entry);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BibTeXParser.ARTICLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.article();
				}
				break;
			case BibTeXParser.BOOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.book();
				}
				break;
			case BibTeXParser.BOOKLET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.booklet();
				}
				break;
			case BibTeXParser.INBOOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.inbook();
				}
				break;
			case BibTeXParser.INCOLLECTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 50;
				this.incollection();
				}
				break;
			case BibTeXParser.INPROCEEDINGS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 51;
				this.inproceedings();
				}
				break;
			case BibTeXParser.PROCEEDINGS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 52;
				this.proceedings();
				}
				break;
			case BibTeXParser.MANUAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 53;
				this.manual();
				}
				break;
			case BibTeXParser.MASTERTHESIS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 54;
				this.mastersthesis();
				}
				break;
			case BibTeXParser.PHDTHESIS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 55;
				this.phdthesis();
				}
				break;
			case BibTeXParser.MISC:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 56;
				this.misc();
				}
				break;
			case BibTeXParser.TECHREPORT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 57;
				this.techreport();
				}
				break;
			case BibTeXParser.UNPUBLISHED:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 58;
				this.unpublished();
				}
				break;
			case BibTeXParser.DATASET:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 59;
				this.dataset();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BibTeXParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.key();
			this.state = 63;
			this.match(BibTeXParser.EQ);
			this.state = 64;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BibTeXParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(BibTeXParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BibTeXParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			_la = this._input.LA(1);
			if (!(_la === BibTeXParser.STRING_LITERAL || _la === BibTeXParser.INTEGER_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public article(): ArticleContext {
		let _localctx: ArticleContext = new ArticleContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BibTeXParser.RULE_article);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(BibTeXParser.ARTICLE);
			this.state = 71;
			this.match(BibTeXParser.LBRACE);
			this.state = 72;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 73;
			this.match(BibTeXParser.COMMA);
			this.state = 74;
			this.field();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 75;
				this.match(BibTeXParser.COMMA);
				this.state = 76;
				this.field();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public book(): BookContext {
		let _localctx: BookContext = new BookContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BibTeXParser.RULE_book);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(BibTeXParser.BOOK);
			this.state = 85;
			this.match(BibTeXParser.LBRACE);
			this.state = 86;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 87;
			this.match(BibTeXParser.COMMA);
			this.state = 88;
			this.field();
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 89;
				this.match(BibTeXParser.COMMA);
				this.state = 90;
				this.field();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 96;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booklet(): BookletContext {
		let _localctx: BookletContext = new BookletContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BibTeXParser.RULE_booklet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(BibTeXParser.BOOKLET);
			this.state = 99;
			this.match(BibTeXParser.LBRACE);
			this.state = 100;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 101;
			this.match(BibTeXParser.COMMA);
			this.state = 102;
			this.field();
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 103;
				this.match(BibTeXParser.COMMA);
				this.state = 104;
				this.field();
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inbook(): InbookContext {
		let _localctx: InbookContext = new InbookContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BibTeXParser.RULE_inbook);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(BibTeXParser.INBOOK);
			this.state = 113;
			this.match(BibTeXParser.LBRACE);
			this.state = 114;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 115;
			this.match(BibTeXParser.COMMA);
			this.state = 116;
			this.field();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 117;
				this.match(BibTeXParser.COMMA);
				this.state = 118;
				this.field();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 124;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incollection(): IncollectionContext {
		let _localctx: IncollectionContext = new IncollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BibTeXParser.RULE_incollection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(BibTeXParser.INCOLLECTION);
			this.state = 127;
			this.match(BibTeXParser.LBRACE);
			this.state = 128;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 129;
			this.match(BibTeXParser.COMMA);
			this.state = 130;
			this.field();
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 131;
				this.match(BibTeXParser.COMMA);
				this.state = 132;
				this.field();
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 138;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inproceedings(): InproceedingsContext {
		let _localctx: InproceedingsContext = new InproceedingsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BibTeXParser.RULE_inproceedings);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(BibTeXParser.INPROCEEDINGS);
			this.state = 141;
			this.match(BibTeXParser.LBRACE);
			this.state = 142;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 143;
			this.match(BibTeXParser.COMMA);
			this.state = 144;
			this.field();
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 145;
				this.match(BibTeXParser.COMMA);
				this.state = 146;
				this.field();
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public proceedings(): ProceedingsContext {
		let _localctx: ProceedingsContext = new ProceedingsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, BibTeXParser.RULE_proceedings);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(BibTeXParser.PROCEEDINGS);
			this.state = 155;
			this.match(BibTeXParser.LBRACE);
			this.state = 156;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 157;
			this.match(BibTeXParser.COMMA);
			this.state = 158;
			this.field();
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 159;
				this.match(BibTeXParser.COMMA);
				this.state = 160;
				this.field();
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 166;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public manual(): ManualContext {
		let _localctx: ManualContext = new ManualContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, BibTeXParser.RULE_manual);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(BibTeXParser.MANUAL);
			this.state = 169;
			this.match(BibTeXParser.LBRACE);
			this.state = 170;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 171;
			this.match(BibTeXParser.COMMA);
			this.state = 172;
			this.field();
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 173;
				this.match(BibTeXParser.COMMA);
				this.state = 174;
				this.field();
				}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 180;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mastersthesis(): MastersthesisContext {
		let _localctx: MastersthesisContext = new MastersthesisContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, BibTeXParser.RULE_mastersthesis);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(BibTeXParser.MASTERTHESIS);
			this.state = 183;
			this.match(BibTeXParser.LBRACE);
			this.state = 184;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 185;
			this.match(BibTeXParser.COMMA);
			this.state = 186;
			this.field();
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 187;
				this.match(BibTeXParser.COMMA);
				this.state = 188;
				this.field();
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public phdthesis(): PhdthesisContext {
		let _localctx: PhdthesisContext = new PhdthesisContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, BibTeXParser.RULE_phdthesis);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(BibTeXParser.PHDTHESIS);
			this.state = 197;
			this.match(BibTeXParser.LBRACE);
			this.state = 198;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 199;
			this.match(BibTeXParser.COMMA);
			this.state = 200;
			this.field();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 201;
				this.match(BibTeXParser.COMMA);
				this.state = 202;
				this.field();
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public misc(): MiscContext {
		let _localctx: MiscContext = new MiscContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, BibTeXParser.RULE_misc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(BibTeXParser.MISC);
			this.state = 211;
			this.match(BibTeXParser.LBRACE);
			this.state = 212;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 213;
			this.match(BibTeXParser.COMMA);
			this.state = 214;
			this.field();
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 215;
				this.match(BibTeXParser.COMMA);
				this.state = 216;
				this.field();
				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 222;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public techreport(): TechreportContext {
		let _localctx: TechreportContext = new TechreportContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, BibTeXParser.RULE_techreport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(BibTeXParser.TECHREPORT);
			this.state = 225;
			this.match(BibTeXParser.LBRACE);
			this.state = 226;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 227;
			this.match(BibTeXParser.COMMA);
			this.state = 228;
			this.field();
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 229;
				this.match(BibTeXParser.COMMA);
				this.state = 230;
				this.field();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 236;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unpublished(): UnpublishedContext {
		let _localctx: UnpublishedContext = new UnpublishedContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, BibTeXParser.RULE_unpublished);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(BibTeXParser.UNPUBLISHED);
			this.state = 239;
			this.match(BibTeXParser.LBRACE);
			this.state = 240;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 241;
			this.match(BibTeXParser.COMMA);
			this.state = 242;
			this.field();
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 243;
				this.match(BibTeXParser.COMMA);
				this.state = 244;
				this.field();
				}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 250;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataset(): DatasetContext {
		let _localctx: DatasetContext = new DatasetContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, BibTeXParser.RULE_dataset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(BibTeXParser.DATASET);
			this.state = 253;
			this.match(BibTeXParser.LBRACE);
			this.state = 254;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 255;
			this.match(BibTeXParser.COMMA);
			this.state = 256;
			this.field();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BibTeXParser.COMMA) {
				{
				{
				this.state = 257;
				this.match(BibTeXParser.COMMA);
				this.state = 258;
				this.field();
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 264;
			this.match(BibTeXParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D\u010D\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03?\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07P\n\x07\f\x07" +
		"\x0E\x07S\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x07\b^\n\b\f\b\x0E\ba\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x07\tl\n\t\f\t\x0E\to\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\nz\n\n\f\n\x0E\n}\v\n\x03\n\x03\n\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x88\n\v\f\v\x0E\v\x8B\v\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\x96\n\f\f\f\x0E\f\x99" +
		"\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xA4\n" +
		"\r\f\r\x0E\r\xA7\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\xB2\n\x0E\f\x0E\x0E\x0E\xB5\v\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xC0" +
		"\n\x0F\f\x0F\x0E\x0F\xC3\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xCE\n\x10\f\x10\x0E\x10\xD1\v" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\xDC\n\x11\f\x11\x0E\x11\xDF\v\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xEA\n\x12\f\x12" +
		"\x0E\x12\xED\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\xF8\n\x13\f\x13\x0E\x13\xFB\v\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u0106\n\x14\f\x14\x0E\x14\u0109\v\x14\x03\x14\x03\x14\x03\x14\x02\x02" +
		"\x02\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02\x02\x03\x03\x02\x1A\x1B\x02\u0115\x02+\x03\x02\x02\x02\x04>\x03\x02" +
		"\x02\x02\x06@\x03\x02\x02\x02\bD\x03\x02\x02\x02\nF\x03\x02\x02\x02\f" +
		"H\x03\x02\x02\x02\x0EV\x03\x02\x02\x02\x10d\x03\x02\x02\x02\x12r\x03\x02" +
		"\x02\x02\x14\x80\x03\x02\x02\x02\x16\x8E\x03\x02\x02\x02\x18\x9C\x03\x02" +
		"\x02\x02\x1A\xAA\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E\xC6\x03\x02" +
		"\x02\x02 \xD4\x03\x02\x02\x02\"\xE2\x03\x02\x02\x02$\xF0\x03\x02\x02\x02" +
		"&\xFE\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02\x02*-\x03\x02\x02" +
		"\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02" +
		"\x02./\x07\x02\x02\x03/\x03\x03\x02\x02\x020?\x05\f\x07\x021?\x05\x0E" +
		"\b\x022?\x05\x10\t\x023?\x05\x12\n\x024?\x05\x14\v\x025?\x05\x16\f\x02" +
		"6?\x05\x18\r\x027?\x05\x1A\x0E\x028?\x05\x1C\x0F\x029?\x05\x1E\x10\x02" +
		":?\x05 \x11\x02;?\x05\"\x12\x02<?\x05$\x13\x02=?\x05&\x14\x02>0\x03\x02" +
		"\x02\x02>1\x03\x02\x02\x02>2\x03\x02\x02\x02>3\x03\x02\x02\x02>4\x03\x02" +
		"\x02\x02>5\x03\x02\x02\x02>6\x03\x02\x02\x02>7\x03\x02\x02\x02>8\x03\x02" +
		"\x02\x02>9\x03\x02\x02\x02>:\x03\x02\x02\x02>;\x03\x02\x02\x02><\x03\x02" +
		"\x02\x02>=\x03\x02\x02\x02?\x05\x03\x02\x02\x02@A\x05\b\x05\x02AB\x07" +
		"\x12\x02\x02BC\x05\n\x06\x02C\x07\x03\x02\x02\x02DE\x07\x11\x02\x02E\t" +
		"\x03\x02\x02\x02FG\t\x02\x02\x02G\v\x03\x02\x02\x02HI\x07\x03\x02\x02" +
		"IJ\x07\x17\x02\x02JK\x07\x11\x02\x02KL\x07\x13\x02\x02LQ\x05\x06\x04\x02" +
		"MN\x07\x13\x02\x02NP\x05\x06\x04\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02" +
		"QO\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"TU\x07\x18\x02\x02U\r\x03\x02\x02\x02VW\x07\x04\x02\x02WX\x07\x17\x02" +
		"\x02XY\x07\x11\x02\x02YZ\x07\x13\x02\x02Z_\x05\x06\x04\x02[\\\x07\x13" +
		"\x02\x02\\^\x05\x06\x04\x02][\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03" +
		"\x02\x02\x02_`\x03\x02\x02\x02`b\x03\x02\x02\x02a_\x03\x02\x02\x02bc\x07" +
		"\x18\x02\x02c\x0F\x03\x02\x02\x02de\x07\x05\x02\x02ef\x07\x17\x02\x02" +
		"fg\x07\x11\x02\x02gh\x07\x13\x02\x02hm\x05\x06\x04\x02ij\x07\x13\x02\x02" +
		"jl\x05\x06\x04\x02ki\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02" +
		"mn\x03\x02\x02\x02np\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x18\x02\x02" +
		"q\x11\x03\x02\x02\x02rs\x07\x06\x02\x02st\x07\x17\x02\x02tu\x07\x11\x02" +
		"\x02uv\x07\x13\x02\x02v{\x05\x06\x04\x02wx\x07\x13\x02\x02xz\x05\x06\x04" +
		"\x02yw\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02" +
		"\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07\x18\x02\x02\x7F\x13" +
		"\x03\x02\x02\x02\x80\x81\x07\x07\x02\x02\x81\x82\x07\x17\x02\x02\x82\x83" +
		"\x07\x11\x02\x02\x83\x84\x07\x13\x02\x02\x84\x89\x05\x06\x04\x02\x85\x86" +
		"\x07\x13\x02\x02\x86\x88\x05\x06\x04\x02\x87\x85\x03\x02\x02\x02\x88\x8B" +
		"\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8C" +
		"\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8D\x07\x18\x02\x02\x8D\x15" +
		"\x03\x02\x02\x02\x8E\x8F\x07\b\x02\x02\x8F\x90\x07\x17\x02\x02\x90\x91" +
		"\x07\x11\x02\x02\x91\x92\x07\x13\x02\x02\x92\x97\x05\x06\x04\x02\x93\x94" +
		"\x07\x13\x02\x02\x94\x96\x05\x06\x04\x02\x95\x93\x03\x02\x02\x02\x96\x99" +
		"\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A" +
		"\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9B\x07\x18\x02\x02\x9B\x17" +
		"\x03\x02\x02\x02\x9C\x9D\x07\t\x02\x02\x9D\x9E\x07\x17\x02\x02\x9E\x9F" +
		"\x07\x11\x02\x02\x9F\xA0\x07\x13\x02\x02\xA0\xA5\x05\x06\x04\x02\xA1\xA2" +
		"\x07\x13\x02\x02\xA2\xA4\x05\x06\x04\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA7" +
		"\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA8" +
		"\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x07\x18\x02\x02\xA9\x19" +
		"\x03\x02\x02\x02\xAA\xAB\x07\n\x02\x02\xAB\xAC\x07\x17\x02\x02\xAC\xAD" +
		"\x07\x11\x02\x02\xAD\xAE\x07\x13\x02\x02\xAE\xB3\x05\x06\x04\x02\xAF\xB0" +
		"\x07\x13\x02\x02\xB0\xB2\x05\x06\x04\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5" +
		"\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6" +
		"\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB7\x07\x18\x02\x02\xB7\x1B" +
		"\x03\x02\x02\x02\xB8\xB9\x07\v\x02\x02\xB9\xBA\x07\x17\x02\x02\xBA\xBB" +
		"\x07\x11\x02\x02\xBB\xBC\x07\x13\x02\x02\xBC\xC1\x05\x06\x04\x02\xBD\xBE" +
		"\x07\x13\x02\x02\xBE\xC0\x05\x06\x04\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC3" +
		"\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4" +
		"\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC5\x07\x18\x02\x02\xC5\x1D" +
		"\x03\x02\x02\x02\xC6\xC7\x07\f\x02\x02\xC7\xC8\x07\x17\x02\x02\xC8\xC9" +
		"\x07\x11\x02\x02\xC9\xCA\x07\x13\x02\x02\xCA\xCF\x05\x06\x04\x02\xCB\xCC" +
		"\x07\x13\x02\x02\xCC\xCE\x05\x06\x04\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD1" +
		"\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2" +
		"\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x07\x18\x02\x02\xD3\x1F" +
		"\x03\x02\x02\x02\xD4\xD5\x07\r\x02\x02\xD5\xD6\x07\x17\x02\x02\xD6\xD7" +
		"\x07\x11\x02\x02\xD7\xD8\x07\x13\x02\x02\xD8\xDD\x05\x06\x04\x02\xD9\xDA" +
		"\x07\x13\x02\x02\xDA\xDC\x05\x06\x04\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF" +
		"\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE0" +
		"\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x07\x18\x02\x02\xE1!" +
		"\x03\x02\x02\x02\xE2\xE3\x07\x0E\x02\x02\xE3\xE4\x07\x17\x02\x02\xE4\xE5" +
		"\x07\x11\x02\x02\xE5\xE6\x07\x13\x02\x02\xE6\xEB\x05\x06\x04\x02\xE7\xE8" +
		"\x07\x13\x02\x02\xE8\xEA\x05\x06\x04\x02\xE9\xE7\x03\x02\x02\x02\xEA\xED" +
		"\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE" +
		"\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xEF\x07\x18\x02\x02\xEF#" +
		"\x03\x02\x02\x02\xF0\xF1\x07\x0F\x02\x02\xF1\xF2\x07\x17\x02\x02\xF2\xF3" +
		"\x07\x11\x02\x02\xF3\xF4\x07\x13\x02\x02\xF4\xF9\x05\x06\x04\x02\xF5\xF6" +
		"\x07\x13\x02\x02\xF6\xF8\x05\x06\x04\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFB" +
		"\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC" +
		"\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFD\x07\x18\x02\x02\xFD%" +
		"\x03\x02\x02\x02\xFE\xFF\x07\x10\x02\x02\xFF\u0100\x07\x17\x02\x02\u0100" +
		"\u0101\x07\x11\x02\x02\u0101\u0102\x07\x13\x02\x02\u0102\u0107\x05\x06" +
		"\x04\x02\u0103\u0104\x07\x13\x02\x02\u0104\u0106\x05\x06\x04\x02\u0105" +
		"\u0103\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02" +
		"\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010A\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u010A\u010B\x07\x18\x02\x02\u010B\'\x03\x02\x02" +
		"\x02\x12+>Q_m{\x89\x97\xA5\xB3\xC1\xCF\xDD\xEB\xF9\u0107";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BibTeXParser.__ATN) {
			BibTeXParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BibTeXParser._serializedATN));
		}

		return BibTeXParser.__ATN;
	}

}

export class BibTexContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(BibTeXParser.EOF, 0); }
	public entry(): EntryContext[];
	public entry(i: number): EntryContext;
	public entry(i?: number): EntryContext | EntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntryContext);
		} else {
			return this.getRuleContext(i, EntryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_bibTex; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterBibTex) {
			listener.enterBibTex(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitBibTex) {
			listener.exitBibTex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitBibTex) {
			return visitor.visitBibTex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntryContext extends ParserRuleContext {
	public article(): ArticleContext | undefined {
		return this.tryGetRuleContext(0, ArticleContext);
	}
	public book(): BookContext | undefined {
		return this.tryGetRuleContext(0, BookContext);
	}
	public booklet(): BookletContext | undefined {
		return this.tryGetRuleContext(0, BookletContext);
	}
	public inbook(): InbookContext | undefined {
		return this.tryGetRuleContext(0, InbookContext);
	}
	public incollection(): IncollectionContext | undefined {
		return this.tryGetRuleContext(0, IncollectionContext);
	}
	public inproceedings(): InproceedingsContext | undefined {
		return this.tryGetRuleContext(0, InproceedingsContext);
	}
	public proceedings(): ProceedingsContext | undefined {
		return this.tryGetRuleContext(0, ProceedingsContext);
	}
	public manual(): ManualContext | undefined {
		return this.tryGetRuleContext(0, ManualContext);
	}
	public mastersthesis(): MastersthesisContext | undefined {
		return this.tryGetRuleContext(0, MastersthesisContext);
	}
	public phdthesis(): PhdthesisContext | undefined {
		return this.tryGetRuleContext(0, PhdthesisContext);
	}
	public misc(): MiscContext | undefined {
		return this.tryGetRuleContext(0, MiscContext);
	}
	public techreport(): TechreportContext | undefined {
		return this.tryGetRuleContext(0, TechreportContext);
	}
	public unpublished(): UnpublishedContext | undefined {
		return this.tryGetRuleContext(0, UnpublishedContext);
	}
	public dataset(): DatasetContext | undefined {
		return this.tryGetRuleContext(0, DatasetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_entry; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterEntry) {
			listener.enterEntry(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitEntry) {
			listener.exitEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitEntry) {
			return visitor.visitEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public EQ(): TerminalNode { return this.getToken(BibTeXParser.EQ, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_field; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_key; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(BibTeXParser.INTEGER_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(BibTeXParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_value; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArticleContext extends ParserRuleContext {
	public ARTICLE(): TerminalNode { return this.getToken(BibTeXParser.ARTICLE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_article; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterArticle) {
			listener.enterArticle(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitArticle) {
			listener.exitArticle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitArticle) {
			return visitor.visitArticle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BookContext extends ParserRuleContext {
	public BOOK(): TerminalNode { return this.getToken(BibTeXParser.BOOK, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_book; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterBook) {
			listener.enterBook(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitBook) {
			listener.exitBook(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitBook) {
			return visitor.visitBook(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BookletContext extends ParserRuleContext {
	public BOOKLET(): TerminalNode { return this.getToken(BibTeXParser.BOOKLET, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_booklet; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterBooklet) {
			listener.enterBooklet(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitBooklet) {
			listener.exitBooklet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitBooklet) {
			return visitor.visitBooklet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InbookContext extends ParserRuleContext {
	public INBOOK(): TerminalNode { return this.getToken(BibTeXParser.INBOOK, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_inbook; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterInbook) {
			listener.enterInbook(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitInbook) {
			listener.exitInbook(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitInbook) {
			return visitor.visitInbook(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncollectionContext extends ParserRuleContext {
	public INCOLLECTION(): TerminalNode { return this.getToken(BibTeXParser.INCOLLECTION, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_incollection; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterIncollection) {
			listener.enterIncollection(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitIncollection) {
			listener.exitIncollection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitIncollection) {
			return visitor.visitIncollection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InproceedingsContext extends ParserRuleContext {
	public INPROCEEDINGS(): TerminalNode { return this.getToken(BibTeXParser.INPROCEEDINGS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_inproceedings; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterInproceedings) {
			listener.enterInproceedings(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitInproceedings) {
			listener.exitInproceedings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitInproceedings) {
			return visitor.visitInproceedings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProceedingsContext extends ParserRuleContext {
	public PROCEEDINGS(): TerminalNode { return this.getToken(BibTeXParser.PROCEEDINGS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_proceedings; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterProceedings) {
			listener.enterProceedings(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitProceedings) {
			listener.exitProceedings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitProceedings) {
			return visitor.visitProceedings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ManualContext extends ParserRuleContext {
	public MANUAL(): TerminalNode { return this.getToken(BibTeXParser.MANUAL, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_manual; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterManual) {
			listener.enterManual(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitManual) {
			listener.exitManual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitManual) {
			return visitor.visitManual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MastersthesisContext extends ParserRuleContext {
	public MASTERTHESIS(): TerminalNode { return this.getToken(BibTeXParser.MASTERTHESIS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_mastersthesis; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterMastersthesis) {
			listener.enterMastersthesis(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitMastersthesis) {
			listener.exitMastersthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitMastersthesis) {
			return visitor.visitMastersthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhdthesisContext extends ParserRuleContext {
	public PHDTHESIS(): TerminalNode { return this.getToken(BibTeXParser.PHDTHESIS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_phdthesis; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterPhdthesis) {
			listener.enterPhdthesis(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitPhdthesis) {
			listener.exitPhdthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitPhdthesis) {
			return visitor.visitPhdthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MiscContext extends ParserRuleContext {
	public MISC(): TerminalNode { return this.getToken(BibTeXParser.MISC, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_misc; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterMisc) {
			listener.enterMisc(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitMisc) {
			listener.exitMisc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitMisc) {
			return visitor.visitMisc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TechreportContext extends ParserRuleContext {
	public TECHREPORT(): TerminalNode { return this.getToken(BibTeXParser.TECHREPORT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_techreport; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterTechreport) {
			listener.enterTechreport(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitTechreport) {
			listener.exitTechreport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitTechreport) {
			return visitor.visitTechreport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnpublishedContext extends ParserRuleContext {
	public UNPUBLISHED(): TerminalNode { return this.getToken(BibTeXParser.UNPUBLISHED, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_unpublished; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterUnpublished) {
			listener.enterUnpublished(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitUnpublished) {
			listener.exitUnpublished(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitUnpublished) {
			return visitor.visitUnpublished(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatasetContext extends ParserRuleContext {
	public DATASET(): TerminalNode { return this.getToken(BibTeXParser.DATASET, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeXParser.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeXParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BibTeXParser.COMMA);
		} else {
			return this.getToken(BibTeXParser.COMMA, i);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(BibTeXParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeXParser.RULE_dataset; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterDataset) {
			listener.enterDataset(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitDataset) {
			listener.exitDataset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitDataset) {
			return visitor.visitDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


