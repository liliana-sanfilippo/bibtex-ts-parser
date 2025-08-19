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
	public static readonly AUDIO = 19;
	public static readonly VIDEO = 20;
	public static readonly PATENT = 21;
	public static readonly IDENTIFIER = 22;
	public static readonly EQ = 23;
	public static readonly COMMA = 24;
	public static readonly DQUOTE = 25;
	public static readonly LPAREN = 26;
	public static readonly RPAREN = 27;
	public static readonly LBRACE = 28;
	public static readonly RBRACE = 29;
	public static readonly AT = 30;
	public static readonly STRING_LITERAL = 31;
	public static readonly INTEGER_LITERAL = 32;
	public static readonly WS = 33;
	public static readonly LINE_COMMENT = 34;
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
	public static readonly RULE_genai = 21;
	public static readonly RULE_transcript = 22;
	public static readonly RULE_video = 23;
	public static readonly RULE_patent = 24;
	public static readonly RULE_audio = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bibTex", "entry", "field", "key", "value", "article", "book", "booklet", 
		"inbook", "incollection", "inproceedings", "proceedings", "manual", "mastersthesis", 
		"phdthesis", "misc", "techreport", "unpublished", "dataset", "software", 
		"online", "genai", "transcript", "video", "patent", "audio",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@article'", "'@book'", "'@booklet'", "'@inbook'", "'@incollection'", 
		undefined, "'@proceedings'", "'@manual'", "'@masterthesis'", "'@phdthesis'", 
		"'@misc'", undefined, "'@unpublished'", "'@dataset'", undefined, "'@software'", 
		"'@genai'", "'@transcript'", "'@audio'", undefined, "'@patent'", undefined, 
		"'='", "','", "'\"'", "'('", "')'", "'{'", "'}'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", "INCOLLECTION", "INPROCEEDINGS", 
		"PROCEEDINGS", "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", "TECHREPORT", 
		"UNPUBLISHED", "DATASET", "ONLINE", "SOFTWARE", "GENAI", "TRANSCRIPT", 
		"AUDIO", "VIDEO", "PATENT", "IDENTIFIER", "EQ", "COMMA", "DQUOTE", "LPAREN", 
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
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BibTeXParser.ARTICLE) | (1 << BibTeXParser.BOOK) | (1 << BibTeXParser.BOOKLET) | (1 << BibTeXParser.INBOOK) | (1 << BibTeXParser.INCOLLECTION) | (1 << BibTeXParser.INPROCEEDINGS) | (1 << BibTeXParser.PROCEEDINGS) | (1 << BibTeXParser.MANUAL) | (1 << BibTeXParser.MASTERTHESIS) | (1 << BibTeXParser.PHDTHESIS) | (1 << BibTeXParser.MISC) | (1 << BibTeXParser.TECHREPORT) | (1 << BibTeXParser.UNPUBLISHED) | (1 << BibTeXParser.DATASET) | (1 << BibTeXParser.ONLINE) | (1 << BibTeXParser.SOFTWARE) | (1 << BibTeXParser.GENAI) | (1 << BibTeXParser.TRANSCRIPT) | (1 << BibTeXParser.AUDIO) | (1 << BibTeXParser.VIDEO) | (1 << BibTeXParser.PATENT))) !== 0)) {
				{
				{
				this.state = 52;
				this.entry();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 58;
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
			this.state = 81;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BibTeXParser.ARTICLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this.article();
				}
				break;
			case BibTeXParser.BOOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.book();
				}
				break;
			case BibTeXParser.BOOKLET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 62;
				this.booklet();
				}
				break;
			case BibTeXParser.INBOOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 63;
				this.inbook();
				}
				break;
			case BibTeXParser.INCOLLECTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 64;
				this.incollection();
				}
				break;
			case BibTeXParser.INPROCEEDINGS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 65;
				this.inproceedings();
				}
				break;
			case BibTeXParser.PROCEEDINGS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 66;
				this.proceedings();
				}
				break;
			case BibTeXParser.MANUAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 67;
				this.manual();
				}
				break;
			case BibTeXParser.MASTERTHESIS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 68;
				this.mastersthesis();
				}
				break;
			case BibTeXParser.PHDTHESIS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 69;
				this.phdthesis();
				}
				break;
			case BibTeXParser.MISC:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 70;
				this.misc();
				}
				break;
			case BibTeXParser.TECHREPORT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 71;
				this.techreport();
				}
				break;
			case BibTeXParser.UNPUBLISHED:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 72;
				this.unpublished();
				}
				break;
			case BibTeXParser.DATASET:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 73;
				this.dataset();
				}
				break;
			case BibTeXParser.ONLINE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 74;
				this.online();
				}
				break;
			case BibTeXParser.SOFTWARE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 75;
				this.software();
				}
				break;
			case BibTeXParser.GENAI:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 76;
				this.genai();
				}
				break;
			case BibTeXParser.TRANSCRIPT:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 77;
				this.transcript();
				}
				break;
			case BibTeXParser.VIDEO:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 78;
				this.video();
				}
				break;
			case BibTeXParser.AUDIO:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 79;
				this.audio();
				}
				break;
			case BibTeXParser.PATENT:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 80;
				this.patent();
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
			this.state = 83;
			this.key();
			this.state = 84;
			this.match(BibTeXParser.EQ);
			this.state = 85;
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
			this.state = 87;
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
			this.state = 89;
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
			this.state = 91;
			this.match(BibTeXParser.ARTICLE);
			this.state = 92;
			this.match(BibTeXParser.LBRACE);
			this.state = 93;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 94;
			this.match(BibTeXParser.COMMA);
			this.state = 95;
			this.field();
			this.state = 100;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 96;
					this.match(BibTeXParser.COMMA);
					this.state = 97;
					this.field();
					}
					}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 103;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 106;
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
			this.state = 108;
			this.match(BibTeXParser.BOOK);
			this.state = 109;
			this.match(BibTeXParser.LBRACE);
			this.state = 110;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 111;
			this.match(BibTeXParser.COMMA);
			this.state = 112;
			this.field();
			this.state = 117;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 113;
					this.match(BibTeXParser.COMMA);
					this.state = 114;
					this.field();
					}
					}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 120;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 123;
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
			this.state = 125;
			this.match(BibTeXParser.BOOKLET);
			this.state = 126;
			this.match(BibTeXParser.LBRACE);
			this.state = 127;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 128;
			this.match(BibTeXParser.COMMA);
			this.state = 129;
			this.field();
			this.state = 134;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 130;
					this.match(BibTeXParser.COMMA);
					this.state = 131;
					this.field();
					}
					}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 137;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 140;
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
			this.state = 142;
			this.match(BibTeXParser.INBOOK);
			this.state = 143;
			this.match(BibTeXParser.LBRACE);
			this.state = 144;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 145;
			this.match(BibTeXParser.COMMA);
			this.state = 146;
			this.field();
			this.state = 151;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 147;
					this.match(BibTeXParser.COMMA);
					this.state = 148;
					this.field();
					}
					}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 154;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 157;
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
			this.state = 159;
			this.match(BibTeXParser.INCOLLECTION);
			this.state = 160;
			this.match(BibTeXParser.LBRACE);
			this.state = 161;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 162;
			this.match(BibTeXParser.COMMA);
			this.state = 163;
			this.field();
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 164;
					this.match(BibTeXParser.COMMA);
					this.state = 165;
					this.field();
					}
					}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 171;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 174;
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
			this.state = 176;
			this.match(BibTeXParser.INPROCEEDINGS);
			this.state = 177;
			this.match(BibTeXParser.LBRACE);
			this.state = 178;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 179;
			this.match(BibTeXParser.COMMA);
			this.state = 180;
			this.field();
			this.state = 185;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 181;
					this.match(BibTeXParser.COMMA);
					this.state = 182;
					this.field();
					}
					}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 188;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 191;
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
			this.state = 193;
			this.match(BibTeXParser.PROCEEDINGS);
			this.state = 194;
			this.match(BibTeXParser.LBRACE);
			this.state = 195;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 196;
			this.match(BibTeXParser.COMMA);
			this.state = 197;
			this.field();
			this.state = 202;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 198;
					this.match(BibTeXParser.COMMA);
					this.state = 199;
					this.field();
					}
					}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 205;
				this.match(BibTeXParser.COMMA);
				}
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
	public manual(): ManualContext {
		let _localctx: ManualContext = new ManualContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, BibTeXParser.RULE_manual);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(BibTeXParser.MANUAL);
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
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 215;
					this.match(BibTeXParser.COMMA);
					this.state = 216;
					this.field();
					}
					}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 222;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 225;
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
			this.state = 227;
			this.match(BibTeXParser.MASTERTHESIS);
			this.state = 228;
			this.match(BibTeXParser.LBRACE);
			this.state = 229;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 230;
			this.match(BibTeXParser.COMMA);
			this.state = 231;
			this.field();
			this.state = 236;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 232;
					this.match(BibTeXParser.COMMA);
					this.state = 233;
					this.field();
					}
					}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 239;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 242;
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
			this.state = 244;
			this.match(BibTeXParser.PHDTHESIS);
			this.state = 245;
			this.match(BibTeXParser.LBRACE);
			this.state = 246;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 247;
			this.match(BibTeXParser.COMMA);
			this.state = 248;
			this.field();
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 249;
					this.match(BibTeXParser.COMMA);
					this.state = 250;
					this.field();
					}
					}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 256;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 259;
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
			this.state = 261;
			this.match(BibTeXParser.MISC);
			this.state = 262;
			this.match(BibTeXParser.LBRACE);
			this.state = 263;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 264;
			this.match(BibTeXParser.COMMA);
			this.state = 265;
			this.field();
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 266;
					this.match(BibTeXParser.COMMA);
					this.state = 267;
					this.field();
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 273;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 276;
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
			this.state = 278;
			this.match(BibTeXParser.TECHREPORT);
			this.state = 279;
			this.match(BibTeXParser.LBRACE);
			this.state = 280;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 281;
			this.match(BibTeXParser.COMMA);
			this.state = 282;
			this.field();
			this.state = 287;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 283;
					this.match(BibTeXParser.COMMA);
					this.state = 284;
					this.field();
					}
					}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 290;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 293;
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
			this.state = 295;
			this.match(BibTeXParser.UNPUBLISHED);
			this.state = 296;
			this.match(BibTeXParser.LBRACE);
			this.state = 297;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 298;
			this.match(BibTeXParser.COMMA);
			this.state = 299;
			this.field();
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					this.match(BibTeXParser.COMMA);
					this.state = 301;
					this.field();
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 307;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 310;
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
			this.state = 312;
			this.match(BibTeXParser.DATASET);
			this.state = 313;
			this.match(BibTeXParser.LBRACE);
			this.state = 314;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 315;
			this.match(BibTeXParser.COMMA);
			this.state = 316;
			this.field();
			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 317;
					this.match(BibTeXParser.COMMA);
					this.state = 318;
					this.field();
					}
					}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 324;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 327;
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
			this.state = 329;
			this.match(BibTeXParser.SOFTWARE);
			this.state = 330;
			this.match(BibTeXParser.LBRACE);
			this.state = 331;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 332;
			this.match(BibTeXParser.COMMA);
			this.state = 333;
			this.field();
			this.state = 338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 334;
					this.match(BibTeXParser.COMMA);
					this.state = 335;
					this.field();
					}
					}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 341;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 344;
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
			this.state = 346;
			this.match(BibTeXParser.ONLINE);
			this.state = 347;
			this.match(BibTeXParser.LBRACE);
			this.state = 348;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 349;
			this.match(BibTeXParser.COMMA);
			this.state = 350;
			this.field();
			this.state = 355;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 351;
					this.match(BibTeXParser.COMMA);
					this.state = 352;
					this.field();
					}
					}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 358;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 361;
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
		this.enterRule(_localctx, 42, BibTeXParser.RULE_genai);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(BibTeXParser.GENAI);
			this.state = 364;
			this.match(BibTeXParser.LBRACE);
			this.state = 365;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 366;
			this.match(BibTeXParser.COMMA);
			this.state = 367;
			this.field();
			this.state = 372;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 368;
					this.match(BibTeXParser.COMMA);
					this.state = 369;
					this.field();
					}
					}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 375;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 378;
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
		this.enterRule(_localctx, 44, BibTeXParser.RULE_transcript);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(BibTeXParser.TRANSCRIPT);
			this.state = 381;
			this.match(BibTeXParser.LBRACE);
			this.state = 382;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 383;
			this.match(BibTeXParser.COMMA);
			this.state = 384;
			this.field();
			this.state = 389;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 385;
					this.match(BibTeXParser.COMMA);
					this.state = 386;
					this.field();
					}
					}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 392;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 395;
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
	public video(): VideoContext {
		let _localctx: VideoContext = new VideoContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, BibTeXParser.RULE_video);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(BibTeXParser.VIDEO);
			this.state = 398;
			this.match(BibTeXParser.LBRACE);
			this.state = 399;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 400;
			this.match(BibTeXParser.COMMA);
			this.state = 401;
			this.field();
			this.state = 406;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 402;
					this.match(BibTeXParser.COMMA);
					this.state = 403;
					this.field();
					}
					}
				}
				this.state = 408;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 409;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 412;
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
	public patent(): PatentContext {
		let _localctx: PatentContext = new PatentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, BibTeXParser.RULE_patent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(BibTeXParser.PATENT);
			this.state = 415;
			this.match(BibTeXParser.LBRACE);
			this.state = 416;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 417;
			this.match(BibTeXParser.COMMA);
			this.state = 418;
			this.field();
			this.state = 423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 419;
					this.match(BibTeXParser.COMMA);
					this.state = 420;
					this.field();
					}
					}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 426;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 429;
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
	public audio(): AudioContext {
		let _localctx: AudioContext = new AudioContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, BibTeXParser.RULE_audio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(BibTeXParser.AUDIO);
			this.state = 432;
			this.match(BibTeXParser.LBRACE);
			this.state = 433;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 434;
			this.match(BibTeXParser.COMMA);
			this.state = 435;
			this.field();
			this.state = 440;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 436;
					this.match(BibTeXParser.COMMA);
					this.state = 437;
					this.field();
					}
					}
				}
				this.state = 442;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 443;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 446;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\u01C3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x07\x028" +
		"\n\x02\f\x02\x0E\x02;\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03T\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07e" +
		"\n\x07\f\x07\x0E\x07h\v\x07\x03\x07\x05\x07k\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bv\n\b\f\b\x0E\by\v\b\x03\b" +
		"\x05\b|\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\t\x87\n\t\f\t\x0E\t\x8A\v\t\x03\t\x05\t\x8D\n\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x98\n\n\f\n\x0E\n\x9B\v\n\x03\n" +
		"\x05\n\x9E\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07" +
		"\v\xA9\n\v\f\v\x0E\v\xAC\v\v\x03\v\x05\v\xAF\n\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xBA\n\f\f\f\x0E\f\xBD\v\f\x03\f" +
		"\x05\f\xC0\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07" +
		"\r\xCB\n\r\f\r\x0E\r\xCE\v\r\x03\r\x05\r\xD1\n\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xDC\n\x0E\f\x0E\x0E" +
		"\x0E\xDF\v\x0E\x03\x0E\x05\x0E\xE2\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xED\n\x0F\f\x0F\x0E\x0F" +
		"\xF0\v\x0F\x03\x0F\x05\x0F\xF3\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xFE\n\x10\f\x10\x0E\x10\u0101" +
		"\v\x10\x03\x10\x05\x10\u0104\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u010F\n\x11\f\x11\x0E\x11" +
		"\u0112\v\x11\x03\x11\x05\x11\u0115\n\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0120\n\x12\f\x12\x0E" +
		"\x12\u0123\v\x12\x03\x12\x05\x12\u0126\n\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0131\n\x13\f\x13" +
		"\x0E\x13\u0134\v\x13\x03\x13\x05\x13\u0137\n\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0142\n\x14\f" +
		"\x14\x0E\x14\u0145\v\x14\x03\x14\x05\x14\u0148\n\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0153\n\x15" +
		"\f\x15\x0E\x15\u0156\v\x15\x03\x15\x05\x15\u0159\n\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0164" +
		"\n\x16\f\x16\x0E\x16\u0167\v\x16\x03\x16\x05\x16\u016A\n\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0175" +
		"\n\x17\f\x17\x0E\x17\u0178\v\x17\x03\x17\x05\x17\u017B\n\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0186" +
		"\n\x18\f\x18\x0E\x18\u0189\v\x18\x03\x18\x05\x18\u018C\n\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0197" +
		"\n\x19\f\x19\x0E\x19\u019A\v\x19\x03\x19\x05\x19\u019D\n\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01A8" +
		"\n\x1A\f\x1A\x0E\x1A\u01AB\v\x1A\x03\x1A\x05\x1A\u01AE\n\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01B9" +
		"\n\x1B\f\x1B\x0E\x1B\u01BC\v\x1B\x03\x1B\x05\x1B\u01BF\n\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x02\x02\x02\x1C\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02\x02\x03\x03\x02" +
		"!\"\x02\u01E7\x029\x03\x02\x02\x02\x04S\x03\x02\x02\x02\x06U\x03\x02\x02" +
		"\x02\bY\x03\x02\x02\x02\n[\x03\x02\x02\x02\f]\x03\x02\x02\x02\x0En\x03" +
		"\x02\x02\x02\x10\x7F\x03\x02\x02\x02\x12\x90\x03\x02\x02\x02\x14\xA1\x03" +
		"\x02\x02\x02\x16\xB2\x03\x02\x02\x02\x18\xC3\x03\x02\x02\x02\x1A\xD4\x03" +
		"\x02\x02\x02\x1C\xE5\x03\x02\x02\x02\x1E\xF6\x03\x02\x02\x02 \u0107\x03" +
		"\x02\x02\x02\"\u0118\x03\x02\x02\x02$\u0129\x03\x02\x02\x02&\u013A\x03" +
		"\x02\x02\x02(\u014B\x03\x02\x02\x02*\u015C\x03\x02\x02\x02,\u016D\x03" +
		"\x02\x02\x02.\u017E\x03\x02\x02\x020\u018F\x03\x02\x02\x022\u01A0\x03" +
		"\x02\x02\x024\u01B1\x03\x02\x02\x0268\x05\x04\x03\x0276\x03\x02\x02\x02" +
		"8;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03\x02\x02\x02" +
		";9\x03\x02\x02\x02<=\x07\x02\x02\x03=\x03\x03\x02\x02\x02>T\x05\f\x07" +
		"\x02?T\x05\x0E\b\x02@T\x05\x10\t\x02AT\x05\x12\n\x02BT\x05\x14\v\x02C" +
		"T\x05\x16\f\x02DT\x05\x18\r\x02ET\x05\x1A\x0E\x02FT\x05\x1C\x0F\x02GT" +
		"\x05\x1E\x10\x02HT\x05 \x11\x02IT\x05\"\x12\x02JT\x05$\x13\x02KT\x05&" +
		"\x14\x02LT\x05*\x16\x02MT\x05(\x15\x02NT\x05,\x17\x02OT\x05.\x18\x02P" +
		"T\x050\x19\x02QT\x054\x1B\x02RT\x052\x1A\x02S>\x03\x02\x02\x02S?\x03\x02" +
		"\x02\x02S@\x03\x02\x02\x02SA\x03\x02\x02\x02SB\x03\x02\x02\x02SC\x03\x02" +
		"\x02\x02SD\x03\x02\x02\x02SE\x03\x02\x02\x02SF\x03\x02\x02\x02SG\x03\x02" +
		"\x02\x02SH\x03\x02\x02\x02SI\x03\x02\x02\x02SJ\x03\x02\x02\x02SK\x03\x02" +
		"\x02\x02SL\x03\x02\x02\x02SM\x03\x02\x02\x02SN\x03\x02\x02\x02SO\x03\x02" +
		"\x02\x02SP\x03\x02\x02\x02SQ\x03\x02\x02\x02SR\x03\x02\x02\x02T\x05\x03" +
		"\x02\x02\x02UV\x05\b\x05\x02VW\x07\x19\x02\x02WX\x05\n\x06\x02X\x07\x03" +
		"\x02\x02\x02YZ\x07\x18\x02\x02Z\t\x03\x02\x02\x02[\\\t\x02\x02\x02\\\v" +
		"\x03\x02\x02\x02]^\x07\x03\x02\x02^_\x07\x1E\x02\x02_`\x07\x18\x02\x02" +
		"`a\x07\x1A\x02\x02af\x05\x06\x04\x02bc\x07\x1A\x02\x02ce\x05\x06\x04\x02" +
		"db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02" +
		"gj\x03\x02\x02\x02hf\x03\x02\x02\x02ik\x07\x1A\x02\x02ji\x03\x02\x02\x02" +
		"jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07\x1F\x02\x02m\r\x03\x02\x02" +
		"\x02no\x07\x04\x02\x02op\x07\x1E\x02\x02pq\x07\x18\x02\x02qr\x07\x1A\x02" +
		"\x02rw\x05\x06\x04\x02st\x07\x1A\x02\x02tv\x05\x06\x04\x02us\x03\x02\x02" +
		"\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x{\x03\x02\x02" +
		"\x02yw\x03\x02\x02\x02z|\x07\x1A\x02\x02{z\x03\x02\x02\x02{|\x03\x02\x02" +
		"\x02|}\x03\x02\x02\x02}~\x07\x1F\x02\x02~\x0F\x03\x02\x02\x02\x7F\x80" +
		"\x07\x05\x02\x02\x80\x81\x07\x1E\x02\x02\x81\x82\x07\x18\x02\x02\x82\x83" +
		"\x07\x1A\x02\x02\x83\x88\x05\x06\x04\x02\x84\x85\x07\x1A\x02\x02\x85\x87" +
		"\x05\x06\x04\x02\x86\x84\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86" +
		"\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88" +
		"\x03\x02\x02\x02\x8B\x8D\x07\x1A\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x07\x1F\x02\x02\x8F\x11" +
		"\x03\x02\x02\x02\x90\x91\x07\x06\x02\x02\x91\x92\x07\x1E\x02\x02\x92\x93" +
		"\x07\x18\x02\x02\x93\x94\x07\x1A\x02\x02\x94\x99\x05\x06\x04\x02\x95\x96" +
		"\x07\x1A\x02\x02\x96\x98\x05\x06\x04\x02\x97\x95\x03\x02\x02\x02\x98\x9B" +
		"\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9D" +
		"\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9E\x07\x1A\x02\x02\x9D\x9C" +
		"\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0" +
		"\x07\x1F\x02\x02\xA0\x13\x03\x02\x02\x02\xA1\xA2\x07\x07\x02\x02\xA2\xA3" +
		"\x07\x1E\x02\x02\xA3\xA4\x07\x18\x02\x02\xA4\xA5\x07\x1A\x02\x02\xA5\xAA" +
		"\x05\x06\x04\x02\xA6\xA7\x07\x1A\x02\x02\xA7\xA9\x05\x06\x04\x02\xA8\xA6" +
		"\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB" +
		"\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAF" +
		"\x07\x1A\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0" +
		"\x03\x02\x02\x02\xB0\xB1\x07\x1F\x02\x02\xB1\x15\x03\x02\x02\x02\xB2\xB3" +
		"\x07\b\x02\x02\xB3\xB4\x07\x1E\x02\x02\xB4\xB5\x07\x18\x02\x02\xB5\xB6" +
		"\x07\x1A\x02\x02\xB6\xBB\x05\x06\x04\x02\xB7\xB8\x07\x1A\x02\x02\xB8\xBA" +
		"\x05\x06\x04\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9" +
		"\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB" +
		"\x03\x02\x02\x02\xBE\xC0\x07\x1A\x02\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0" +
		"\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x07\x1F\x02\x02\xC2\x17" +
		"\x03\x02\x02\x02\xC3\xC4\x07\t\x02\x02\xC4\xC5\x07\x1E\x02\x02\xC5\xC6" +
		"\x07\x18\x02\x02\xC6\xC7\x07\x1A\x02\x02\xC7\xCC\x05\x06\x04\x02\xC8\xC9" +
		"\x07\x1A\x02\x02\xC9\xCB\x05\x06\x04\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCE" +
		"\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD0" +
		"\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD1\x07\x1A\x02\x02\xD0\xCF" +
		"\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3" +
		"\x07\x1F\x02\x02\xD3\x19\x03\x02\x02\x02\xD4\xD5\x07\n\x02\x02\xD5\xD6" +
		"\x07\x1E\x02\x02\xD6\xD7\x07\x18\x02\x02\xD7\xD8\x07\x1A\x02\x02\xD8\xDD" +
		"\x05\x06\x04\x02\xD9\xDA\x07\x1A\x02\x02\xDA\xDC\x05\x06\x04\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE" +
		"\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE2" +
		"\x07\x1A\x02\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3" +
		"\x03\x02\x02\x02\xE3\xE4\x07\x1F\x02\x02\xE4\x1B\x03\x02\x02\x02\xE5\xE6" +
		"\x07\v\x02\x02\xE6\xE7\x07\x1E\x02\x02\xE7\xE8\x07\x18\x02\x02\xE8\xE9" +
		"\x07\x1A\x02\x02\xE9\xEE\x05\x06\x04\x02\xEA\xEB\x07\x1A\x02\x02\xEB\xED" +
		"\x05\x06\x04\x02\xEC\xEA\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC" +
		"\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE" +
		"\x03\x02\x02\x02\xF1\xF3\x07\x1A\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x07\x1F\x02\x02\xF5\x1D" +
		"\x03\x02\x02\x02\xF6\xF7\x07\f\x02\x02\xF7\xF8\x07\x1E\x02\x02\xF8\xF9" +
		"\x07\x18\x02\x02\xF9\xFA\x07\x1A\x02\x02\xFA\xFF\x05\x06\x04\x02\xFB\xFC" +
		"\x07\x1A\x02\x02\xFC\xFE\x05\x06\x04\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0101" +
		"\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100" +
		"\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0104\x07\x1A\x02" +
		"\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105" +
		"\x03\x02\x02\x02\u0105\u0106\x07\x1F\x02\x02\u0106\x1F\x03\x02\x02\x02" +
		"\u0107\u0108\x07\r\x02\x02\u0108\u0109\x07\x1E\x02\x02\u0109\u010A\x07" +
		"\x18\x02\x02\u010A\u010B\x07\x1A\x02\x02\u010B\u0110\x05\x06\x04\x02\u010C" +
		"\u010D\x07\x1A\x02\x02\u010D\u010F\x05\x06\x04\x02\u010E\u010C\x03\x02" +
		"\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0113\u0115\x07\x1A\x02\x02\u0114\u0113\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x07\x1F" +
		"\x02\x02\u0117!\x03\x02\x02\x02\u0118\u0119\x07\x0E\x02\x02\u0119\u011A" +
		"\x07\x1E\x02\x02\u011A\u011B\x07\x18\x02\x02\u011B\u011C\x07\x1A\x02\x02" +
		"\u011C\u0121\x05\x06\x04\x02\u011D\u011E\x07\x1A\x02\x02\u011E\u0120\x05" +
		"\x06\x04\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121" +
		"\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0125\x03\x02" +
		"\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0126\x07\x1A\x02\x02\u0125" +
		"\u0124\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02" +
		"\x02\x02\u0127\u0128\x07\x1F\x02\x02\u0128#\x03\x02\x02\x02\u0129\u012A" +
		"\x07\x0F\x02\x02\u012A\u012B\x07\x1E\x02\x02\u012B\u012C\x07\x18\x02\x02" +
		"\u012C\u012D\x07\x1A\x02\x02\u012D\u0132\x05\x06\x04\x02\u012E\u012F\x07" +
		"\x1A\x02\x02\u012F\u0131\x05\x06\x04\x02\u0130\u012E\x03\x02\x02\x02\u0131" +
		"\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135" +
		"\u0137\x07\x1A\x02\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02" +
		"\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x07\x1F\x02\x02\u0139" +
		"%\x03\x02\x02\x02\u013A\u013B\x07\x10\x02\x02\u013B\u013C\x07\x1E\x02" +
		"\x02\u013C\u013D\x07\x18\x02\x02\u013D\u013E\x07\x1A\x02\x02\u013E\u0143" +
		"\x05\x06\x04\x02\u013F\u0140\x07\x1A\x02\x02\u0140\u0142\x05\x06\x04\x02" +
		"\u0141\u013F\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03" +
		"\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145" +
		"\u0143\x03\x02\x02\x02\u0146\u0148\x07\x1A\x02\x02\u0147\u0146\x03\x02" +
		"\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149" +
		"\u014A\x07\x1F\x02\x02\u014A\'\x03\x02\x02\x02\u014B\u014C\x07\x12\x02" +
		"\x02\u014C\u014D\x07\x1E\x02\x02\u014D\u014E\x07\x18\x02\x02\u014E\u014F" +
		"\x07\x1A\x02\x02\u014F\u0154\x05\x06\x04\x02\u0150\u0151\x07\x1A\x02\x02" +
		"\u0151\u0153\x05\x06\x04\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0156\x03" +
		"\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155" +
		"\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157\u0159\x07\x1A" +
		"\x02\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015B\x07\x1F\x02\x02\u015B)\x03\x02\x02" +
		"\x02\u015C\u015D\x07\x11\x02\x02\u015D\u015E\x07\x1E\x02\x02\u015E\u015F" +
		"\x07\x18\x02\x02\u015F\u0160\x07\x1A\x02\x02\u0160\u0165\x05\x06\x04\x02" +
		"\u0161\u0162\x07\x1A\x02\x02\u0162\u0164\x05\x06\x04\x02\u0163\u0161\x03" +
		"\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165" +
		"\u0166\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02" +
		"\x02\x02\u0168\u016A\x07\x1A\x02\x02\u0169\u0168\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x07\x1F" +
		"\x02\x02\u016C+\x03\x02\x02\x02\u016D\u016E\x07\x13\x02\x02\u016E\u016F" +
		"\x07\x1E\x02\x02\u016F\u0170\x07\x18\x02\x02\u0170\u0171\x07\x1A\x02\x02" +
		"\u0171\u0176\x05\x06\x04\x02\u0172\u0173\x07\x1A\x02\x02\u0173\u0175\x05" +
		"\x06\x04\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176" +
		"\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u017A\x03\x02" +
		"\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017B\x07\x1A\x02\x02\u017A" +
		"\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02" +
		"\x02\x02\u017C\u017D\x07\x1F\x02\x02\u017D-\x03\x02\x02\x02\u017E\u017F" +
		"\x07\x14\x02\x02\u017F\u0180\x07\x1E\x02\x02\u0180\u0181\x07\x18\x02\x02" +
		"\u0181\u0182\x07\x1A\x02\x02\u0182\u0187\x05\x06\x04\x02\u0183\u0184\x07" +
		"\x1A\x02\x02\u0184\u0186\x05\x06\x04\x02\u0185\u0183\x03\x02\x02\x02\u0186" +
		"\u0189\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02" +
		"\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A" +
		"\u018C\x07\x1A\x02\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02" +
		"\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x07\x1F\x02\x02\u018E" +
		"/\x03\x02\x02\x02\u018F\u0190\x07\x16\x02\x02\u0190\u0191\x07\x1E\x02" +
		"\x02\u0191\u0192\x07\x18\x02\x02\u0192\u0193\x07\x1A\x02\x02\u0193\u0198" +
		"\x05\x06\x04\x02\u0194\u0195\x07\x1A\x02\x02\u0195\u0197\x05\x06\x04\x02" +
		"\u0196\u0194\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03" +
		"\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A" +
		"\u0198\x03\x02\x02\x02\u019B\u019D\x07\x1A\x02\x02\u019C\u019B\x03\x02" +
		"\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E" +
		"\u019F\x07\x1F\x02\x02\u019F1\x03\x02\x02\x02\u01A0\u01A1\x07\x17\x02" +
		"\x02\u01A1\u01A2\x07\x1E\x02\x02\u01A2\u01A3\x07\x18\x02\x02\u01A3\u01A4" +
		"\x07\x1A\x02\x02\u01A4\u01A9\x05\x06\x04\x02\u01A5\u01A6\x07\x1A\x02\x02" +
		"\u01A6\u01A8\x05\x06\x04\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AB\x03" +
		"\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
		"\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AE\x07\x1A" +
		"\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B0\x07\x1F\x02\x02\u01B03\x03\x02\x02" +
		"\x02\u01B1\u01B2\x07\x15\x02\x02\u01B2\u01B3\x07\x1E\x02\x02\u01B3\u01B4" +
		"\x07\x18\x02\x02\u01B4\u01B5\x07\x1A\x02\x02\u01B5\u01BA\x05\x06\x04\x02" +
		"\u01B6\u01B7\x07\x1A\x02\x02\u01B7\u01B9\x05\x06\x04\x02\u01B8\u01B6\x03" +
		"\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA" +
		"\u01BB\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BA\x03\x02" +
		"\x02\x02\u01BD\u01BF\x07\x1A\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE" +
		"\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x07\x1F" +
		"\x02\x02\u01C15\x03\x02\x02\x02.9Sfjw{\x88\x8C\x99\x9D\xAA\xAE\xBB\xBF" +
		"\xCC\xD0\xDD\xE1\xEE\xF2\xFF\u0103\u0110\u0114\u0121\u0125\u0132\u0136" +
		"\u0143\u0147\u0154\u0158\u0165\u0169\u0176\u017A\u0187\u018B\u0198\u019C" +
		"\u01A9\u01AD\u01BA\u01BE";
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
	public video(): VideoContext | undefined {
		return this.tryGetRuleContext(0, VideoContext);
	}
	public audio(): AudioContext | undefined {
		return this.tryGetRuleContext(0, AudioContext);
	}
	public patent(): PatentContext | undefined {
		return this.tryGetRuleContext(0, PatentContext);
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


export class VideoContext extends ParserRuleContext {
	public VIDEO(): TerminalNode { return this.getToken(BibTeXParser.VIDEO, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_video; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterVideo) {
			listener.enterVideo(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitVideo) {
			listener.exitVideo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitVideo) {
			return visitor.visitVideo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatentContext extends ParserRuleContext {
	public PATENT(): TerminalNode { return this.getToken(BibTeXParser.PATENT, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_patent; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterPatent) {
			listener.enterPatent(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitPatent) {
			listener.exitPatent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitPatent) {
			return visitor.visitPatent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AudioContext extends ParserRuleContext {
	public AUDIO(): TerminalNode { return this.getToken(BibTeXParser.AUDIO, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_audio; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterAudio) {
			listener.enterAudio(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitAudio) {
			listener.exitAudio(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitAudio) {
			return visitor.visitAudio(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


