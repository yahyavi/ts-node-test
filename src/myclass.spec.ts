import "mocha";
import {expect} from "chai";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
import * as sinon from "sinon";
import * as Modernizr from "modernizr";
import {MyClass} from "./myclass";
require("jsdom-global")(); // this should come after Modernizr!!!!

chai.use(sinonChai);

describe("a series of sample tests", () => {
    before(() => {
        this.jsdom = require("jsdom-global")();
    });

    after(() => {
        this.jsdom();
    });

    it("normal test", () => {
        const instance = new MyClass();
        expect(instance.sum(1, 2)).to.equal(3);
    });

    it("modernizer test", () => {
        const instance = new MyClass();
        Modernizr.webgl = true;
        expect(instance.modern()).to.equal(true);
    })
});
