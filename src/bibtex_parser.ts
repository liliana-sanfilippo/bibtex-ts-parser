import {BibTeXLexer} from './base/BibTeXLexer';
import {BibTeX} from './base/BibTeX';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {Visitor} from "./core/visitor";

/**
 * Parse to a bib object.
 *
 * @param input
 * @returns {{entries: []}}
 */
export function parse(input: string) {

    const parseTree = getParseTree(input);

    const bibVisitor = new Visitor();
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
    const parser = new BibTeX(tokens);
    parser.buildParseTree = true;
    return parser.bibTex();
}