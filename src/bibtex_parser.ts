import {BibTeXLexer} from './base/BibTeXLexer';
import {BibTeX} from './base/BibTeX';
import BibVisitor from './core/bib_visitor'
import {CharStreams, CommonTokenStream} from 'antlr4ts';

/**
 * Parse to a bib object
 *
 * @param input
 * @returns {{entries: []}}
 */
export function parse(input: string) {
    // Get parse tree
    const parseTree = getParseTree(input);
    // Instantiate the BibVisitor (root visitor)
    const bibVisitor = new BibVisitor();
    parseTree.accept(bibVisitor);

    return bibVisitor.bib;
}

const getParseTree = (input: string) => {
    const chars = CharStreams.fromString(input);
    const lexer = new BibTeXLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new BibTeX(tokens);
    parser.buildParseTree = true;
    return parser.bibTex();
}