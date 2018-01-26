import {expect} from "./expect";
import * as Modernizr from "modernizr";
import {MyClass} from "../src/myclass";
import * as sinon from "sinon";
require("jsdom-global")(); // this should come after Modernizr import!!!!

describe("a series of sample tests", () => {
    beforeEach(() => {
        this.sinon = sinon.sandbox.create();
    });

    afterEach(() => {
        this.sinon.restore();
    })

    it("async test", (done) => {
        const instance = new MyClass();
        instance.asyncSum(2, 2, (r) => {
            expect(r).to.equal(4);
            done();
        });
    });

    it("await test", async () => {
        const instance = new MyClass();
        // const result = await instance.awaitSum(5, 2);
        return expect(instance.awaitSum(5, 2)).to.eventually.equal(7);
    });

    it("normal test", () => {
        const stub = sinon.createStubInstance(MyClass);
        const instance = new MyClass();
        const mySpy = sinon.spy(instance, "sum");
        expect(instance.sum(1, 2)).to.equal(3);
        expect(mySpy).to.have.been.calledWith(1, 2);
        expect(instance.sum).to.have.been.callCount(1);
    });

    it("modernizer test", () => {
        const instance = new MyClass();
        Modernizr.webgl = true;
        expect(instance.modern()).to.equal(true);
    });
});
