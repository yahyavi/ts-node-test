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
