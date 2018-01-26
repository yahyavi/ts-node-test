import {expect} from "./expect";
import * as Modernizr from "modernizr";
import {MyClass} from "../src/myclass";
import * as sinon from "sinon";
require("jsdom-global")(); // this should come after Modernizr import!!!!

// don't use lambda functions, so we can access mocha's internal variables like this.timeout
describe("a series of sample tests", function() {
    beforeEach(function() {
        this.sinon = sinon.sandbox.create();
    });

    afterEach(function() {
        this.sinon.restore();
    });

    before(function() {
        console.log("start!");
    });

    after(function() {
        console.log("done :)");
    });

    it("a pending test");

    // to override the internal 2s timer
    this.timeout(5000);

    it("async test", function(done) {
        const instance = new MyClass();
        instance.asyncSum(2, 2, function(r) {
            expect(r).to.equal(4);
            done();
        });
    });

    it("await test", function() {
        const instance = new MyClass();
        return expect(instance.awaitSum(5, 2)).to.eventually.equal(7);
    });

    it("async await test", async function() {
        const instance = new MyClass();
        const result = await instance.awaitSum(5, 2);
        expect(result).to.equal(7);
    });

    it("normal test", function() {
        const stub = sinon.createStubInstance(MyClass);
        const instance = new MyClass();
        const mySpy = sinon.spy(instance, "sum");
        expect(instance.sum(1, 2)).to.equal(3);
        expect(mySpy).to.have.been.calledWith(1, 2);
        expect(instance.sum).to.have.been.callCount(1);
    });

    it("modernizer test", function() {
        const instance = new MyClass();
        Modernizr.webgl = true;
        expect(instance.modern()).to.equal(true);
    });
});
