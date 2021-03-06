import {expect} from "./expect";
import * as Modernizr from "modernizr";
import {MyClass} from "../src/myclass";
import * as sinon from "sinon";
require("jsdom-global")(); // this should come after Modernizr import!!!!

// don't use lambda functions, so we can access mocha's internal variables like this.timeout
describe("a series of sample tests", function() {
    beforeEach("before each", function() {
        this.fakeClass = this.sandbox.createStubInstance(MyClass);
        this.clock = this.sandbox.useFakeTimers();
    });

    afterEach(function() {
        this.sandbox.restore();
    });

    before("before all", function() {
        this.sandbox = sinon.createSandbox();
    });

    after("after all", function() {
    });

    it("testing stubs", function() {
        this.fakeClass.log.returns("fake");
        expect(this.fakeClass.log()).to.equal("fake");
    });

    it("a pending test");

    // to override the internal 2s timer
    this.timeout(5000);

    // for showing slow tests in the report
    this.slow(1);

    it("async test", function(done) {
        const instance = new MyClass();
        const t1 = process.hrtime();
        instance.asyncSum(2, 2, function(r) {
            expect(r, "timer's result").to.equal(4);
            const t2 = process.hrtime();
            // console.log(t2[0] * 1e9 + t2[1] - t1[0] * 1e9 - t1[1]);
            done();
        });
        this.clock.next();
    });

    it("await test", function() {
        const instance = new MyClass();
        // note: when working with promises, we should "return" the test statement
        return expect(instance.awaitSum(5, 2)).to.eventually.equal(7);
    });

    it("async await test", async function() {
        const instance = new MyClass();
        const result = await instance.awaitSum(5, 2);
        expect(result).to.equal(7);
    });

    it("normal test", function() {
        const instance = new MyClass();
        const mySpy = this.sandbox.spy(instance, "sum");
        expect(instance.sum(1, 2)).to.equal(3);
        expect(mySpy).to.have.been.calledWith(1, 2);
        expect(instance.sum).to.have.callCount(1);
    });

    it("modernizer test", function() {
        const instance = new MyClass();
        Modernizr.webgl = true;
        expect(instance.modern()).to.equal(true);
    });
});
