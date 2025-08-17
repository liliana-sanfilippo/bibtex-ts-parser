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
	public static readonly CONFERENCE = 17;
	public static readonly GENAI = 18;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bibTex", "entry", "field", "key", "value", "article", "book", "booklet", 
		"inbook", "incollection", "inproceedings", "proceedings", "manual", "mastersthesis", 
		"phdthesis", "misc", "techreport", "unpublished", "dataset", "software", 
		"online", "conference", "genai",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@article'", "'@book'", "'@booklet'", "'@inbook'", "'@incollection'", 
		"'@inproceedings'", "'@proceedings'", "'@manual'", "'@masterthesis'", 
		"'@phdthesis'", "'@misc'", "'@techreport'", "'@unpublished'", "'@dataset'", 
		"'@online'", "'@software'", "'@conference'", "'@genai'", undefined, "'='", 
		"','", "'\"'", "'('", "')'", "'{'", "'}'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", "INCOLLECTION", "INPROCEEDINGS", 
		"PROCEEDINGS", "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", "TECHREPORT", 
		"UNPUBLISHED", "DATASET", "ONLINE", "SOFTWARE", "CONFERENCE", "GENAI", 
		"IDENTIFIER", "EQ", "COMMA", "DQUOTE", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
		"AT", "STRING_LITERAL", "INTEGER_LITERAL", "WS", "LINE_COMMENT",
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
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BibTeXParser.ARTICLE) | (1 << BibTeXParser.BOOK) | (1 << BibTeXParser.BOOKLET) | (1 << BibTeXParser.INBOOK) | (1 << BibTeXParser.INCOLLECTION) | (1 << BibTeXParser.INPROCEEDINGS) | (1 << BibTeXParser.PROCEEDINGS) | (1 << BibTeXParser.MANUAL) | (1 << BibTeXParser.MASTERTHESIS) | (1 << BibTeXParser.PHDTHESIS) | (1 << BibTeXParser.MISC) | (1 << BibTeXParser.TECHREPORT) | (1 << BibTeXParser.UNPUBLISHED) | (1 << BibTeXParser.DATASET) | (1 << BibTeXParser.ONLINE) | (1 << BibTeXParser.SOFTWARE) | (1 << BibTeXParser.CONFERENCE) | (1 << BibTeXParser.GENAI))) !== 0)) {
				{
				{
				this.state = 46;
				this.entry();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
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
			this.state = 72;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BibTeXParser.ARTICLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.article();
				}
				break;
			case BibTeXParser.BOOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.book();
				}
				break;
			case BibTeXParser.BOOKLET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 56;
				this.booklet();
				}
				break;
			case BibTeXParser.INBOOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 57;
				this.inbook();
				}
				break;
			case BibTeXParser.INCOLLECTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 58;
				this.incollection();
				}
				break;
			case BibTeXParser.INPROCEEDINGS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 59;
				this.inproceedings();
				}
				break;
			case BibTeXParser.PROCEEDINGS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 60;
				this.proceedings();
				}
				break;
			case BibTeXParser.MANUAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 61;
				this.manual();
				}
				break;
			case BibTeXParser.MASTERTHESIS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 62;
				this.mastersthesis();
				}
				break;
			case BibTeXParser.PHDTHESIS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 63;
				this.phdthesis();
				}
				break;
			case BibTeXParser.MISC:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 64;
				this.misc();
				}
				break;
			case BibTeXParser.TECHREPORT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 65;
				this.techreport();
				}
				break;
			case BibTeXParser.UNPUBLISHED:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 66;
				this.unpublished();
				}
				break;
			case BibTeXParser.DATASET:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 67;
				this.dataset();
				}
				break;
			case BibTeXParser.ONLINE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 68;
				this.online();
				}
				break;
			case BibTeXParser.SOFTWARE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 69;
				this.software();
				}
				break;
			case BibTeXParser.GENAI:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 70;
				this.genai();
				}
				break;
			case BibTeXParser.CONFERENCE:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 71;
				this.conference();
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
			this.state = 74;
			this.key();
			this.state = 75;
			this.match(BibTeXParser.EQ);
			this.state = 76;
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
			this.state = 78;
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
			this.state = 80;
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
			this.state = 82;
			this.match(BibTeXParser.ARTICLE);
			this.state = 83;
			this.match(BibTeXParser.LBRACE);
			this.state = 84;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 85;
			this.match(BibTeXParser.COMMA);
			this.state = 86;
			this.field();
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 87;
					this.match(BibTeXParser.COMMA);
					this.state = 88;
					this.field();
					}
					}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 94;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 97;
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
			this.state = 99;
			this.match(BibTeXParser.BOOK);
			this.state = 100;
			this.match(BibTeXParser.LBRACE);
			this.state = 101;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 102;
			this.match(BibTeXParser.COMMA);
			this.state = 103;
			this.field();
			this.state = 108;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 104;
					this.match(BibTeXParser.COMMA);
					this.state = 105;
					this.field();
					}
					}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 111;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 114;
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
			this.state = 116;
			this.match(BibTeXParser.BOOKLET);
			this.state = 117;
			this.match(BibTeXParser.LBRACE);
			this.state = 118;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 119;
			this.match(BibTeXParser.COMMA);
			this.state = 120;
			this.field();
			this.state = 125;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 121;
					this.match(BibTeXParser.COMMA);
					this.state = 122;
					this.field();
					}
					}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 128;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 131;
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
			this.state = 133;
			this.match(BibTeXParser.INBOOK);
			this.state = 134;
			this.match(BibTeXParser.LBRACE);
			this.state = 135;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 136;
			this.match(BibTeXParser.COMMA);
			this.state = 137;
			this.field();
			this.state = 142;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 138;
					this.match(BibTeXParser.COMMA);
					this.state = 139;
					this.field();
					}
					}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 145;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 148;
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
			this.state = 150;
			this.match(BibTeXParser.INCOLLECTION);
			this.state = 151;
			this.match(BibTeXParser.LBRACE);
			this.state = 152;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 153;
			this.match(BibTeXParser.COMMA);
			this.state = 154;
			this.field();
			this.state = 159;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 155;
					this.match(BibTeXParser.COMMA);
					this.state = 156;
					this.field();
					}
					}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 162;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 165;
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
			this.state = 167;
			this.match(BibTeXParser.INPROCEEDINGS);
			this.state = 168;
			this.match(BibTeXParser.LBRACE);
			this.state = 169;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 170;
			this.match(BibTeXParser.COMMA);
			this.state = 171;
			this.field();
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 172;
					this.match(BibTeXParser.COMMA);
					this.state = 173;
					this.field();
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 179;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 182;
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
			this.state = 184;
			this.match(BibTeXParser.PROCEEDINGS);
			this.state = 185;
			this.match(BibTeXParser.LBRACE);
			this.state = 186;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 187;
			this.match(BibTeXParser.COMMA);
			this.state = 188;
			this.field();
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 189;
					this.match(BibTeXParser.COMMA);
					this.state = 190;
					this.field();
					}
					}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 196;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 199;
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
			this.state = 201;
			this.match(BibTeXParser.MANUAL);
			this.state = 202;
			this.match(BibTeXParser.LBRACE);
			this.state = 203;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 204;
			this.match(BibTeXParser.COMMA);
			this.state = 205;
			this.field();
			this.state = 210;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 206;
					this.match(BibTeXParser.COMMA);
					this.state = 207;
					this.field();
					}
					}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 213;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 216;
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
			this.state = 218;
			this.match(BibTeXParser.MASTERTHESIS);
			this.state = 219;
			this.match(BibTeXParser.LBRACE);
			this.state = 220;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 221;
			this.match(BibTeXParser.COMMA);
			this.state = 222;
			this.field();
			this.state = 227;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 223;
					this.match(BibTeXParser.COMMA);
					this.state = 224;
					this.field();
					}
					}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 230;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 233;
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
			this.state = 235;
			this.match(BibTeXParser.PHDTHESIS);
			this.state = 236;
			this.match(BibTeXParser.LBRACE);
			this.state = 237;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 238;
			this.match(BibTeXParser.COMMA);
			this.state = 239;
			this.field();
			this.state = 244;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 240;
					this.match(BibTeXParser.COMMA);
					this.state = 241;
					this.field();
					}
					}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 247;
				this.match(BibTeXParser.COMMA);
				}
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
	public misc(): MiscContext {
		let _localctx: MiscContext = new MiscContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, BibTeXParser.RULE_misc);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(BibTeXParser.MISC);
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
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 257;
					this.match(BibTeXParser.COMMA);
					this.state = 258;
					this.field();
					}
					}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 264;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 267;
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
			this.state = 269;
			this.match(BibTeXParser.TECHREPORT);
			this.state = 270;
			this.match(BibTeXParser.LBRACE);
			this.state = 271;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 272;
			this.match(BibTeXParser.COMMA);
			this.state = 273;
			this.field();
			this.state = 278;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 274;
					this.match(BibTeXParser.COMMA);
					this.state = 275;
					this.field();
					}
					}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 281;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 284;
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
			this.state = 286;
			this.match(BibTeXParser.UNPUBLISHED);
			this.state = 287;
			this.match(BibTeXParser.LBRACE);
			this.state = 288;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 289;
			this.match(BibTeXParser.COMMA);
			this.state = 290;
			this.field();
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 291;
					this.match(BibTeXParser.COMMA);
					this.state = 292;
					this.field();
					}
					}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 298;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 301;
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
			this.state = 303;
			this.match(BibTeXParser.DATASET);
			this.state = 304;
			this.match(BibTeXParser.LBRACE);
			this.state = 305;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 306;
			this.match(BibTeXParser.COMMA);
			this.state = 307;
			this.field();
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.match(BibTeXParser.COMMA);
					this.state = 309;
					this.field();
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 315;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 318;
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
			this.state = 320;
			this.match(BibTeXParser.SOFTWARE);
			this.state = 321;
			this.match(BibTeXParser.LBRACE);
			this.state = 322;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 323;
			this.match(BibTeXParser.COMMA);
			this.state = 324;
			this.field();
			this.state = 329;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 325;
					this.match(BibTeXParser.COMMA);
					this.state = 326;
					this.field();
					}
					}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 332;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 335;
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
			this.state = 337;
			this.match(BibTeXParser.ONLINE);
			this.state = 338;
			this.match(BibTeXParser.LBRACE);
			this.state = 339;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 340;
			this.match(BibTeXParser.COMMA);
			this.state = 341;
			this.field();
			this.state = 346;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 342;
					this.match(BibTeXParser.COMMA);
					this.state = 343;
					this.field();
					}
					}
				}
				this.state = 348;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 349;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 352;
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
			this.state = 354;
			this.match(BibTeXParser.CONFERENCE);
			this.state = 355;
			this.match(BibTeXParser.LBRACE);
			this.state = 356;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 357;
			this.match(BibTeXParser.COMMA);
			this.state = 358;
			this.field();
			this.state = 363;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 359;
					this.match(BibTeXParser.COMMA);
					this.state = 360;
					this.field();
					}
					}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 366;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 369;
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
			this.state = 371;
			this.match(BibTeXParser.GENAI);
			this.state = 372;
			this.match(BibTeXParser.LBRACE);
			this.state = 373;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 374;
			this.match(BibTeXParser.COMMA);
			this.state = 375;
			this.field();
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 376;
					this.match(BibTeXParser.COMMA);
					this.state = 377;
					this.field();
					}
					}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 383;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 386;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\u0187\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03K\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"\\\n\x07\f\x07\x0E\x07_\v\x07\x03\x07\x05\x07b\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bm\n\b\f\b\x0E\bp\v\b\x03\b" +
		"\x05\bs\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\t~\n\t\f\t\x0E\t\x81\v\t\x03\t\x05\t\x84\n\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x8F\n\n\f\n\x0E\n\x92\v\n\x03\n\x05" +
		"\n\x95\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v" +
		"\xA0\n\v\f\v\x0E\v\xA3\v\v\x03\v\x05\v\xA6\n\v\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xB1\n\f\f\f\x0E\f\xB4\v\f\x03\f\x05" +
		"\f\xB7\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r" +
		"\xC2\n\r\f\r\x0E\r\xC5\v\r\x03\r\x05\r\xC8\n\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xD3\n\x0E\f\x0E\x0E" +
		"\x0E\xD6\v\x0E\x03\x0E\x05\x0E\xD9\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xE4\n\x0F\f\x0F\x0E\x0F" +
		"\xE7\v\x0F\x03\x0F\x05\x0F\xEA\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF5\n\x10\f\x10\x0E\x10\xF8" +
		"\v\x10\x03\x10\x05\x10\xFB\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0106\n\x11\f\x11\x0E\x11\u0109" +
		"\v\x11\x03\x11\x05\x11\u010C\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0117\n\x12\f\x12\x0E\x12" +
		"\u011A\v\x12\x03\x12\x05\x12\u011D\n\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0128\n\x13\f\x13\x0E" +
		"\x13\u012B\v\x13\x03\x13\x05\x13\u012E\n\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0139\n\x14\f\x14" +
		"\x0E\x14\u013C\v\x14\x03\x14\x05\x14\u013F\n\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u014A\n\x15\f" +
		"\x15\x0E\x15\u014D\v\x15\x03\x15\x05\x15\u0150\n\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u015B\n\x16" +
		"\f\x16\x0E\x16\u015E\v\x16\x03\x16\x05\x16\u0161\n\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u016C" +
		"\n\x17\f\x17\x0E\x17\u016F\v\x17\x03\x17\x05\x17\u0172\n\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u017D" +
		"\n\x18\f\x18\x0E\x18\u0180\v\x18\x03\x18\x05\x18\u0183\n\x18\x03\x18\x03" +
		"\x18\x03\x18\x02\x02\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02\x03\x03\x02\x1E\x1F\x02" +
		"\u01A5\x023\x03\x02\x02\x02\x04J\x03\x02\x02\x02\x06L\x03\x02\x02\x02" +
		"\bP\x03\x02\x02\x02\nR\x03\x02\x02\x02\fT\x03\x02\x02\x02\x0Ee\x03\x02" +
		"\x02\x02\x10v\x03\x02\x02\x02\x12\x87\x03\x02\x02\x02\x14\x98\x03\x02" +
		"\x02\x02\x16\xA9\x03\x02\x02\x02\x18\xBA\x03\x02\x02\x02\x1A\xCB\x03\x02" +
		"\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xED\x03\x02\x02\x02 \xFE\x03\x02" +
		"\x02\x02\"\u010F\x03\x02\x02\x02$\u0120\x03\x02\x02\x02&\u0131\x03\x02" +
		"\x02\x02(\u0142\x03\x02\x02\x02*\u0153\x03\x02\x02\x02,\u0164\x03\x02" +
		"\x02\x02.\u0175\x03\x02\x02\x0202\x05\x04\x03\x0210\x03\x02\x02\x0225" +
		"\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x02" +
		"53\x03\x02\x02\x0267\x07\x02\x02\x037\x03\x03\x02\x02\x028K\x05\f\x07" +
		"\x029K\x05\x0E\b\x02:K\x05\x10\t\x02;K\x05\x12\n\x02<K\x05\x14\v\x02=" +
		"K\x05\x16\f\x02>K\x05\x18\r\x02?K\x05\x1A\x0E\x02@K\x05\x1C\x0F\x02AK" +
		"\x05\x1E\x10\x02BK\x05 \x11\x02CK\x05\"\x12\x02DK\x05$\x13\x02EK\x05&" +
		"\x14\x02FK\x05*\x16\x02GK\x05(\x15\x02HK\x05.\x18\x02IK\x05,\x17\x02J" +
		"8\x03\x02\x02\x02J9\x03\x02\x02\x02J:\x03\x02\x02\x02J;\x03\x02\x02\x02" +
		"J<\x03\x02\x02\x02J=\x03\x02\x02\x02J>\x03\x02\x02\x02J?\x03\x02\x02\x02" +
		"J@\x03\x02\x02\x02JA\x03\x02\x02\x02JB\x03\x02\x02\x02JC\x03\x02\x02\x02" +
		"JD\x03\x02\x02\x02JE\x03\x02\x02\x02JF\x03\x02\x02\x02JG\x03\x02\x02\x02" +
		"JH\x03\x02\x02\x02JI\x03\x02\x02\x02K\x05\x03\x02\x02\x02LM\x05\b\x05" +
		"\x02MN\x07\x16\x02\x02NO\x05\n\x06\x02O\x07\x03\x02\x02\x02PQ\x07\x15" +
		"\x02\x02Q\t\x03\x02\x02\x02RS\t\x02\x02\x02S\v\x03\x02\x02\x02TU\x07\x03" +
		"\x02\x02UV\x07\x1B\x02\x02VW\x07\x15\x02\x02WX\x07\x17\x02\x02X]\x05\x06" +
		"\x04\x02YZ\x07\x17\x02\x02Z\\\x05\x06\x04\x02[Y\x03\x02\x02\x02\\_\x03" +
		"\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03" +
		"\x02\x02\x02`b\x07\x17\x02\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03" +
		"\x02\x02\x02cd\x07\x1C\x02\x02d\r\x03\x02\x02\x02ef\x07\x04\x02\x02fg" +
		"\x07\x1B\x02\x02gh\x07\x15\x02\x02hi\x07\x17\x02\x02in\x05\x06\x04\x02" +
		"jk\x07\x17\x02\x02km\x05\x06\x04\x02lj\x03\x02\x02\x02mp\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02no\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"qs\x07\x17\x02\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02" +
		"tu\x07\x1C\x02\x02u\x0F\x03\x02\x02\x02vw\x07\x05\x02\x02wx\x07\x1B\x02" +
		"\x02xy\x07\x15\x02\x02yz\x07\x17\x02\x02z\x7F\x05\x06\x04\x02{|\x07\x17" +
		"\x02\x02|~\x05\x06\x04\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F" +
		"}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81" +
		"\x7F\x03\x02\x02\x02\x82\x84\x07\x17\x02\x02\x83\x82\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x07\x1C\x02\x02\x86" +
		"\x11\x03\x02\x02\x02\x87\x88\x07\x06\x02\x02\x88\x89\x07\x1B\x02\x02\x89" +
		"\x8A\x07\x15\x02\x02\x8A\x8B\x07\x17\x02\x02\x8B\x90\x05\x06\x04\x02\x8C" +
		"\x8D\x07\x17\x02\x02\x8D\x8F\x05\x06\x04\x02\x8E\x8C\x03\x02\x02\x02\x8F" +
		"\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
		"\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x95\x07\x17\x02\x02\x94" +
		"\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96" +
		"\x97\x07\x1C\x02\x02\x97\x13\x03\x02\x02\x02\x98\x99\x07\x07\x02\x02\x99" +
		"\x9A\x07\x1B\x02\x02\x9A\x9B\x07\x15\x02\x02\x9B\x9C\x07\x17\x02\x02\x9C" +
		"\xA1\x05\x06\x04\x02\x9D\x9E\x07\x17\x02\x02\x9E\xA0\x05\x06\x04\x02\x9F" +
		"\x9D\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1" +
		"\xA2\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4" +
		"\xA6\x07\x17\x02\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6" +
		"\xA7\x03\x02\x02\x02\xA7\xA8\x07\x1C\x02\x02\xA8\x15\x03\x02\x02\x02\xA9" +
		"\xAA\x07\b\x02\x02\xAA\xAB\x07\x1B\x02\x02\xAB\xAC\x07\x15\x02\x02\xAC" +
		"\xAD\x07\x17\x02\x02\xAD\xB2\x05\x06\x04\x02\xAE\xAF\x07\x17\x02\x02\xAF" +
		"\xB1\x05\x06\x04\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2" +
		"\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4" +
		"\xB2\x03\x02\x02\x02\xB5\xB7\x07\x17\x02\x02\xB6\xB5\x03\x02\x02\x02\xB6" +
		"\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\x1C\x02\x02\xB9" +
		"\x17\x03\x02\x02\x02\xBA\xBB\x07\t\x02\x02\xBB\xBC\x07\x1B\x02\x02\xBC" +
		"\xBD\x07\x15\x02\x02\xBD\xBE\x07\x17\x02\x02\xBE\xC3\x05\x06\x04\x02\xBF" +
		"\xC0\x07\x17\x02\x02\xC0\xC2\x05\x06\x04\x02\xC1\xBF\x03\x02\x02\x02\xC2" +
		"\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4" +
		"\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC8\x07\x17\x02\x02\xC7" +
		"\xC6\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9" +
		"\xCA\x07\x1C\x02\x02\xCA\x19\x03\x02\x02\x02\xCB\xCC\x07\n\x02\x02\xCC" +
		"\xCD\x07\x1B\x02\x02\xCD\xCE\x07\x15\x02\x02\xCE\xCF\x07\x17\x02\x02\xCF" +
		"\xD4\x05\x06\x04\x02\xD0\xD1\x07\x17\x02\x02\xD1\xD3\x05\x06\x04\x02\xD2" +
		"\xD0\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4" +
		"\xD5\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7" +
		"\xD9\x07\x17\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9" +
		"\xDA\x03\x02\x02\x02\xDA\xDB\x07\x1C\x02\x02\xDB\x1B\x03\x02\x02\x02\xDC" +
		"\xDD\x07\v\x02\x02\xDD\xDE\x07\x1B\x02\x02\xDE\xDF\x07\x15\x02\x02\xDF" +
		"\xE0\x07\x17\x02\x02\xE0\xE5\x05\x06\x04\x02\xE1\xE2\x07\x17\x02\x02\xE2" +
		"\xE4\x05\x06\x04\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5" +
		"\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7" +
		"\xE5\x03\x02\x02\x02\xE8\xEA\x07\x17\x02\x02\xE9\xE8\x03\x02\x02\x02\xE9" +
		"\xEA\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x07\x1C\x02\x02\xEC" +
		"\x1D\x03\x02\x02\x02\xED\xEE\x07\f\x02\x02\xEE\xEF\x07\x1B\x02\x02\xEF" +
		"\xF0\x07\x15\x02\x02\xF0\xF1\x07\x17\x02\x02\xF1\xF6\x05\x06\x04\x02\xF2" +
		"\xF3\x07\x17\x02\x02\xF3\xF5\x05\x06\x04\x02\xF4\xF2\x03\x02\x02\x02\xF5" +
		"\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7" +
		"\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB\x07\x17\x02\x02\xFA" +
		"\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
		"\xFD\x07\x1C\x02\x02\xFD\x1F\x03\x02\x02\x02\xFE\xFF\x07\r\x02\x02\xFF" +
		"\u0100\x07\x1B\x02\x02\u0100\u0101\x07\x15\x02\x02\u0101\u0102\x07\x17" +
		"\x02\x02\u0102\u0107\x05\x06\x04\x02\u0103\u0104\x07\x17\x02\x02\u0104" +
		"\u0106\x05\x06\x04\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0109\x03\x02" +
		"\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
		"\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010C\x07\x17" +
		"\x02\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u010E\x07\x1C\x02\x02\u010E!\x03\x02\x02" +
		"\x02\u010F\u0110\x07\x0E\x02\x02\u0110\u0111\x07\x1B\x02\x02\u0111\u0112" +
		"\x07\x15\x02\x02\u0112\u0113\x07\x17\x02\x02\u0113\u0118\x05\x06\x04\x02" +
		"\u0114\u0115\x07\x17\x02\x02\u0115\u0117\x05\x06\x04\x02\u0116\u0114\x03" +
		"\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02" +
		"\x02\x02\u011B\u011D\x07\x17\x02\x02\u011C\u011B\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x07\x1C" +
		"\x02\x02\u011F#\x03\x02\x02\x02\u0120\u0121\x07\x0F\x02\x02\u0121\u0122" +
		"\x07\x1B\x02\x02\u0122\u0123\x07\x15\x02\x02\u0123\u0124\x07\x17\x02\x02" +
		"\u0124\u0129\x05\x06\x04\x02\u0125\u0126\x07\x17\x02\x02\u0126\u0128\x05" +
		"\x06\x04\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129" +
		"\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012D\x03\x02" +
		"\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012E\x07\x17\x02\x02\u012D" +
		"\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012F\u0130\x07\x1C\x02\x02\u0130%\x03\x02\x02\x02\u0131\u0132" +
		"\x07\x10\x02\x02\u0132\u0133\x07\x1B\x02\x02\u0133\u0134\x07\x15\x02\x02" +
		"\u0134\u0135\x07\x17\x02\x02\u0135\u013A\x05\x06\x04\x02\u0136\u0137\x07" +
		"\x17\x02\x02\u0137\u0139\x05\x06\x04\x02\u0138\u0136\x03\x02\x02\x02\u0139" +
		"\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D" +
		"\u013F\x07\x17\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02" +
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x07\x1C\x02\x02\u0141" +
		"\'\x03\x02\x02\x02\u0142\u0143\x07\x12\x02\x02\u0143\u0144\x07\x1B\x02" +
		"\x02\u0144\u0145\x07\x15\x02\x02\u0145\u0146\x07\x17\x02\x02\u0146\u014B" +
		"\x05\x06\x04\x02\u0147\u0148\x07\x17\x02\x02\u0148\u014A\x05\x06\x04\x02" +
		"\u0149\u0147\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03" +
		"\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D" +
		"\u014B\x03\x02\x02\x02\u014E\u0150\x07\x17\x02\x02\u014F\u014E\x03\x02" +
		"\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0152\x07\x1C\x02\x02\u0152)\x03\x02\x02\x02\u0153\u0154\x07\x11\x02" +
		"\x02\u0154\u0155\x07\x1B\x02\x02\u0155\u0156\x07\x15\x02\x02\u0156\u0157" +
		"\x07\x17\x02\x02\u0157\u015C\x05\x06\x04\x02\u0158\u0159\x07\x17\x02\x02" +
		"\u0159\u015B\x05\x06\x04\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015E\x03" +
		"\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0161\x07\x17" +
		"\x02\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0163\x07\x1C\x02\x02\u0163+\x03\x02\x02" +
		"\x02\u0164\u0165\x07\x13\x02\x02\u0165\u0166\x07\x1B\x02\x02\u0166\u0167" +
		"\x07\x15\x02\x02\u0167\u0168\x07\x17\x02\x02\u0168\u016D\x05\x06\x04\x02" +
		"\u0169\u016A\x07\x17\x02\x02\u016A\u016C\x05\x06\x04\x02\u016B\u0169\x03" +
		"\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D" +
		"\u016E\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02" +
		"\x02\x02\u0170\u0172\x07\x17\x02\x02\u0171\u0170\x03\x02\x02\x02\u0171" +
		"\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x07\x1C" +
		"\x02\x02\u0174-\x03\x02\x02\x02\u0175\u0176\x07\x14\x02\x02\u0176\u0177" +
		"\x07\x1B\x02\x02\u0177\u0178\x07\x15\x02\x02\u0178\u0179\x07\x17\x02\x02" +
		"\u0179\u017E\x05\x06\x04\x02\u017A\u017B\x07\x17\x02\x02\u017B\u017D\x05" +
		"\x06\x04\x02\u017C\u017A\x03\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E" +
		"\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0182\x03\x02" +
		"\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0183\x07\x17\x02\x02\u0182" +
		"\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u0184\u0185\x07\x1C\x02\x02\u0185/\x03\x02\x02\x02(3J]anr\x7F" +
		"\x83\x90\x94\xA1\xA5\xB2\xB6\xC3\xC7\xD4\xD8\xE5\xE9\xF6\xFA\u0107\u010B" +
		"\u0118\u011C\u0129\u012D\u013A\u013E\u014B\u014F\u015C\u0160\u016D\u0171" +
		"\u017E\u0182";
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
	public conference(): ConferenceContext | undefined {
		return this.tryGetRuleContext(0, ConferenceContext);
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


