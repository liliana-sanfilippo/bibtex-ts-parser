import {Entry, parseToEntry} from "../index";
import {expect} from "chai";


describe('Index', function () {
    describe('#parsetoEntry(input)', function () {
        it('should return a correct Entry', function () {
            const bib = `@book{key, \t title={title}}`;
            const entry: Entry[] = [{id: "key", type: "book", title: "title"}]
            expect(parseToEntry(bib)).to.deep.equal(entry);
        });
    });
})