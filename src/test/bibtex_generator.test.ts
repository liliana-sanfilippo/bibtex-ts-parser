import {expect} from "chai";
import {parseBibToJSON, parseToEntries} from "../bibtex_generator";
import {MyPublicationsBib} from "./inputs";
import {Entry} from "../core/type";


describe('Generator', function () {
    describe('#parseToJSON(bib)', function () {
        it('should return a correct JSON', function () {
            const bibJSON = parseBibToJSON(MyPublicationsBib)
            expect(bibJSON[0]['id']).to.equal("ding_dagbase_2020");
            expect(bibJSON[0]['title']).to.equal("Dagbase: a decentralized database platform Using DAG-based consensus");
        });
    });
    describe('#parseToEntries(bib)', function () {
        it('should return correct entries', function () {
            const bibEntries: Entry[] = parseToEntries(MyPublicationsBib)
            expect(bibEntries[0].id).to.equal("ding_dagbase_2020");
            expect(bibEntries[0].title).to.equal("Dagbase: a decentralized database platform Using DAG-based consensus");
        });
    });
});