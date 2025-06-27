// Generated from src/grammar/BibTeX.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { BibTeXListener } from "./BibTeXListener";
import BibTeXVisitor from "./BibTeXVisitor";


export class BibTeX extends Parser {
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
	public static readonly IDENTIFIER = 14;
	public static readonly EQ = 15;
	public static readonly COMMA = 16;
	public static readonly DQUOTE = 17;
	public static readonly LPAREN = 18;
	public static readonly RPAREN = 19;
	public static readonly LBRACE = 20;
	public static readonly RBRACE = 21;
	public static readonly AT = 22;
	public static readonly STRING_LITERAL = 23;
	public static readonly INTEGER_LITERAL = 24;
	public static readonly WS = 25;
	public static readonly LINE_COMMENT = 26;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bibTex", "entry", "field", "key", "value", "article", "book", "booklet", 
		"inbook", "incollection", "inproceedings", "proceedings", "manual", "mastersthesis", 
		"phdthesis", "misc", "techreport", "unpublished",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'='", "','", "'\"'", "'('", "')'", "'{'", "'}'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", "INCOLLECTION", "INPROCEEDINGS", 
		"PROCEEDINGS", "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", "TECHREPORT", 
		"UNPUBLISHED", "IDENTIFIER", "EQ", "COMMA", "DQUOTE", "LPAREN", "RPAREN", 
		"LBRACE", "RBRACE", "AT", "STRING_LITERAL", "INTEGER_LITERAL", "WS", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BibTeX._LITERAL_NAMES, BibTeX._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BibTeX.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BibTeX.g4"; }

	// @Override
	public get ruleNames(): string[] { return BibTeX.ruleNames; }

	// @Override
	public get serializedATN(): string { return BibTeX._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BibTeX._ATN, this);
	}
	// @RuleVersion(0)
	public bibTex(): BibTexContext {
		let _localctx: BibTexContext = new BibTexContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BibTeX.RULE_bibTex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BibTeX.ARTICLE) | (1 << BibTeX.BOOK) | (1 << BibTeX.BOOKLET) | (1 << BibTeX.INBOOK) | (1 << BibTeX.INCOLLECTION) | (1 << BibTeX.INPROCEEDINGS) | (1 << BibTeX.PROCEEDINGS) | (1 << BibTeX.MANUAL) | (1 << BibTeX.MASTERTHESIS) | (1 << BibTeX.PHDTHESIS) | (1 << BibTeX.MISC) | (1 << BibTeX.TECHREPORT) | (1 << BibTeX.UNPUBLISHED))) !== 0)) {
				{
				{
				this.state = 36;
				this.entry();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public entry(): EntryContext {
		let _localctx: EntryContext = new EntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BibTeX.RULE_entry);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BibTeX.ARTICLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.article();
				}
				break;
			case BibTeX.BOOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.book();
				}
				break;
			case BibTeX.BOOKLET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 44;
				this.booklet();
				}
				break;
			case BibTeX.INBOOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 45;
				this.inbook();
				}
				break;
			case BibTeX.INCOLLECTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 46;
				this.incollection();
				}
				break;
			case BibTeX.INPROCEEDINGS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 47;
				this.inproceedings();
				}
				break;
			case BibTeX.PROCEEDINGS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 48;
				this.proceedings();
				}
				break;
			case BibTeX.MANUAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 49;
				this.manual();
				}
				break;
			case BibTeX.MASTERTHESIS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 50;
				this.mastersthesis();
				}
				break;
			case BibTeX.PHDTHESIS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 51;
				this.phdthesis();
				}
				break;
			case BibTeX.MISC:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 52;
				this.misc();
				}
				break;
			case BibTeX.TECHREPORT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 53;
				this.techreport();
				}
				break;
			case BibTeX.UNPUBLISHED:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 54;
				this.unpublished();
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
		this.enterRule(_localctx, 4, BibTeX.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.key();
			this.state = 58;
			this.match(BibTeX.EQ);
			this.state = 59;
			this.value();
			this.state = 60;
			this.match(BibTeX.COMMA);
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
		this.enterRule(_localctx, 6, BibTeX.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(BibTeX.IDENTIFIER);
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
		this.enterRule(_localctx, 8, BibTeX.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			_la = this._input.LA(1);
			if (!(_la === BibTeX.STRING_LITERAL || _la === BibTeX.INTEGER_LITERAL)) {
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
		this.enterRule(_localctx, 10, BibTeX.RULE_article);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(BibTeX.ARTICLE);
			this.state = 67;
			this.match(BibTeX.LBRACE);
			this.state = 68;
			this.match(BibTeX.IDENTIFIER);
			this.state = 69;
			this.match(BibTeX.COMMA);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.field();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 75;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 12, BibTeX.RULE_book);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(BibTeX.BOOK);
			this.state = 78;
			this.match(BibTeX.LBRACE);
			this.state = 79;
			this.match(BibTeX.IDENTIFIER);
			this.state = 80;
			this.match(BibTeX.COMMA);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 81;
				this.field();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 86;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 14, BibTeX.RULE_booklet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(BibTeX.BOOKLET);
			this.state = 89;
			this.match(BibTeX.LBRACE);
			this.state = 90;
			this.match(BibTeX.IDENTIFIER);
			this.state = 91;
			this.match(BibTeX.COMMA);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 92;
				this.field();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 97;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 16, BibTeX.RULE_inbook);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(BibTeX.INBOOK);
			this.state = 100;
			this.match(BibTeX.LBRACE);
			this.state = 101;
			this.match(BibTeX.IDENTIFIER);
			this.state = 102;
			this.match(BibTeX.COMMA);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 103;
				this.field();
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 108;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 18, BibTeX.RULE_incollection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(BibTeX.INCOLLECTION);
			this.state = 111;
			this.match(BibTeX.LBRACE);
			this.state = 112;
			this.match(BibTeX.IDENTIFIER);
			this.state = 113;
			this.match(BibTeX.COMMA);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 114;
				this.field();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 119;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 20, BibTeX.RULE_inproceedings);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(BibTeX.INPROCEEDINGS);
			this.state = 122;
			this.match(BibTeX.LBRACE);
			this.state = 123;
			this.match(BibTeX.IDENTIFIER);
			this.state = 124;
			this.match(BibTeX.COMMA);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 125;
				this.field();
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 130;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 22, BibTeX.RULE_proceedings);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(BibTeX.PROCEEDINGS);
			this.state = 133;
			this.match(BibTeX.LBRACE);
			this.state = 134;
			this.match(BibTeX.IDENTIFIER);
			this.state = 135;
			this.match(BibTeX.COMMA);
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 136;
				this.field();
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 141;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 24, BibTeX.RULE_manual);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(BibTeX.MANUAL);
			this.state = 144;
			this.match(BibTeX.LBRACE);
			this.state = 145;
			this.match(BibTeX.IDENTIFIER);
			this.state = 146;
			this.match(BibTeX.COMMA);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 147;
				this.field();
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 152;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 26, BibTeX.RULE_mastersthesis);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(BibTeX.MASTERTHESIS);
			this.state = 155;
			this.match(BibTeX.LBRACE);
			this.state = 156;
			this.match(BibTeX.IDENTIFIER);
			this.state = 157;
			this.match(BibTeX.COMMA);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 158;
				this.field();
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 163;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 28, BibTeX.RULE_phdthesis);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(BibTeX.PHDTHESIS);
			this.state = 166;
			this.match(BibTeX.LBRACE);
			this.state = 167;
			this.match(BibTeX.IDENTIFIER);
			this.state = 168;
			this.match(BibTeX.COMMA);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 169;
				this.field();
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 174;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 30, BibTeX.RULE_misc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(BibTeX.MISC);
			this.state = 177;
			this.match(BibTeX.LBRACE);
			this.state = 178;
			this.match(BibTeX.IDENTIFIER);
			this.state = 179;
			this.match(BibTeX.COMMA);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 180;
				this.field();
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 185;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 32, BibTeX.RULE_techreport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(BibTeX.TECHREPORT);
			this.state = 188;
			this.match(BibTeX.LBRACE);
			this.state = 189;
			this.match(BibTeX.IDENTIFIER);
			this.state = 190;
			this.match(BibTeX.COMMA);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 191;
				this.field();
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 196;
			this.match(BibTeX.RBRACE);
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
		this.enterRule(_localctx, 34, BibTeX.RULE_unpublished);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(BibTeX.UNPUBLISHED);
			this.state = 199;
			this.match(BibTeX.LBRACE);
			this.state = 200;
			this.match(BibTeX.IDENTIFIER);
			this.state = 201;
			this.match(BibTeX.COMMA);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 202;
				this.field();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BibTeX.IDENTIFIER);
			this.state = 207;
			this.match(BibTeX.RBRACE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\xD4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03:\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x06\x07J\n\x07\r\x07\x0E\x07K\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x06\bU\n\b\r\b\x0E\bV\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x06\t`\n\t\r\t\x0E\ta\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n" +
		"k\n\n\r\n\x0E\nl\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x06\vv\n\v" +
		"\r\v\x0E\vw\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\x81\n\f\r" +
		"\f\x0E\f\x82\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\x8C\n\r\r" +
		"\r\x0E\r\x8D\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E" +
		"\x97\n\x0E\r\x0E\x0E\x0E\x98\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x06\x0F\xA2\n\x0F\r\x0F\x0E\x0F\xA3\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x06\x10\xAD\n\x10\r\x10\x0E\x10\xAE\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\xB8\n\x11" +
		"\r\x11\x0E\x11\xB9\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x06\x12\xC3\n\x12\r\x12\x0E\x12\xC4\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x06\x13\xCE\n\x13\r\x13\x0E\x13\xCF\x03\x13\x03" +
		"\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02\x02\x03\x03\x02\x19\x1A\x02\xDB\x02)\x03\x02\x02\x02" +
		"\x049\x03\x02\x02\x02\x06;\x03\x02\x02\x02\b@\x03\x02\x02\x02\nB\x03\x02" +
		"\x02\x02\fD\x03\x02\x02\x02\x0EO\x03\x02\x02\x02\x10Z\x03\x02\x02\x02" +
		"\x12e\x03\x02\x02\x02\x14p\x03\x02\x02\x02\x16{\x03\x02\x02\x02\x18\x86" +
		"\x03\x02\x02\x02\x1A\x91\x03\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E\xA7" +
		"\x03\x02\x02\x02 \xB2\x03\x02\x02\x02\"\xBD\x03\x02\x02\x02$\xC8\x03\x02" +
		"\x02\x02&(\x05\x04\x03\x02\'&\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03" +
		"\x02\x02\x02)*\x03\x02\x02\x02*\x03\x03\x02\x02\x02+)\x03\x02\x02\x02" +
		",:\x05\f\x07\x02-:\x05\x0E\b\x02.:\x05\x10\t\x02/:\x05\x12\n\x020:\x05" +
		"\x14\v\x021:\x05\x16\f\x022:\x05\x18\r\x023:\x05\x1A\x0E\x024:\x05\x1C" +
		"\x0F\x025:\x05\x1E\x10\x026:\x05 \x11\x027:\x05\"\x12\x028:\x05$\x13\x02" +
		"9,\x03\x02\x02\x029-\x03\x02\x02\x029.\x03\x02\x02\x029/\x03\x02\x02\x02" +
		"90\x03\x02\x02\x0291\x03\x02\x02\x0292\x03\x02\x02\x0293\x03\x02\x02\x02" +
		"94\x03\x02\x02\x0295\x03\x02\x02\x0296\x03\x02\x02\x0297\x03\x02\x02\x02" +
		"98\x03\x02\x02\x02:\x05\x03\x02\x02\x02;<\x05\b\x05\x02<=\x07\x11\x02" +
		"\x02=>\x05\n\x06\x02>?\x07\x12\x02\x02?\x07\x03\x02\x02\x02@A\x07\x10" +
		"\x02\x02A\t\x03\x02\x02\x02BC\t\x02\x02\x02C\v\x03\x02\x02\x02DE\x07\x03" +
		"\x02\x02EF\x07\x16\x02\x02FG\x07\x10\x02\x02GI\x07\x12\x02\x02HJ\x05\x06" +
		"\x04\x02IH\x03\x02\x02\x02JK\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02" +
		"\x02\x02LM\x03\x02\x02\x02MN\x07\x17\x02\x02N\r\x03\x02\x02\x02OP\x07" +
		"\x04\x02\x02PQ\x07\x16\x02\x02QR\x07\x10\x02\x02RT\x07\x12\x02\x02SU\x05" +
		"\x06\x04\x02TS\x03\x02\x02\x02UV\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03" +
		"\x02\x02\x02WX\x03\x02\x02\x02XY\x07\x17\x02\x02Y\x0F\x03\x02\x02\x02" +
		"Z[\x07\x05\x02\x02[\\\x07\x16\x02\x02\\]\x07\x10\x02\x02]_\x07\x12\x02" +
		"\x02^`\x05\x06\x04\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02a_\x03\x02\x02" +
		"\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x07\x17\x02\x02d\x11\x03\x02" +
		"\x02\x02ef\x07\x06\x02\x02fg\x07\x16\x02\x02gh\x07\x10\x02\x02hj\x07\x12" +
		"\x02\x02ik\x05\x06\x04\x02ji\x03\x02\x02\x02kl\x03\x02\x02\x02lj\x03\x02" +
		"\x02\x02lm\x03\x02\x02\x02mn\x03\x02\x02\x02no\x07\x17\x02\x02o\x13\x03" +
		"\x02\x02\x02pq\x07\x07\x02\x02qr\x07\x16\x02\x02rs\x07\x10\x02\x02su\x07" +
		"\x12\x02\x02tv\x05\x06\x04\x02ut\x03\x02\x02\x02vw\x03\x02\x02\x02wu\x03" +
		"\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x07\x17\x02\x02z\x15" +
		"\x03\x02\x02\x02{|\x07\b\x02\x02|}\x07\x16\x02\x02}~\x07\x10\x02\x02~" +
		"\x80\x07\x12\x02\x02\x7F\x81\x05\x06\x04\x02\x80\x7F\x03\x02\x02\x02\x81" +
		"\x82\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84\x85\x07\x17\x02\x02\x85\x17\x03\x02\x02\x02\x86" +
		"\x87\x07\t\x02\x02\x87\x88\x07\x16\x02\x02\x88\x89\x07\x10\x02\x02\x89" +
		"\x8B\x07\x12\x02\x02\x8A\x8C\x05\x06\x04\x02\x8B\x8A\x03\x02\x02\x02\x8C" +
		"\x8D\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E" +
		"\x8F\x03\x02\x02\x02\x8F\x90\x07\x17\x02\x02\x90\x19\x03\x02\x02\x02\x91" +
		"\x92\x07\n\x02\x02\x92\x93\x07\x16\x02\x02\x93\x94\x07\x10\x02\x02\x94" +
		"\x96\x07\x12\x02\x02\x95\x97\x05\x06\x04\x02\x96\x95\x03\x02\x02\x02\x97" +
		"\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x9A\x03\x02\x02\x02\x9A\x9B\x07\x17\x02\x02\x9B\x1B\x03\x02\x02\x02\x9C" +
		"\x9D\x07\v\x02\x02\x9D\x9E\x07\x16\x02\x02\x9E\x9F\x07\x10\x02\x02\x9F" +
		"\xA1\x07\x12\x02\x02\xA0\xA2\x05\x06\x04\x02\xA1\xA0\x03\x02\x02\x02\xA2" +
		"\xA3\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4" +
		"\xA5\x03\x02\x02\x02\xA5\xA6\x07\x17\x02\x02\xA6\x1D\x03\x02\x02\x02\xA7" +
		"\xA8\x07\f\x02\x02\xA8\xA9\x07\x16\x02\x02\xA9\xAA\x07\x10\x02\x02\xAA" +
		"\xAC\x07\x12\x02\x02\xAB\xAD\x05\x06\x04\x02\xAC\xAB\x03\x02\x02\x02\xAD" +
		"\xAE\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF" +
		"\xB0\x03\x02\x02\x02\xB0\xB1\x07\x17\x02\x02\xB1\x1F\x03\x02\x02\x02\xB2" +
		"\xB3\x07\r\x02\x02\xB3\xB4\x07\x16\x02\x02\xB4\xB5\x07\x10\x02\x02\xB5" +
		"\xB7\x07\x12\x02\x02\xB6\xB8\x05\x06\x04\x02\xB7\xB6\x03\x02\x02\x02\xB8" +
		"\xB9\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA" +
		"\xBB\x03\x02\x02\x02\xBB\xBC\x07\x17\x02\x02\xBC!\x03\x02\x02\x02\xBD" +
		"\xBE\x07\x0E\x02\x02\xBE\xBF\x07\x16\x02\x02\xBF\xC0\x07\x10\x02\x02\xC0" +
		"\xC2\x07\x12\x02\x02\xC1\xC3\x05\x06\x04\x02\xC2\xC1\x03\x02\x02\x02\xC3" +
		"\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5" +
		"\xC6\x03\x02\x02\x02\xC6\xC7\x07\x17\x02\x02\xC7#\x03\x02\x02\x02\xC8" +
		"\xC9\x07\x0F\x02\x02\xC9\xCA\x07\x16\x02\x02\xCA\xCB\x07\x10\x02\x02\xCB" +
		"\xCD\x07\x12\x02\x02\xCC\xCE\x05\x06\x04\x02\xCD\xCC\x03\x02\x02\x02\xCE" +
		"\xCF\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0" +
		"\xD1\x03\x02\x02\x02\xD1\xD2\x07\x17\x02\x02\xD2%\x03\x02\x02\x02\x11" +
		")9KValw\x82\x8D\x98\xA3\xAE\xB9\xC4\xCF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BibTeX.__ATN) {
			BibTeX.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BibTeX._serializedATN));
		}

		return BibTeX.__ATN;
	}

}

export class BibTexContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return BibTeX.RULE_bibTex; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterBibTex) {
			listener.enterBibTex(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitBibTex) {
			listener.exitBibTex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_entry; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterEntry) {
			listener.enterEntry(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitEntry) {
			listener.exitEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
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
	public EQ(): TerminalNode { return this.getToken(BibTeX.EQ, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_field; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_key; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(BibTeX.INTEGER_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(BibTeX.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_value; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArticleContext extends ParserRuleContext {
	public ARTICLE(): TerminalNode { return this.getToken(BibTeX.ARTICLE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_article; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterArticle) {
			listener.enterArticle(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitArticle) {
			listener.exitArticle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitArticle) {
			return visitor.visitArticle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BookContext extends ParserRuleContext {
	public BOOK(): TerminalNode { return this.getToken(BibTeX.BOOK, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_book; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterBook) {
			listener.enterBook(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitBook) {
			listener.exitBook(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitBook) {
			return visitor.visitBook(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BookletContext extends ParserRuleContext {
	public BOOKLET(): TerminalNode { return this.getToken(BibTeX.BOOKLET, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_booklet; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterBooklet) {
			listener.enterBooklet(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitBooklet) {
			listener.exitBooklet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitBooklet) {
			return visitor.visitBooklet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InbookContext extends ParserRuleContext {
	public INBOOK(): TerminalNode { return this.getToken(BibTeX.INBOOK, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_inbook; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterInbook) {
			listener.enterInbook(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitInbook) {
			listener.exitInbook(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitInbook) {
			return visitor.visitInbook(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncollectionContext extends ParserRuleContext {
	public INCOLLECTION(): TerminalNode { return this.getToken(BibTeX.INCOLLECTION, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_incollection; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterIncollection) {
			listener.enterIncollection(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitIncollection) {
			listener.exitIncollection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitIncollection) {
			return visitor.visitIncollection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InproceedingsContext extends ParserRuleContext {
	public INPROCEEDINGS(): TerminalNode { return this.getToken(BibTeX.INPROCEEDINGS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_inproceedings; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterInproceedings) {
			listener.enterInproceedings(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitInproceedings) {
			listener.exitInproceedings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitInproceedings) {
			return visitor.visitInproceedings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProceedingsContext extends ParserRuleContext {
	public PROCEEDINGS(): TerminalNode { return this.getToken(BibTeX.PROCEEDINGS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_proceedings; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterProceedings) {
			listener.enterProceedings(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitProceedings) {
			listener.exitProceedings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitProceedings) {
			return visitor.visitProceedings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ManualContext extends ParserRuleContext {
	public MANUAL(): TerminalNode { return this.getToken(BibTeX.MANUAL, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_manual; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterManual) {
			listener.enterManual(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitManual) {
			listener.exitManual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitManual) {
			return visitor.visitManual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MastersthesisContext extends ParserRuleContext {
	public MASTERTHESIS(): TerminalNode { return this.getToken(BibTeX.MASTERTHESIS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_mastersthesis; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterMastersthesis) {
			listener.enterMastersthesis(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitMastersthesis) {
			listener.exitMastersthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitMastersthesis) {
			return visitor.visitMastersthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhdthesisContext extends ParserRuleContext {
	public PHDTHESIS(): TerminalNode { return this.getToken(BibTeX.PHDTHESIS, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_phdthesis; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterPhdthesis) {
			listener.enterPhdthesis(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitPhdthesis) {
			listener.exitPhdthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitPhdthesis) {
			return visitor.visitPhdthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MiscContext extends ParserRuleContext {
	public MISC(): TerminalNode { return this.getToken(BibTeX.MISC, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_misc; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterMisc) {
			listener.enterMisc(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitMisc) {
			listener.exitMisc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitMisc) {
			return visitor.visitMisc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TechreportContext extends ParserRuleContext {
	public TECHREPORT(): TerminalNode { return this.getToken(BibTeX.TECHREPORT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_techreport; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterTechreport) {
			listener.enterTechreport(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitTechreport) {
			listener.exitTechreport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitTechreport) {
			return visitor.visitTechreport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnpublishedContext extends ParserRuleContext {
	public UNPUBLISHED(): TerminalNode { return this.getToken(BibTeX.UNPUBLISHED, 0); }
	public LBRACE(): TerminalNode { return this.getToken(BibTeX.LBRACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(BibTeX.IDENTIFIER, 0); }
	public COMMA(): TerminalNode { return this.getToken(BibTeX.COMMA, 0); }
	public RBRACE(): TerminalNode { return this.getToken(BibTeX.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BibTeX.RULE_unpublished; }
	// @Override
	public enterRule(listener: BibTeXListener): void {
		if (listener.enterUnpublished) {
			listener.enterUnpublished(this);
		}
	}
	// @Override
	public exitRule(listener: BibTeXListener): void {
		if (listener.exitUnpublished) {
			listener.exitUnpublished(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BibTeXVisitor<Result>): Result {
		if (visitor.visitUnpublished) {
			return visitor.visitUnpublished(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


