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
	public static readonly ONLINE = 15;
	public static readonly SOFTWARE = 16;
	public static readonly GENAI = 17;
	public static readonly TRANSCRIPT = 18;
	public static readonly IDENTIFIER = 19;
	public static readonly EQ = 20;
	public static readonly COMMA = 21;
	public static readonly DQUOTE = 22;
	public static readonly LPAREN = 23;
	public static readonly RPAREN = 24;
	public static readonly LBRACE = 25;
	public static readonly RBRACE = 26;
	public static readonly AT = 27;
	public static readonly STRING_LITERAL = 28;
	public static readonly INTEGER_LITERAL = 29;
	public static readonly WS = 30;
	public static readonly LINE_COMMENT = 31;
	public static readonly CONFERENCE = 32;
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
	public static readonly RULE_software = 19;
	public static readonly RULE_online = 20;
	public static readonly RULE_conference = 21;
	public static readonly RULE_genai = 22;
	public static readonly RULE_transcript = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bibTex", "entry", "field", "key", "value", "article", "book", "booklet", 
		"inbook", "incollection", "inproceedings", "proceedings", "manual", "mastersthesis", 
		"phdthesis", "misc", "techreport", "unpublished", "dataset", "software", 
		"online", "conference", "genai", "transcript",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@article'", "'@book'", "'@booklet'", "'@inbook'", "'@incollection'", 
		undefined, "'@proceedings'", "'@manual'", "'@masterthesis'", "'@phdthesis'", 
		"'@misc'", "'@techreport'", "'@unpublished'", "'@dataset'", undefined, 
		"'@software'", "'@genai'", "'@transcript'", undefined, "'='", "','", "'\"'", 
		"'('", "')'", "'{'", "'}'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", "INCOLLECTION", "INPROCEEDINGS", 
		"PROCEEDINGS", "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", "TECHREPORT", 
		"UNPUBLISHED", "DATASET", "ONLINE", "SOFTWARE", "GENAI", "TRANSCRIPT", 
		"IDENTIFIER", "EQ", "COMMA", "DQUOTE", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
		"AT", "STRING_LITERAL", "INTEGER_LITERAL", "WS", "LINE_COMMENT", "CONFERENCE",
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
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BibTeXParser.ARTICLE) | (1 << BibTeXParser.BOOK) | (1 << BibTeXParser.BOOKLET) | (1 << BibTeXParser.INBOOK) | (1 << BibTeXParser.INCOLLECTION) | (1 << BibTeXParser.INPROCEEDINGS) | (1 << BibTeXParser.PROCEEDINGS) | (1 << BibTeXParser.MANUAL) | (1 << BibTeXParser.MASTERTHESIS) | (1 << BibTeXParser.PHDTHESIS) | (1 << BibTeXParser.MISC) | (1 << BibTeXParser.TECHREPORT) | (1 << BibTeXParser.UNPUBLISHED) | (1 << BibTeXParser.DATASET) | (1 << BibTeXParser.ONLINE) | (1 << BibTeXParser.SOFTWARE) | (1 << BibTeXParser.GENAI) | (1 << BibTeXParser.TRANSCRIPT))) !== 0)) {
				{
				{
				this.state = 48;
				this.entry();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
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
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BibTeXParser.ARTICLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.article();
				}
				break;
			case BibTeXParser.BOOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.book();
				}
				break;
			case BibTeXParser.BOOKLET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.booklet();
				}
				break;
			case BibTeXParser.INBOOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 59;
				this.inbook();
				}
				break;
			case BibTeXParser.INCOLLECTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 60;
				this.incollection();
				}
				break;
			case BibTeXParser.INPROCEEDINGS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 61;
				this.inproceedings();
				}
				break;
			case BibTeXParser.PROCEEDINGS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 62;
				this.proceedings();
				}
				break;
			case BibTeXParser.MANUAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 63;
				this.manual();
				}
				break;
			case BibTeXParser.MASTERTHESIS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 64;
				this.mastersthesis();
				}
				break;
			case BibTeXParser.PHDTHESIS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 65;
				this.phdthesis();
				}
				break;
			case BibTeXParser.MISC:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 66;
				this.misc();
				}
				break;
			case BibTeXParser.TECHREPORT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 67;
				this.techreport();
				}
				break;
			case BibTeXParser.UNPUBLISHED:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 68;
				this.unpublished();
				}
				break;
			case BibTeXParser.DATASET:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 69;
				this.dataset();
				}
				break;
			case BibTeXParser.ONLINE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 70;
				this.online();
				}
				break;
			case BibTeXParser.SOFTWARE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 71;
				this.software();
				}
				break;
			case BibTeXParser.GENAI:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 72;
				this.genai();
				}
				break;
			case BibTeXParser.TRANSCRIPT:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 73;
				this.transcript();
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
			this.state = 76;
			this.key();
			this.state = 77;
			this.match(BibTeXParser.EQ);
			this.state = 78;
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
			this.state = 80;
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
			this.state = 82;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(BibTeXParser.ARTICLE);
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
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 89;
					this.match(BibTeXParser.COMMA);
					this.state = 90;
					this.field();
					}
					}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 96;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 99;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(BibTeXParser.BOOK);
			this.state = 102;
			this.match(BibTeXParser.LBRACE);
			this.state = 103;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 104;
			this.match(BibTeXParser.COMMA);
			this.state = 105;
			this.field();
			this.state = 110;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 106;
					this.match(BibTeXParser.COMMA);
					this.state = 107;
					this.field();
					}
					}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 113;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 116;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(BibTeXParser.BOOKLET);
			this.state = 119;
			this.match(BibTeXParser.LBRACE);
			this.state = 120;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 121;
			this.match(BibTeXParser.COMMA);
			this.state = 122;
			this.field();
			this.state = 127;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 123;
					this.match(BibTeXParser.COMMA);
					this.state = 124;
					this.field();
					}
					}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 130;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 133;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(BibTeXParser.INBOOK);
			this.state = 136;
			this.match(BibTeXParser.LBRACE);
			this.state = 137;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 138;
			this.match(BibTeXParser.COMMA);
			this.state = 139;
			this.field();
			this.state = 144;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 140;
					this.match(BibTeXParser.COMMA);
					this.state = 141;
					this.field();
					}
					}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 147;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 150;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(BibTeXParser.INCOLLECTION);
			this.state = 153;
			this.match(BibTeXParser.LBRACE);
			this.state = 154;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 155;
			this.match(BibTeXParser.COMMA);
			this.state = 156;
			this.field();
			this.state = 161;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 157;
					this.match(BibTeXParser.COMMA);
					this.state = 158;
					this.field();
					}
					}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 164;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 167;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(BibTeXParser.INPROCEEDINGS);
			this.state = 170;
			this.match(BibTeXParser.LBRACE);
			this.state = 171;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 172;
			this.match(BibTeXParser.COMMA);
			this.state = 173;
			this.field();
			this.state = 178;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 174;
					this.match(BibTeXParser.COMMA);
					this.state = 175;
					this.field();
					}
					}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 181;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 184;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(BibTeXParser.PROCEEDINGS);
			this.state = 187;
			this.match(BibTeXParser.LBRACE);
			this.state = 188;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 189;
			this.match(BibTeXParser.COMMA);
			this.state = 190;
			this.field();
			this.state = 195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 191;
					this.match(BibTeXParser.COMMA);
					this.state = 192;
					this.field();
					}
					}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 198;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 201;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(BibTeXParser.MANUAL);
			this.state = 204;
			this.match(BibTeXParser.LBRACE);
			this.state = 205;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 206;
			this.match(BibTeXParser.COMMA);
			this.state = 207;
			this.field();
			this.state = 212;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 208;
					this.match(BibTeXParser.COMMA);
					this.state = 209;
					this.field();
					}
					}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 215;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 218;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(BibTeXParser.MASTERTHESIS);
			this.state = 221;
			this.match(BibTeXParser.LBRACE);
			this.state = 222;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 223;
			this.match(BibTeXParser.COMMA);
			this.state = 224;
			this.field();
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 225;
					this.match(BibTeXParser.COMMA);
					this.state = 226;
					this.field();
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 232;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 235;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(BibTeXParser.PHDTHESIS);
			this.state = 238;
			this.match(BibTeXParser.LBRACE);
			this.state = 239;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 240;
			this.match(BibTeXParser.COMMA);
			this.state = 241;
			this.field();
			this.state = 246;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 242;
					this.match(BibTeXParser.COMMA);
					this.state = 243;
					this.field();
					}
					}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 249;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 252;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(BibTeXParser.MISC);
			this.state = 255;
			this.match(BibTeXParser.LBRACE);
			this.state = 256;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 257;
			this.match(BibTeXParser.COMMA);
			this.state = 258;
			this.field();
			this.state = 263;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 259;
					this.match(BibTeXParser.COMMA);
					this.state = 260;
					this.field();
					}
					}
				}
				this.state = 265;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 266;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 269;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(BibTeXParser.TECHREPORT);
			this.state = 272;
			this.match(BibTeXParser.LBRACE);
			this.state = 273;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 274;
			this.match(BibTeXParser.COMMA);
			this.state = 275;
			this.field();
			this.state = 280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 276;
					this.match(BibTeXParser.COMMA);
					this.state = 277;
					this.field();
					}
					}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 283;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 286;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(BibTeXParser.UNPUBLISHED);
			this.state = 289;
			this.match(BibTeXParser.LBRACE);
			this.state = 290;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 291;
			this.match(BibTeXParser.COMMA);
			this.state = 292;
			this.field();
			this.state = 297;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 293;
					this.match(BibTeXParser.COMMA);
					this.state = 294;
					this.field();
					}
					}
				}
				this.state = 299;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 300;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 303;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(BibTeXParser.DATASET);
			this.state = 306;
			this.match(BibTeXParser.LBRACE);
			this.state = 307;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 308;
			this.match(BibTeXParser.COMMA);
			this.state = 309;
			this.field();
			this.state = 314;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 310;
					this.match(BibTeXParser.COMMA);
					this.state = 311;
					this.field();
					}
					}
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 317;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 320;
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
	public software(): SoftwareContext {
		let _localctx: SoftwareContext = new SoftwareContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, BibTeXParser.RULE_software);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(BibTeXParser.SOFTWARE);
			this.state = 323;
			this.match(BibTeXParser.LBRACE);
			this.state = 324;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 325;
			this.match(BibTeXParser.COMMA);
			this.state = 326;
			this.field();
			this.state = 331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 327;
					this.match(BibTeXParser.COMMA);
					this.state = 328;
					this.field();
					}
					}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 334;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 337;
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
	public online(): OnlineContext {
		let _localctx: OnlineContext = new OnlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, BibTeXParser.RULE_online);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(BibTeXParser.ONLINE);
			this.state = 340;
			this.match(BibTeXParser.LBRACE);
			this.state = 341;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 342;
			this.match(BibTeXParser.COMMA);
			this.state = 343;
			this.field();
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 344;
					this.match(BibTeXParser.COMMA);
					this.state = 345;
					this.field();
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 351;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 354;
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
	public conference(): ConferenceContext {
		let _localctx: ConferenceContext = new ConferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, BibTeXParser.RULE_conference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(BibTeXParser.CONFERENCE);
			this.state = 357;
			this.match(BibTeXParser.LBRACE);
			this.state = 358;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 359;
			this.match(BibTeXParser.COMMA);
			this.state = 360;
			this.field();
			this.state = 365;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 361;
					this.match(BibTeXParser.COMMA);
					this.state = 362;
					this.field();
					}
					}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 368;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 371;
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
	public genai(): GenaiContext {
		let _localctx: GenaiContext = new GenaiContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, BibTeXParser.RULE_genai);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(BibTeXParser.GENAI);
			this.state = 374;
			this.match(BibTeXParser.LBRACE);
			this.state = 375;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 376;
			this.match(BibTeXParser.COMMA);
			this.state = 377;
			this.field();
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 378;
					this.match(BibTeXParser.COMMA);
					this.state = 379;
					this.field();
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 385;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 388;
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
	public transcript(): TranscriptContext {
		let _localctx: TranscriptContext = new TranscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, BibTeXParser.RULE_transcript);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(BibTeXParser.TRANSCRIPT);
			this.state = 391;
			this.match(BibTeXParser.LBRACE);
			this.state = 392;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 393;
			this.match(BibTeXParser.COMMA);
			this.state = 394;
			this.field();
			this.state = 399;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 395;
					this.match(BibTeXParser.COMMA);
					this.state = 396;
					this.field();
					}
					}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 402;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 405;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u019A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x07\x024\n\x02\f\x02\x0E\x027\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03M\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07^\n\x07\f\x07\x0E\x07a\v\x07\x03\x07\x05\x07d\n\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bo\n\b\f\b\x0E" +
		"\br\v\b\x03\b\x05\bu\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x07\t\x80\n\t\f\t\x0E\t\x83\v\t\x03\t\x05\t\x86\n\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x91\n\n\f\n\x0E\n\x94" +
		"\v\n\x03\n\x05\n\x97\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x07\v\xA2\n\v\f\v\x0E\v\xA5\v\v\x03\v\x05\v\xA8\n\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xB3\n\f\f\f\x0E\f\xB6" +
		"\v\f\x03\f\x05\f\xB9\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x07\r\xC4\n\r\f\r\x0E\r\xC7\v\r\x03\r\x05\r\xCA\n\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xD5" +
		"\n\x0E\f\x0E\x0E\x0E\xD8\v\x0E\x03\x0E\x05\x0E\xDB\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xE6\n" +
		"\x0F\f\x0F\x0E\x0F\xE9\v\x0F\x03\x0F\x05\x0F\xEC\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF7\n" +
		"\x10\f\x10\x0E\x10\xFA\v\x10\x03\x10\x05\x10\xFD\n\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0108" +
		"\n\x11\f\x11\x0E\x11\u010B\v\x11\x03\x11\x05\x11\u010E\n\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0119" +
		"\n\x12\f\x12\x0E\x12\u011C\v\x12\x03\x12\x05\x12\u011F\n\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u012A" +
		"\n\x13\f\x13\x0E\x13\u012D\v\x13\x03\x13\x05\x13\u0130\n\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u013B" +
		"\n\x14\f\x14\x0E\x14\u013E\v\x14\x03\x14\x05\x14\u0141\n\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u014C" +
		"\n\x15\f\x15\x0E\x15\u014F\v\x15\x03\x15\x05\x15\u0152\n\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u015D" +
		"\n\x16\f\x16\x0E\x16\u0160\v\x16\x03\x16\x05\x16\u0163\n\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u016E" +
		"\n\x17\f\x17\x0E\x17\u0171\v\x17\x03\x17\x05\x17\u0174\n\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u017F" +
		"\n\x18\f\x18\x0E\x18\u0182\v\x18\x03\x18\x05\x18\u0185\n\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0190" +
		"\n\x19\f\x19\x0E\x19\u0193\v\x19\x03\x19\x05\x19\u0196\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x02\x02\x02\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\x03\x03\x02\x1E\x1F" +
		"\x02\u01B9\x025\x03\x02\x02\x02\x04L\x03\x02\x02\x02\x06N\x03\x02\x02" +
		"\x02\bR\x03\x02\x02\x02\nT\x03\x02\x02\x02\fV\x03\x02\x02\x02\x0Eg\x03" +
		"\x02\x02\x02\x10x\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\x9A\x03" +
		"\x02\x02\x02\x16\xAB\x03\x02\x02\x02\x18\xBC\x03\x02\x02\x02\x1A\xCD\x03" +
		"\x02\x02\x02\x1C\xDE\x03\x02\x02\x02\x1E\xEF\x03\x02\x02\x02 \u0100\x03" +
		"\x02\x02\x02\"\u0111\x03\x02\x02\x02$\u0122\x03\x02\x02\x02&\u0133\x03" +
		"\x02\x02\x02(\u0144\x03\x02\x02\x02*\u0155\x03\x02\x02\x02,\u0166\x03" +
		"\x02\x02\x02.\u0177\x03\x02\x02\x020\u0188\x03\x02\x02\x0224\x05\x04\x03" +
		"\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02" +
		"\x0268\x03\x02\x02\x0275\x03\x02\x02\x0289\x07\x02\x02\x039\x03\x03\x02" +
		"\x02\x02:M\x05\f\x07\x02;M\x05\x0E\b\x02<M\x05\x10\t\x02=M\x05\x12\n\x02" +
		">M\x05\x14\v\x02?M\x05\x16\f\x02@M\x05\x18\r\x02AM\x05\x1A\x0E\x02BM\x05" +
		"\x1C\x0F\x02CM\x05\x1E\x10\x02DM\x05 \x11\x02EM\x05\"\x12\x02FM\x05$\x13" +
		"\x02GM\x05&\x14\x02HM\x05*\x16\x02IM\x05(\x15\x02JM\x05.\x18\x02KM\x05" +
		"0\x19\x02L:\x03\x02\x02\x02L;\x03\x02\x02\x02L<\x03\x02\x02\x02L=\x03" +
		"\x02\x02\x02L>\x03\x02\x02\x02L?\x03\x02\x02\x02L@\x03\x02\x02\x02LA\x03" +
		"\x02\x02\x02LB\x03\x02\x02\x02LC\x03\x02\x02\x02LD\x03\x02\x02\x02LE\x03" +
		"\x02\x02\x02LF\x03\x02\x02\x02LG\x03\x02\x02\x02LH\x03\x02\x02\x02LI\x03" +
		"\x02\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02M\x05\x03\x02\x02\x02" +
		"NO\x05\b\x05\x02OP\x07\x16\x02\x02PQ\x05\n\x06\x02Q\x07\x03\x02\x02\x02" +
		"RS\x07\x15\x02\x02S\t\x03\x02\x02\x02TU\t\x02\x02\x02U\v\x03\x02\x02\x02" +
		"VW\x07\x03\x02\x02WX\x07\x1B\x02\x02XY\x07\x15\x02\x02YZ\x07\x17\x02\x02" +
		"Z_\x05\x06\x04\x02[\\\x07\x17\x02\x02\\^\x05\x06\x04\x02][\x03\x02\x02" +
		"\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`c\x03\x02\x02" +
		"\x02a_\x03\x02\x02\x02bd\x07\x17\x02\x02cb\x03\x02\x02\x02cd\x03\x02\x02" +
		"\x02de\x03\x02\x02\x02ef\x07\x1C\x02\x02f\r\x03\x02\x02\x02gh\x07\x04" +
		"\x02\x02hi\x07\x1B\x02\x02ij\x07\x15\x02\x02jk\x07\x17\x02\x02kp\x05\x06" +
		"\x04\x02lm\x07\x17\x02\x02mo\x05\x06\x04\x02nl\x03\x02\x02\x02or\x03\x02" +
		"\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02" +
		"\x02\x02su\x07\x17\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02" +
		"\x02\x02vw\x07\x1C\x02\x02w\x0F\x03\x02\x02\x02xy\x07\x05\x02\x02yz\x07" +
		"\x1B\x02\x02z{\x07\x15\x02\x02{|\x07\x17\x02\x02|\x81\x05\x06\x04\x02" +
		"}~\x07\x17\x02\x02~\x80\x05\x06\x04\x02\x7F}\x03\x02\x02\x02\x80\x83\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x85\x03" +
		"\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x86\x07\x17\x02\x02\x85\x84\x03" +
		"\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x07" +
		"\x1C\x02\x02\x88\x11\x03\x02\x02\x02\x89\x8A\x07\x06\x02\x02\x8A\x8B\x07" +
		"\x1B\x02\x02\x8B\x8C\x07\x15\x02\x02\x8C\x8D\x07\x17\x02\x02\x8D\x92\x05" +
		"\x06\x04\x02\x8E\x8F\x07\x17\x02\x02\x8F\x91\x05\x06\x04\x02\x90\x8E\x03" +
		"\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03" +
		"\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x97\x07" +
		"\x17\x02\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x03" +
		"\x02\x02\x02\x98\x99\x07\x1C\x02\x02\x99\x13\x03\x02\x02\x02\x9A\x9B\x07" +
		"\x07\x02\x02\x9B\x9C\x07\x1B\x02\x02\x9C\x9D\x07\x15\x02\x02\x9D\x9E\x07" +
		"\x17\x02\x02\x9E\xA3\x05\x06\x04\x02\x9F\xA0\x07\x17\x02\x02\xA0\xA2\x05" +
		"\x06\x04\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03" +
		"\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03" +
		"\x02\x02\x02\xA6\xA8\x07\x17\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03" +
		"\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x07\x1C\x02\x02\xAA\x15\x03" +
		"\x02\x02\x02\xAB\xAC\x07\b\x02\x02\xAC\xAD\x07\x1B\x02\x02\xAD\xAE\x07" +
		"\x15\x02\x02\xAE\xAF\x07\x17\x02\x02\xAF\xB4\x05\x06\x04\x02\xB0\xB1\x07" +
		"\x17\x02\x02\xB1\xB3\x05\x06\x04\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6\x03" +
		"\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03" +
		"\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB9\x07\x17\x02\x02\xB8\xB7\x03" +
		"\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07" +
		"\x1C\x02\x02\xBB\x17\x03\x02\x02\x02\xBC\xBD\x07\t\x02\x02\xBD\xBE\x07" +
		"\x1B\x02\x02\xBE\xBF\x07\x15\x02\x02\xBF\xC0\x07\x17\x02\x02\xC0\xC5\x05" +
		"\x06\x04\x02\xC1\xC2\x07\x17\x02\x02\xC2\xC4\x05\x06\x04\x02\xC3\xC1\x03" +
		"\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03" +
		"\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCA\x07" +
		"\x17\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03" +
		"\x02\x02\x02\xCB\xCC\x07\x1C\x02\x02\xCC\x19\x03\x02\x02\x02\xCD\xCE\x07" +
		"\n\x02\x02\xCE\xCF\x07\x1B\x02\x02\xCF\xD0\x07\x15\x02\x02\xD0\xD1\x07" +
		"\x17\x02\x02\xD1\xD6\x05\x06\x04\x02\xD2\xD3\x07\x17\x02\x02\xD3\xD5\x05" +
		"\x06\x04\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03" +
		"\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03" +
		"\x02\x02\x02\xD9\xDB\x07\x17\x02\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03" +
		"\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x07\x1C\x02\x02\xDD\x1B\x03" +
		"\x02\x02\x02\xDE\xDF\x07\v\x02\x02\xDF\xE0\x07\x1B\x02\x02\xE0\xE1\x07" +
		"\x15\x02\x02\xE1\xE2\x07\x17\x02\x02\xE2\xE7\x05\x06\x04\x02\xE3\xE4\x07" +
		"\x17\x02\x02\xE4\xE6\x05\x06\x04\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE9\x03" +
		"\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEB\x03" +
		"\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEC\x07\x17\x02\x02\xEB\xEA\x03" +
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x07" +
		"\x1C\x02\x02\xEE\x1D\x03\x02\x02\x02\xEF\xF0\x07\f\x02\x02\xF0\xF1\x07" +
		"\x1B\x02\x02\xF1\xF2\x07\x15\x02\x02\xF2\xF3\x07\x17\x02\x02\xF3\xF8\x05" +
		"\x06\x04\x02\xF4\xF5\x07\x17\x02\x02\xF5\xF7\x05\x06\x04\x02\xF6\xF4\x03" +
		"\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03" +
		"\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFD\x07" +
		"\x17\x02\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03" +
		"\x02\x02\x02\xFE\xFF\x07\x1C\x02\x02\xFF\x1F\x03\x02\x02\x02\u0100\u0101" +
		"\x07\r\x02\x02\u0101\u0102\x07\x1B\x02\x02\u0102\u0103\x07\x15\x02\x02" +
		"\u0103\u0104\x07\x17\x02\x02\u0104\u0109\x05\x06\x04\x02\u0105\u0106\x07" +
		"\x17\x02\x02\u0106\u0108\x05\x06\x04\x02\u0107\u0105\x03\x02\x02\x02\u0108" +
		"\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02" +
		"\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C" +
		"\u010E\x07\x17\x02\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02" +
		"\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x07\x1C\x02\x02\u0110" +
		"!\x03\x02\x02\x02\u0111\u0112\x07\x0E\x02\x02\u0112\u0113\x07\x1B\x02" +
		"\x02\u0113\u0114\x07\x15\x02\x02\u0114\u0115\x07\x17\x02\x02\u0115\u011A" +
		"\x05\x06\x04\x02\u0116\u0117\x07\x17\x02\x02\u0117\u0119\x05\x06\x04\x02" +
		"\u0118\u0116\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03" +
		"\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C" +
		"\u011A\x03\x02\x02\x02\u011D\u011F\x07\x17\x02\x02\u011E\u011D\x03\x02" +
		"\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
		"\u0121\x07\x1C\x02\x02\u0121#\x03\x02\x02\x02\u0122\u0123\x07\x0F\x02" +
		"\x02\u0123\u0124\x07\x1B\x02\x02\u0124\u0125\x07\x15\x02\x02\u0125\u0126" +
		"\x07\x17\x02\x02\u0126\u012B\x05\x06\x04\x02\u0127\u0128\x07\x17\x02\x02" +
		"\u0128\u012A\x05\x06\x04\x02\u0129\u0127\x03\x02\x02\x02\u012A\u012D\x03" +
		"\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C" +
		"\u012F\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0130\x07\x17" +
		"\x02\x02\u012F\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0132\x07\x1C\x02\x02\u0132%\x03\x02\x02" +
		"\x02\u0133\u0134\x07\x10\x02\x02\u0134\u0135\x07\x1B\x02\x02\u0135\u0136" +
		"\x07\x15\x02\x02\u0136\u0137\x07\x17\x02\x02\u0137\u013C\x05\x06\x04\x02" +
		"\u0138\u0139\x07\x17\x02\x02\u0139\u013B\x05\x06\x04\x02\u013A\u0138\x03" +
		"\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C" +
		"\u013D\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02" +
		"\x02\x02\u013F\u0141\x07\x17\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x07\x1C" +
		"\x02\x02\u0143\'\x03\x02\x02\x02\u0144\u0145\x07\x12\x02\x02\u0145\u0146" +
		"\x07\x1B\x02\x02\u0146\u0147\x07\x15\x02\x02\u0147\u0148\x07\x17\x02\x02" +
		"\u0148\u014D\x05\x06\x04\x02\u0149\u014A\x07\x17\x02\x02\u014A\u014C\x05" +
		"\x06\x04\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D" +
		"\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0151\x03\x02" +
		"\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0152\x07\x17\x02\x02\u0151" +
		"\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0154\x07\x1C\x02\x02\u0154)\x03\x02\x02\x02\u0155\u0156" +
		"\x07\x11\x02\x02\u0156\u0157\x07\x1B\x02\x02\u0157\u0158\x07\x15\x02\x02" +
		"\u0158\u0159\x07\x17\x02\x02\u0159\u015E\x05\x06\x04\x02\u015A\u015B\x07" +
		"\x17\x02\x02\u015B\u015D\x05\x06\x04\x02\u015C\u015A\x03\x02\x02\x02\u015D" +
		"\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02" +
		"\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161" +
		"\u0163\x07\x17\x02\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02" +
		"\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x07\x1C\x02\x02\u0165" +
		"+\x03\x02\x02\x02\u0166\u0167\x07\"\x02\x02\u0167\u0168\x07\x1B\x02\x02" +
		"\u0168\u0169\x07\x15\x02\x02\u0169\u016A\x07\x17\x02\x02\u016A\u016F\x05" +
		"\x06\x04\x02\u016B\u016C\x07\x17\x02\x02\u016C\u016E\x05\x06\x04\x02\u016D" +
		"\u016B\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02" +
		"\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171" +
		"\u016F\x03\x02\x02\x02\u0172\u0174\x07\x17\x02\x02\u0173\u0172\x03\x02" +
		"\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175" +
		"\u0176\x07\x1C\x02\x02\u0176-\x03\x02\x02\x02\u0177\u0178\x07\x13\x02" +
		"\x02\u0178\u0179\x07\x1B\x02\x02\u0179\u017A\x07\x15\x02\x02\u017A\u017B" +
		"\x07\x17\x02\x02\u017B\u0180\x05\x06\x04\x02\u017C\u017D\x07\x17\x02\x02" +
		"\u017D\u017F\x05\x06\x04\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0182\x03" +
		"\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181" +
		"\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0185\x07\x17" +
		"\x02\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\u0187\x07\x1C\x02\x02\u0187/\x03\x02\x02" +
		"\x02\u0188\u0189\x07\x14\x02\x02\u0189\u018A\x07\x1B\x02\x02\u018A\u018B" +
		"\x07\x15\x02\x02\u018B\u018C\x07\x17\x02\x02\u018C\u0191\x05\x06\x04\x02" +
		"\u018D\u018E\x07\x17\x02\x02\u018E\u0190\x05\x06\x04\x02\u018F\u018D\x03" +
		"\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191" +
		"\u0192\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02" +
		"\x02\x02\u0194\u0196\x07\x17\x02\x02\u0195\u0194\x03\x02\x02\x02\u0195" +
		"\u0196\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x07\x1C" +
		"\x02\x02\u01981\x03\x02\x02\x02*5L_cpt\x81\x85\x92\x96\xA3\xA7\xB4\xB8" +
		"\xC5\xC9\xD6\xDA\xE7\xEB\xF8\xFC\u0109\u010D\u011A\u011E\u012B\u012F\u013C" +
		"\u0140\u014D\u0151\u015E\u0162\u016F\u0173\u0180\u0184\u0191\u0195";
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
	public online(): OnlineContext | undefined {
		return this.tryGetRuleContext(0, OnlineContext);
	}
	public software(): SoftwareContext | undefined {
		return this.tryGetRuleContext(0, SoftwareContext);
	}
	public genai(): GenaiContext | undefined {
		return this.tryGetRuleContext(0, GenaiContext);
	}
	public transcript(): TranscriptContext | undefined {
		return this.tryGetRuleContext(0, TranscriptContext);
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


export class SoftwareContext extends ParserRuleContext {
	public SOFTWARE(): TerminalNode { return this.getToken(BibTeXParser.SOFTWARE, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_software; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterSoftware) {
			listener.enterSoftware(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitSoftware) {
			listener.exitSoftware(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitSoftware) {
			return visitor.visitSoftware(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnlineContext extends ParserRuleContext {
	public ONLINE(): TerminalNode { return this.getToken(BibTeXParser.ONLINE, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_online; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterOnline) {
			listener.enterOnline(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitOnline) {
			listener.exitOnline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitOnline) {
			return visitor.visitOnline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConferenceContext extends ParserRuleContext {
	public CONFERENCE(): TerminalNode { return this.getToken(BibTeXParser.CONFERENCE, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_conference; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterConference) {
			listener.enterConference(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitConference) {
			listener.exitConference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitConference) {
			return visitor.visitConference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenaiContext extends ParserRuleContext {
	public GENAI(): TerminalNode { return this.getToken(BibTeXParser.GENAI, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_genai; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterGenai) {
			listener.enterGenai(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitGenai) {
			listener.exitGenai(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitGenai) {
			return visitor.visitGenai(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TranscriptContext extends ParserRuleContext {
	public TRANSCRIPT(): TerminalNode { return this.getToken(BibTeXParser.TRANSCRIPT, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_transcript; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterTranscript) {
			listener.enterTranscript(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitTranscript) {
			listener.exitTranscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitTranscript) {
			return visitor.visitTranscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


