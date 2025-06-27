import {expect} from "chai";
import {parse} from "../src/bibtex_parser"
import {MyPublications} from "./inputs";

describe('Parser', function () {
    describe('#parse(input)', function () {
        it('should return a correct bib object', function () {
            const bib = parse(MyPublications);
            expect(bib).to.be.not.null;
            const entry1 = bib.entries[1];
            expect(entry1).to.be.not.null;
            expect(entry1.type).to.equal("inproceedings");
            console.log("Entry 1 type:", entry1.type);
            expect(entry1.id).to.equal("ding_dagbase_2020");
            expect(entry1.fields[0].value).to.equal("Dagbase: a decentralized database platform {Using} {DAG}-based consensus");
        });
    });
});