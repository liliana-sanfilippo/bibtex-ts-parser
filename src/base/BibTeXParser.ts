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
	public static readonly BACHELORTHESIS = 22;
	public static readonly IGEMWIKI = 23;
	public static readonly IDENTIFIER = 24;
	public static readonly EQ = 25;
	public static readonly COMMA = 26;
	public static readonly DQUOTE = 27;
	public static readonly LPAREN = 28;
	public static readonly RPAREN = 29;
	public static readonly LBRACE = 30;
	public static readonly RBRACE = 31;
	public static readonly AT = 32;
	public static readonly STRING_LITERAL = 33;
	public static readonly INTEGER_LITERAL = 34;
	public static readonly WS = 35;
	public static readonly LINE_COMMENT = 36;
	public static readonly RULE_bibTex = 0;
	public static readonly RULE_entry = 1;
	public static readonly RULE_field = 2;
	public static readonly RULE_key = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_article = 5;
	public static readonly RULE_book = 6;
	public static readonly RULE_booklet = 7;
	public static readonly RULE_igemwiki = 8;
	public static readonly RULE_bachelorthesis = 9;
	public static readonly RULE_inbook = 10;
	public static readonly RULE_incollection = 11;
	public static readonly RULE_inproceedings = 12;
	public static readonly RULE_proceedings = 13;
	public static readonly RULE_manual = 14;
	public static readonly RULE_mastersthesis = 15;
	public static readonly RULE_phdthesis = 16;
	public static readonly RULE_misc = 17;
	public static readonly RULE_techreport = 18;
	public static readonly RULE_unpublished = 19;
	public static readonly RULE_dataset = 20;
	public static readonly RULE_software = 21;
	public static readonly RULE_online = 22;
	public static readonly RULE_genai = 23;
	public static readonly RULE_transcript = 24;
	public static readonly RULE_video = 25;
	public static readonly RULE_patent = 26;
	public static readonly RULE_audio = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bibTex", "entry", "field", "key", "value", "article", "book", "booklet", 
		"igemwiki", "bachelorthesis", "inbook", "incollection", "inproceedings", 
		"proceedings", "manual", "mastersthesis", "phdthesis", "misc", "techreport", 
		"unpublished", "dataset", "software", "online", "genai", "transcript", 
		"video", "patent", "audio",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@article'", undefined, "'@booklet'", undefined, undefined, 
		undefined, undefined, "'@manual'", undefined, "'@phdthesis'", "'@misc'", 
		undefined, "'@unpublished'", "'@dataset'", undefined, "'@software'", "'@genai'", 
		"'@transcript'", "'@audio'", undefined, "'@patent'", "'@bachelorthesis'", 
		"'@igemwiki'", undefined, "'='", "','", "'\"'", "'('", "')'", "'{'", "'}'", 
		"'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", "INCOLLECTION", "INPROCEEDINGS", 
		"PROCEEDINGS", "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", "TECHREPORT", 
		"UNPUBLISHED", "DATASET", "ONLINE", "SOFTWARE", "GENAI", "TRANSCRIPT", 
		"AUDIO", "VIDEO", "PATENT", "BACHELORTHESIS", "IGEMWIKI", "IDENTIFIER", 
		"EQ", "COMMA", "DQUOTE", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "AT", 
		"STRING_LITERAL", "INTEGER_LITERAL", "WS", "LINE_COMMENT",
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
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BibTeXParser.ARTICLE) | (1 << BibTeXParser.BOOK) | (1 << BibTeXParser.BOOKLET) | (1 << BibTeXParser.INBOOK) | (1 << BibTeXParser.INCOLLECTION) | (1 << BibTeXParser.INPROCEEDINGS) | (1 << BibTeXParser.PROCEEDINGS) | (1 << BibTeXParser.MANUAL) | (1 << BibTeXParser.MASTERTHESIS) | (1 << BibTeXParser.PHDTHESIS) | (1 << BibTeXParser.MISC) | (1 << BibTeXParser.TECHREPORT) | (1 << BibTeXParser.UNPUBLISHED) | (1 << BibTeXParser.DATASET) | (1 << BibTeXParser.ONLINE) | (1 << BibTeXParser.SOFTWARE) | (1 << BibTeXParser.GENAI) | (1 << BibTeXParser.TRANSCRIPT) | (1 << BibTeXParser.AUDIO) | (1 << BibTeXParser.VIDEO) | (1 << BibTeXParser.PATENT) | (1 << BibTeXParser.BACHELORTHESIS) | (1 << BibTeXParser.IGEMWIKI))) !== 0)) {
				{
				{
				this.state = 56;
				this.entry();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
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
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BibTeXParser.ARTICLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.article();
				}
				break;
			case BibTeXParser.BOOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.book();
				}
				break;
			case BibTeXParser.BOOKLET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 66;
				this.booklet();
				}
				break;
			case BibTeXParser.INBOOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 67;
				this.inbook();
				}
				break;
			case BibTeXParser.INCOLLECTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 68;
				this.incollection();
				}
				break;
			case BibTeXParser.INPROCEEDINGS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 69;
				this.inproceedings();
				}
				break;
			case BibTeXParser.PROCEEDINGS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 70;
				this.proceedings();
				}
				break;
			case BibTeXParser.MANUAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 71;
				this.manual();
				}
				break;
			case BibTeXParser.MASTERTHESIS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 72;
				this.mastersthesis();
				}
				break;
			case BibTeXParser.PHDTHESIS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 73;
				this.phdthesis();
				}
				break;
			case BibTeXParser.MISC:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 74;
				this.misc();
				}
				break;
			case BibTeXParser.TECHREPORT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 75;
				this.techreport();
				}
				break;
			case BibTeXParser.UNPUBLISHED:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 76;
				this.unpublished();
				}
				break;
			case BibTeXParser.DATASET:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 77;
				this.dataset();
				}
				break;
			case BibTeXParser.ONLINE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 78;
				this.online();
				}
				break;
			case BibTeXParser.SOFTWARE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 79;
				this.software();
				}
				break;
			case BibTeXParser.GENAI:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 80;
				this.genai();
				}
				break;
			case BibTeXParser.TRANSCRIPT:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 81;
				this.transcript();
				}
				break;
			case BibTeXParser.VIDEO:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 82;
				this.video();
				}
				break;
			case BibTeXParser.AUDIO:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 83;
				this.audio();
				}
				break;
			case BibTeXParser.PATENT:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 84;
				this.patent();
				}
				break;
			case BibTeXParser.BACHELORTHESIS:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 85;
				this.bachelorthesis();
				}
				break;
			case BibTeXParser.IGEMWIKI:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 86;
				this.igemwiki();
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
			this.state = 89;
			this.key();
			this.state = 90;
			this.match(BibTeXParser.EQ);
			this.state = 91;
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
			this.state = 93;
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
			this.state = 95;
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
			this.state = 97;
			this.match(BibTeXParser.ARTICLE);
			this.state = 98;
			this.match(BibTeXParser.LBRACE);
			this.state = 99;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 100;
			this.match(BibTeXParser.COMMA);
			this.state = 101;
			this.field();
			this.state = 106;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 102;
					this.match(BibTeXParser.COMMA);
					this.state = 103;
					this.field();
					}
					}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 109;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 112;
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
			this.state = 114;
			this.match(BibTeXParser.BOOK);
			this.state = 115;
			this.match(BibTeXParser.LBRACE);
			this.state = 116;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 117;
			this.match(BibTeXParser.COMMA);
			this.state = 118;
			this.field();
			this.state = 123;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 119;
					this.match(BibTeXParser.COMMA);
					this.state = 120;
					this.field();
					}
					}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 126;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 129;
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
			this.state = 131;
			this.match(BibTeXParser.BOOKLET);
			this.state = 132;
			this.match(BibTeXParser.LBRACE);
			this.state = 133;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 134;
			this.match(BibTeXParser.COMMA);
			this.state = 135;
			this.field();
			this.state = 140;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 136;
					this.match(BibTeXParser.COMMA);
					this.state = 137;
					this.field();
					}
					}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 143;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 146;
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
	public igemwiki(): IgemwikiContext {
		let _localctx: IgemwikiContext = new IgemwikiContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BibTeXParser.RULE_igemwiki);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(BibTeXParser.IGEMWIKI);
			this.state = 149;
			this.match(BibTeXParser.LBRACE);
			this.state = 150;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 151;
			this.match(BibTeXParser.COMMA);
			this.state = 152;
			this.field();
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 153;
					this.match(BibTeXParser.COMMA);
					this.state = 154;
					this.field();
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 160;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 163;
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
	public bachelorthesis(): BachelorthesisContext {
		let _localctx: BachelorthesisContext = new BachelorthesisContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BibTeXParser.RULE_bachelorthesis);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(BibTeXParser.BACHELORTHESIS);
			this.state = 166;
			this.match(BibTeXParser.LBRACE);
			this.state = 167;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 168;
			this.match(BibTeXParser.COMMA);
			this.state = 169;
			this.field();
			this.state = 174;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 170;
					this.match(BibTeXParser.COMMA);
					this.state = 171;
					this.field();
					}
					}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 177;
				this.match(BibTeXParser.COMMA);
				}
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
	public inbook(): InbookContext {
		let _localctx: InbookContext = new InbookContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BibTeXParser.RULE_inbook);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(BibTeXParser.INBOOK);
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
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 187;
					this.match(BibTeXParser.COMMA);
					this.state = 188;
					this.field();
					}
					}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 194;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 197;
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
		this.enterRule(_localctx, 22, BibTeXParser.RULE_incollection);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(BibTeXParser.INCOLLECTION);
			this.state = 200;
			this.match(BibTeXParser.LBRACE);
			this.state = 201;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 202;
			this.match(BibTeXParser.COMMA);
			this.state = 203;
			this.field();
			this.state = 208;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 204;
					this.match(BibTeXParser.COMMA);
					this.state = 205;
					this.field();
					}
					}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 211;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 214;
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
		this.enterRule(_localctx, 24, BibTeXParser.RULE_inproceedings);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(BibTeXParser.INPROCEEDINGS);
			this.state = 217;
			this.match(BibTeXParser.LBRACE);
			this.state = 218;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 219;
			this.match(BibTeXParser.COMMA);
			this.state = 220;
			this.field();
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 221;
					this.match(BibTeXParser.COMMA);
					this.state = 222;
					this.field();
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 228;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 231;
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
		this.enterRule(_localctx, 26, BibTeXParser.RULE_proceedings);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(BibTeXParser.PROCEEDINGS);
			this.state = 234;
			this.match(BibTeXParser.LBRACE);
			this.state = 235;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 236;
			this.match(BibTeXParser.COMMA);
			this.state = 237;
			this.field();
			this.state = 242;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 238;
					this.match(BibTeXParser.COMMA);
					this.state = 239;
					this.field();
					}
					}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 245;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 248;
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
		this.enterRule(_localctx, 28, BibTeXParser.RULE_manual);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(BibTeXParser.MANUAL);
			this.state = 251;
			this.match(BibTeXParser.LBRACE);
			this.state = 252;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 253;
			this.match(BibTeXParser.COMMA);
			this.state = 254;
			this.field();
			this.state = 259;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 255;
					this.match(BibTeXParser.COMMA);
					this.state = 256;
					this.field();
					}
					}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 262;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 265;
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
		this.enterRule(_localctx, 30, BibTeXParser.RULE_mastersthesis);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(BibTeXParser.MASTERTHESIS);
			this.state = 268;
			this.match(BibTeXParser.LBRACE);
			this.state = 269;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 270;
			this.match(BibTeXParser.COMMA);
			this.state = 271;
			this.field();
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 272;
					this.match(BibTeXParser.COMMA);
					this.state = 273;
					this.field();
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 279;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 282;
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
		this.enterRule(_localctx, 32, BibTeXParser.RULE_phdthesis);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(BibTeXParser.PHDTHESIS);
			this.state = 285;
			this.match(BibTeXParser.LBRACE);
			this.state = 286;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 287;
			this.match(BibTeXParser.COMMA);
			this.state = 288;
			this.field();
			this.state = 293;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 289;
					this.match(BibTeXParser.COMMA);
					this.state = 290;
					this.field();
					}
					}
				}
				this.state = 295;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 296;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 299;
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
		this.enterRule(_localctx, 34, BibTeXParser.RULE_misc);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(BibTeXParser.MISC);
			this.state = 302;
			this.match(BibTeXParser.LBRACE);
			this.state = 303;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 304;
			this.match(BibTeXParser.COMMA);
			this.state = 305;
			this.field();
			this.state = 310;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 306;
					this.match(BibTeXParser.COMMA);
					this.state = 307;
					this.field();
					}
					}
				}
				this.state = 312;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 313;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 316;
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
		this.enterRule(_localctx, 36, BibTeXParser.RULE_techreport);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(BibTeXParser.TECHREPORT);
			this.state = 319;
			this.match(BibTeXParser.LBRACE);
			this.state = 320;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 321;
			this.match(BibTeXParser.COMMA);
			this.state = 322;
			this.field();
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 323;
					this.match(BibTeXParser.COMMA);
					this.state = 324;
					this.field();
					}
					}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 330;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 333;
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
		this.enterRule(_localctx, 38, BibTeXParser.RULE_unpublished);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(BibTeXParser.UNPUBLISHED);
			this.state = 336;
			this.match(BibTeXParser.LBRACE);
			this.state = 337;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 338;
			this.match(BibTeXParser.COMMA);
			this.state = 339;
			this.field();
			this.state = 344;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 340;
					this.match(BibTeXParser.COMMA);
					this.state = 341;
					this.field();
					}
					}
				}
				this.state = 346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 347;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 350;
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
		this.enterRule(_localctx, 40, BibTeXParser.RULE_dataset);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(BibTeXParser.DATASET);
			this.state = 353;
			this.match(BibTeXParser.LBRACE);
			this.state = 354;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 355;
			this.match(BibTeXParser.COMMA);
			this.state = 356;
			this.field();
			this.state = 361;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 357;
					this.match(BibTeXParser.COMMA);
					this.state = 358;
					this.field();
					}
					}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 364;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 367;
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
		this.enterRule(_localctx, 42, BibTeXParser.RULE_software);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(BibTeXParser.SOFTWARE);
			this.state = 370;
			this.match(BibTeXParser.LBRACE);
			this.state = 371;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 372;
			this.match(BibTeXParser.COMMA);
			this.state = 373;
			this.field();
			this.state = 378;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 374;
					this.match(BibTeXParser.COMMA);
					this.state = 375;
					this.field();
					}
					}
				}
				this.state = 380;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 381;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 384;
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
		this.enterRule(_localctx, 44, BibTeXParser.RULE_online);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(BibTeXParser.ONLINE);
			this.state = 387;
			this.match(BibTeXParser.LBRACE);
			this.state = 388;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 389;
			this.match(BibTeXParser.COMMA);
			this.state = 390;
			this.field();
			this.state = 395;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 391;
					this.match(BibTeXParser.COMMA);
					this.state = 392;
					this.field();
					}
					}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 398;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 401;
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
		this.enterRule(_localctx, 46, BibTeXParser.RULE_genai);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(BibTeXParser.GENAI);
			this.state = 404;
			this.match(BibTeXParser.LBRACE);
			this.state = 405;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 406;
			this.match(BibTeXParser.COMMA);
			this.state = 407;
			this.field();
			this.state = 412;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 408;
					this.match(BibTeXParser.COMMA);
					this.state = 409;
					this.field();
					}
					}
				}
				this.state = 414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 415;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 418;
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
		this.enterRule(_localctx, 48, BibTeXParser.RULE_transcript);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(BibTeXParser.TRANSCRIPT);
			this.state = 421;
			this.match(BibTeXParser.LBRACE);
			this.state = 422;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 423;
			this.match(BibTeXParser.COMMA);
			this.state = 424;
			this.field();
			this.state = 429;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 425;
					this.match(BibTeXParser.COMMA);
					this.state = 426;
					this.field();
					}
					}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 432;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 435;
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
		this.enterRule(_localctx, 50, BibTeXParser.RULE_video);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.match(BibTeXParser.VIDEO);
			this.state = 438;
			this.match(BibTeXParser.LBRACE);
			this.state = 439;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 440;
			this.match(BibTeXParser.COMMA);
			this.state = 441;
			this.field();
			this.state = 446;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 442;
					this.match(BibTeXParser.COMMA);
					this.state = 443;
					this.field();
					}
					}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 449;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 452;
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
		this.enterRule(_localctx, 52, BibTeXParser.RULE_patent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(BibTeXParser.PATENT);
			this.state = 455;
			this.match(BibTeXParser.LBRACE);
			this.state = 456;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 457;
			this.match(BibTeXParser.COMMA);
			this.state = 458;
			this.field();
			this.state = 463;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 459;
					this.match(BibTeXParser.COMMA);
					this.state = 460;
					this.field();
					}
					}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 466;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 469;
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
		this.enterRule(_localctx, 54, BibTeXParser.RULE_audio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(BibTeXParser.AUDIO);
			this.state = 472;
			this.match(BibTeXParser.LBRACE);
			this.state = 473;
			this.match(BibTeXParser.IDENTIFIER);
			this.state = 474;
			this.match(BibTeXParser.COMMA);
			this.state = 475;
			this.field();
			this.state = 480;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 476;
					this.match(BibTeXParser.COMMA);
					this.state = 477;
					this.field();
					}
					}
				}
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BibTeXParser.COMMA) {
				{
				this.state = 483;
				this.match(BibTeXParser.COMMA);
				}
			}

			this.state = 486;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\u01EB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Z\n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07k\n\x07\f\x07\x0E\x07n\v\x07\x03" +
		"\x07\x05\x07q\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x07\b|\n\b\f\b\x0E\b\x7F\v\b\x03\b\x05\b\x82\n\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x8D\n\t\f\t\x0E\t\x90" +
		"\v\t\x03\t\x05\t\x93\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\x9E\n\n\f\n\x0E\n\xA1\v\n\x03\n\x05\n\xA4\n\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xAF\n\v\f\v\x0E\v\xB2" +
		"\v\v\x03\v\x05\v\xB5\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\xC0\n\f\f\f\x0E\f\xC3\v\f\x03\f\x05\f\xC6\n\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xD1\n\r\f\r\x0E\r\xD4" +
		"\v\r\x03\r\x05\r\xD7\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x07\x0E\xE2\n\x0E\f\x0E\x0E\x0E\xE5\v\x0E\x03\x0E" +
		"\x05\x0E\xE8\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\xF3\n\x0F\f\x0F\x0E\x0F\xF6\v\x0F\x03\x0F" +
		"\x05\x0F\xF9\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u0104\n\x10\f\x10\x0E\x10\u0107\v\x10\x03" +
		"\x10\x05\x10\u010A\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x07\x11\u0115\n\x11\f\x11\x0E\x11\u0118\v\x11" +
		"\x03\x11\x05\x11\u011B\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0126\n\x12\f\x12\x0E\x12\u0129\v" +
		"\x12\x03\x12\x05\x12\u012C\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0137\n\x13\f\x13\x0E\x13\u013A" +
		"\v\x13\x03\x13\x05\x13\u013D\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0148\n\x14\f\x14\x0E\x14" +
		"\u014B\v\x14\x03\x14\x05\x14\u014E\n\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0159\n\x15\f\x15\x0E" +
		"\x15\u015C\v\x15\x03\x15\x05\x15\u015F\n\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u016A\n\x16\f\x16" +
		"\x0E\x16\u016D\v\x16\x03\x16\x05\x16\u0170\n\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u017B\n\x17\f" +
		"\x17\x0E\x17\u017E\v\x17\x03\x17\x05\x17\u0181\n\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u018C\n\x18" +
		"\f\x18\x0E\x18\u018F\v\x18\x03\x18\x05\x18\u0192\n\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u019D" +
		"\n\x19\f\x19\x0E\x19\u01A0\v\x19\x03\x19\x05\x19\u01A3\n\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01AE" +
		"\n\x1A\f\x1A\x0E\x1A\u01B1\v\x1A\x03\x1A\x05\x1A\u01B4\n\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01BF" +
		"\n\x1B\f\x1B\x0E\x1B\u01C2\v\x1B\x03\x1B\x05\x1B\u01C5\n\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u01D0" +
		"\n\x1C\f\x1C\x0E\x1C\u01D3\v\x1C\x03\x1C\x05\x1C\u01D6\n\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01E1" +
		"\n\x1D\f\x1D\x0E\x1D\u01E4\v\x1D\x03\x1D\x05\x1D\u01E7\n\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x02\x02\x02\x1E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02\x02" +
		"\x03\x03\x02#$\x02\u0213\x02=\x03\x02\x02\x02\x04Y\x03\x02\x02\x02\x06" +
		"[\x03\x02\x02\x02\b_\x03\x02\x02\x02\na\x03\x02\x02\x02\fc\x03\x02\x02" +
		"\x02\x0Et\x03\x02\x02\x02\x10\x85\x03\x02\x02\x02\x12\x96\x03\x02\x02" +
		"\x02\x14\xA7\x03\x02\x02\x02\x16\xB8\x03\x02\x02\x02\x18\xC9\x03\x02\x02" +
		"\x02\x1A\xDA\x03\x02\x02\x02\x1C\xEB\x03\x02\x02\x02\x1E\xFC\x03\x02\x02" +
		"\x02 \u010D\x03\x02\x02\x02\"\u011E\x03\x02\x02\x02$\u012F\x03\x02\x02" +
		"\x02&\u0140\x03\x02\x02\x02(\u0151\x03\x02\x02\x02*\u0162\x03\x02\x02" +
		"\x02,\u0173\x03\x02\x02\x02.\u0184\x03\x02\x02\x020\u0195\x03\x02\x02" +
		"\x022\u01A6\x03\x02\x02\x024\u01B7\x03\x02\x02\x026\u01C8\x03\x02\x02" +
		"\x028\u01D9\x03\x02\x02\x02:<\x05\x04\x03\x02;:\x03\x02\x02\x02<?\x03" +
		"\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03" +
		"\x02\x02\x02@A\x07\x02\x02\x03A\x03\x03\x02\x02\x02BZ\x05\f\x07\x02CZ" +
		"\x05\x0E\b\x02DZ\x05\x10\t\x02EZ\x05\x16\f\x02FZ\x05\x18\r\x02GZ\x05\x1A" +
		"\x0E\x02HZ\x05\x1C\x0F\x02IZ\x05\x1E\x10\x02JZ\x05 \x11\x02KZ\x05\"\x12" +
		"\x02LZ\x05$\x13\x02MZ\x05&\x14\x02NZ\x05(\x15\x02OZ\x05*\x16\x02PZ\x05" +
		".\x18\x02QZ\x05,\x17\x02RZ\x050\x19\x02SZ\x052\x1A\x02TZ\x054\x1B\x02" +
		"UZ\x058\x1D\x02VZ\x056\x1C\x02WZ\x05\x14\v\x02XZ\x05\x12\n\x02YB\x03\x02" +
		"\x02\x02YC\x03\x02\x02\x02YD\x03\x02\x02\x02YE\x03\x02\x02\x02YF\x03\x02" +
		"\x02\x02YG\x03\x02\x02\x02YH\x03\x02\x02\x02YI\x03\x02\x02\x02YJ\x03\x02" +
		"\x02\x02YK\x03\x02\x02\x02YL\x03\x02\x02\x02YM\x03\x02\x02\x02YN\x03\x02" +
		"\x02\x02YO\x03\x02\x02\x02YP\x03\x02\x02\x02YQ\x03\x02\x02\x02YR\x03\x02" +
		"\x02\x02YS\x03\x02\x02\x02YT\x03\x02\x02\x02YU\x03\x02\x02\x02YV\x03\x02" +
		"\x02\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Z\x05\x03\x02\x02\x02[\\\x05" +
		"\b\x05\x02\\]\x07\x1B\x02\x02]^\x05\n\x06\x02^\x07\x03\x02\x02\x02_`\x07" +
		"\x1A\x02\x02`\t\x03\x02\x02\x02ab\t\x02\x02\x02b\v\x03\x02\x02\x02cd\x07" +
		"\x03\x02\x02de\x07 \x02\x02ef\x07\x1A\x02\x02fg\x07\x1C\x02\x02gl\x05" +
		"\x06\x04\x02hi\x07\x1C\x02\x02ik\x05\x06\x04\x02jh\x03\x02\x02\x02kn\x03" +
		"\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mp\x03\x02\x02\x02nl\x03" +
		"\x02\x02\x02oq\x07\x1C\x02\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03" +
		"\x02\x02\x02rs\x07!\x02\x02s\r\x03\x02\x02\x02tu\x07\x04\x02\x02uv\x07" +
		" \x02\x02vw\x07\x1A\x02\x02wx\x07\x1C\x02\x02x}\x05\x06\x04\x02yz\x07" +
		"\x1C\x02\x02z|\x05\x06\x04\x02{y\x03\x02\x02\x02|\x7F\x03\x02\x02\x02" +
		"}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02" +
		"\x02\x02\x80\x82\x07\x1C\x02\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x07!\x02\x02\x84\x0F\x03\x02" +
		"\x02\x02\x85\x86\x07\x05\x02\x02\x86\x87\x07 \x02\x02\x87\x88\x07\x1A" +
		"\x02\x02\x88\x89\x07\x1C\x02\x02\x89\x8E\x05\x06\x04\x02\x8A\x8B\x07\x1C" +
		"\x02\x02\x8B\x8D\x05\x06\x04\x02\x8C\x8A\x03\x02\x02\x02\x8D\x90\x03\x02" +
		"\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x92\x03\x02" +
		"\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x93\x07\x1C\x02\x02\x92\x91\x03\x02" +
		"\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x07!" +
		"\x02\x02\x95\x11\x03\x02\x02\x02\x96\x97\x07\x19\x02\x02\x97\x98\x07 " +
		"\x02\x02\x98\x99\x07\x1A\x02\x02\x99\x9A\x07\x1C\x02\x02\x9A\x9F\x05\x06" +
		"\x04\x02\x9B\x9C\x07\x1C\x02\x02\x9C\x9E\x05\x06\x04\x02\x9D\x9B\x03\x02" +
		"\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02" +
		"\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA4\x07\x1C" +
		"\x02\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02" +
		"\x02\x02\xA5\xA6\x07!\x02\x02\xA6\x13\x03\x02\x02\x02\xA7\xA8\x07\x18" +
		"\x02\x02\xA8\xA9\x07 \x02\x02\xA9\xAA\x07\x1A\x02\x02\xAA\xAB\x07\x1C" +
		"\x02\x02\xAB\xB0\x05\x06\x04\x02\xAC\xAD\x07\x1C\x02\x02\xAD\xAF\x05\x06" +
		"\x04\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02" +
		"\x02\x02\xB3\xB5\x07\x1C\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02" +
		"\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x07!\x02\x02\xB7\x15\x03\x02" +
		"\x02\x02\xB8\xB9\x07\x06\x02\x02\xB9\xBA\x07 \x02\x02\xBA\xBB\x07\x1A" +
		"\x02\x02\xBB\xBC\x07\x1C\x02\x02\xBC\xC1\x05\x06\x04\x02\xBD\xBE\x07\x1C" +
		"\x02\x02\xBE\xC0\x05\x06\x04\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC3\x03\x02" +
		"\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC5\x03\x02" +
		"\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC6\x07\x1C\x02\x02\xC5\xC4\x03\x02" +
		"\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x07!" +
		"\x02\x02\xC8\x17\x03\x02\x02\x02\xC9\xCA\x07\x07\x02\x02\xCA\xCB\x07 " +
		"\x02\x02\xCB\xCC\x07\x1A\x02\x02\xCC\xCD\x07\x1C\x02\x02\xCD\xD2\x05\x06" +
		"\x04\x02\xCE\xCF\x07\x1C\x02\x02\xCF\xD1\x05\x06\x04\x02\xD0\xCE\x03\x02" +
		"\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02" +
		"\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD7\x07\x1C" +
		"\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02" +
		"\x02\x02\xD8\xD9\x07!\x02\x02\xD9\x19\x03\x02\x02\x02\xDA\xDB\x07\b\x02" +
		"\x02\xDB\xDC\x07 \x02\x02\xDC\xDD\x07\x1A\x02\x02\xDD\xDE\x07\x1C\x02" +
		"\x02\xDE\xE3\x05\x06\x04\x02\xDF\xE0\x07\x1C\x02\x02\xE0\xE2\x05\x06\x04" +
		"\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02" +
		"\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02" +
		"\x02\xE6\xE8\x07\x1C\x02\x02\xE7\xE6\x03\x02\x02\x02\xE7\xE8\x03\x02\x02" +
		"\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07!\x02\x02\xEA\x1B\x03\x02\x02" +
		"\x02\xEB\xEC\x07\t\x02\x02\xEC\xED\x07 \x02\x02\xED\xEE\x07\x1A\x02\x02" +
		"\xEE\xEF\x07\x1C\x02\x02\xEF\xF4\x05\x06\x04\x02\xF0\xF1\x07\x1C\x02\x02" +
		"\xF1\xF3\x05\x06\x04\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02" +
		"\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02" +
		"\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x07\x1C\x02\x02\xF8\xF7\x03\x02\x02\x02" +
		"\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x07!\x02\x02" +
		"\xFB\x1D\x03\x02\x02\x02\xFC\xFD\x07\n\x02\x02\xFD\xFE\x07 \x02\x02\xFE" +
		"\xFF\x07\x1A\x02\x02\xFF\u0100\x07\x1C\x02\x02\u0100\u0105\x05\x06\x04" +
		"\x02\u0101\u0102\x07\x1C\x02\x02\u0102\u0104\x05\x06\x04\x02\u0103\u0101" +
		"\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02" +
		"\u0105\u0106\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03" +
		"\x02\x02\x02\u0108\u010A\x07\x1C\x02\x02\u0109\u0108\x03\x02\x02\x02\u0109" +
		"\u010A\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x07!\x02" +
		"\x02\u010C\x1F\x03\x02\x02\x02\u010D\u010E\x07\v\x02\x02\u010E\u010F\x07" +
		" \x02\x02\u010F\u0110\x07\x1A\x02\x02\u0110\u0111\x07\x1C\x02\x02\u0111" +
		"\u0116\x05\x06\x04\x02\u0112\u0113\x07\x1C\x02\x02\u0113\u0115\x05\x06" +
		"\x04\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116" +
		"\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u011A\x03\x02" +
		"\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011B\x07\x1C\x02\x02\u011A" +
		"\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02" +
		"\x02\x02\u011C\u011D\x07!\x02\x02\u011D!\x03\x02\x02\x02\u011E\u011F\x07" +
		"\f\x02\x02\u011F\u0120\x07 \x02\x02\u0120\u0121\x07\x1A\x02\x02\u0121" +
		"\u0122\x07\x1C\x02\x02\u0122\u0127\x05\x06\x04\x02\u0123\u0124\x07\x1C" +
		"\x02\x02\u0124\u0126\x05\x06\x04\x02\u0125\u0123\x03\x02\x02\x02\u0126" +
		"\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02" +
		"\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A" +
		"\u012C\x07\x1C\x02\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02" +
		"\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07!\x02\x02\u012E#\x03" +
		"\x02\x02\x02\u012F\u0130\x07\r\x02\x02\u0130\u0131\x07 \x02\x02\u0131" +
		"\u0132\x07\x1A\x02\x02\u0132\u0133\x07\x1C\x02\x02\u0133\u0138\x05\x06" +
		"\x04\x02\u0134\u0135\x07\x1C\x02\x02\u0135\u0137\x05\x06\x04\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A" +
		"\u0138\x03\x02\x02\x02\u013B\u013D\x07\x1C\x02\x02\u013C\u013B\x03\x02" +
		"\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
		"\u013F\x07!\x02\x02\u013F%\x03\x02\x02\x02\u0140\u0141\x07\x0E\x02\x02" +
		"\u0141\u0142\x07 \x02\x02\u0142\u0143\x07\x1A\x02\x02\u0143\u0144\x07" +
		"\x1C\x02\x02\u0144\u0149\x05\x06\x04\x02\u0145\u0146\x07\x1C\x02\x02\u0146" +
		"\u0148\x05\x06\x04\x02\u0147\u0145\x03\x02\x02\x02\u0148\u014B\x03\x02" +
		"\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014E\x07\x1C" +
		"\x02\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E" +
		"\u014F\x03\x02\x02\x02\u014F\u0150\x07!\x02\x02\u0150\'\x03\x02\x02\x02" +
		"\u0151\u0152\x07\x0F\x02\x02\u0152\u0153\x07 \x02\x02\u0153\u0154\x07" +
		"\x1A\x02\x02\u0154\u0155\x07\x1C\x02\x02\u0155\u015A\x05\x06\x04\x02\u0156" +
		"\u0157\x07\x1C\x02\x02\u0157\u0159\x05\x06\x04\x02\u0158\u0156\x03\x02" +
		"\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A" +
		"\u015B\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02" +
		"\x02\x02\u015D\u015F\x07\x1C\x02\x02\u015E\u015D\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x07!\x02" +
		"\x02\u0161)\x03\x02\x02\x02\u0162\u0163\x07\x10\x02\x02\u0163\u0164\x07" +
		" \x02\x02\u0164\u0165\x07\x1A\x02\x02\u0165\u0166\x07\x1C\x02\x02\u0166" +
		"\u016B\x05\x06\x04\x02\u0167\u0168\x07\x1C\x02\x02\u0168\u016A\x05\x06" +
		"\x04\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B" +
		"\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016F\x03\x02" +
		"\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0170\x07\x1C\x02\x02\u016F" +
		"\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02" +
		"\x02\x02\u0171\u0172\x07!\x02\x02\u0172+\x03\x02\x02\x02\u0173\u0174\x07" +
		"\x12\x02\x02\u0174\u0175\x07 \x02\x02\u0175\u0176\x07\x1A\x02\x02\u0176" +
		"\u0177\x07\x1C\x02\x02\u0177\u017C\x05\x06\x04\x02\u0178\u0179\x07\x1C" +
		"\x02\x02\u0179\u017B\x05\x06\x04\x02\u017A\u0178\x03\x02\x02\x02\u017B" +
		"\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02" +
		"\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F" +
		"\u0181\x07\x1C\x02\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02" +
		"\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183\x07!\x02\x02\u0183-\x03" +
		"\x02\x02\x02\u0184\u0185\x07\x11\x02\x02\u0185\u0186\x07 \x02\x02\u0186" +
		"\u0187\x07\x1A\x02\x02\u0187\u0188\x07\x1C\x02\x02\u0188\u018D\x05\x06" +
		"\x04\x02\u0189\u018A\x07\x1C\x02\x02\u018A\u018C\x05\x06\x04\x02\u018B" +
		"\u0189\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02" +
		"\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F" +
		"\u018D\x03\x02\x02\x02\u0190\u0192\x07\x1C\x02\x02\u0191\u0190\x03\x02" +
		"\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
		"\u0194\x07!\x02\x02\u0194/\x03\x02\x02\x02\u0195\u0196\x07\x13\x02\x02" +
		"\u0196\u0197\x07 \x02\x02\u0197\u0198\x07\x1A\x02\x02\u0198\u0199\x07" +
		"\x1C\x02\x02\u0199\u019E\x05\x06\x04\x02\u019A\u019B\x07\x1C\x02\x02\u019B" +
		"\u019D\x05\x06\x04\x02\u019C\u019A\x03\x02\x02\x02\u019D\u01A0\x03\x02" +
		"\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F" +
		"\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A3\x07\x1C" +
		"\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
		"\u01A4\x03\x02\x02\x02\u01A4\u01A5\x07!\x02\x02\u01A51\x03\x02\x02\x02" +
		"\u01A6\u01A7\x07\x14\x02\x02\u01A7\u01A8\x07 \x02\x02\u01A8\u01A9\x07" +
		"\x1A\x02\x02\u01A9\u01AA\x07\x1C\x02\x02\u01AA\u01AF\x05\x06\x04\x02\u01AB" +
		"\u01AC\x07\x1C\x02\x02\u01AC\u01AE\x05\x06\x04\x02\u01AD\u01AB\x03\x02" +
		"\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF" +
		"\u01B0\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02" +
		"\x02\x02\u01B2\u01B4\x07\x1C\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3" +
		"\u01B4\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x07!\x02" +
		"\x02\u01B63\x03\x02\x02\x02\u01B7\u01B8\x07\x16\x02\x02\u01B8\u01B9\x07" +
		" \x02\x02\u01B9\u01BA\x07\x1A\x02\x02\u01BA\u01BB\x07\x1C\x02\x02\u01BB" +
		"\u01C0\x05\x06\x04\x02\u01BC\u01BD\x07\x1C\x02\x02\u01BD\u01BF\x05\x06" +
		"\x04\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0" +
		"\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C4\x03\x02" +
		"\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C3\u01C5\x07\x1C\x02\x02\u01C4" +
		"\u01C3\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02" +
		"\x02\x02\u01C6\u01C7\x07!\x02\x02\u01C75\x03\x02\x02\x02\u01C8\u01C9\x07" +
		"\x17\x02\x02\u01C9\u01CA\x07 \x02\x02\u01CA\u01CB\x07\x1A\x02\x02\u01CB" +
		"\u01CC\x07\x1C\x02\x02\u01CC\u01D1\x05\x06\x04\x02\u01CD\u01CE\x07\x1C" +
		"\x02\x02\u01CE\u01D0\x05\x06\x04\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0" +
		"\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02" +
		"\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4" +
		"\u01D6\x07\x1C\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02" +
		"\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x07!\x02\x02\u01D87\x03" +
		"\x02\x02\x02\u01D9\u01DA\x07\x15\x02\x02\u01DA\u01DB\x07 \x02\x02\u01DB" +
		"\u01DC\x07\x1A\x02\x02\u01DC\u01DD\x07\x1C\x02\x02\u01DD\u01E2\x05\x06" +
		"\x04\x02\u01DE\u01DF\x07\x1C\x02\x02\u01DF\u01E1\x05\x06\x04\x02\u01E0" +
		"\u01DE\x03\x02\x02\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E0\x03\x02" +
		"\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4" +
		"\u01E2\x03\x02\x02\x02\u01E5\u01E7\x07\x1C\x02\x02\u01E6\u01E5\x03\x02" +
		"\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
		"\u01E9\x07!\x02\x02\u01E99\x03\x02\x02\x022=Ylp}\x81\x8E\x92\x9F\xA3\xB0" +
		"\xB4\xC1\xC5\xD2\xD6\xE3\xE7\xF4\xF8\u0105\u0109\u0116\u011A\u0127\u012B" +
		"\u0138\u013C\u0149\u014D\u015A\u015E\u016B\u016F\u017C\u0180\u018D\u0191" +
		"\u019E\u01A2\u01AF\u01B3\u01C0\u01C4\u01D1\u01D5\u01E2\u01E6";
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
	public bachelorthesis(): BachelorthesisContext | undefined {
		return this.tryGetRuleContext(0, BachelorthesisContext);
	}
	public igemwiki(): IgemwikiContext | undefined {
		return this.tryGetRuleContext(0, IgemwikiContext);
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


export class IgemwikiContext extends ParserRuleContext {
	public IGEMWIKI(): TerminalNode { return this.getToken(BibTeXParser.IGEMWIKI, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_igemwiki; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterIgemwiki) {
			listener.enterIgemwiki(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitIgemwiki) {
			listener.exitIgemwiki(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitIgemwiki) {
			return visitor.visitIgemwiki(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BachelorthesisContext extends ParserRuleContext {
	public BACHELORTHESIS(): TerminalNode { return this.getToken(BibTeXParser.BACHELORTHESIS, 0); }
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
	public get ruleIndex(): number { return BibTeXParser.RULE_bachelorthesis; }
	// @Override
	public enterRule(listener: BibTeXParserListener): void {
		if (listener.enterBachelorthesis) {
			listener.enterBachelorthesis(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXParserListener): void {
		if (listener.exitBachelorthesis) {
			listener.exitBachelorthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXParserVisitor<Result>): Result {
		if (visitor.visitBachelorthesis) {
			return visitor.visitBachelorthesis(this);
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


