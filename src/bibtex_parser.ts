import {BibTeXLexer} from './base/BibTeXLexer';
import {BibTeXParser} from "./base/BibTeXParser";
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {Visitor} from "./core/visitor";

/**
 * Parse to a bib object.
 *
 * @param input
 * @returns {{entries: []}}
 */
export function parse(input: string) {
    console.log("getParseTree");
    const parseTree = getParseTree(input);
    console.log("new Visitor();");
    const bibVisitor = new Visitor();
    console.log("accept");
    parseTree.accept(bibVisitor);

    return bibVisitor.bib;
}

/**
 * builds parse tree.
 * @param input input to be parsed
 */
const getParseTree = (input: string) => {
    const chars = CharStreams.fromString(input);
    const lexer = new BibTeXLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new BibTeXParser(tokens);
    parser.buildParseTree = true;
    return parser.bibTex();
}