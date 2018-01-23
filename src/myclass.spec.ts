import "mocha";
import {expect} from "chai";
import {MyClass} from "./myclass";

it("normal test", () => {
    const instance = new MyClass();
    expect(instance.sum(1, 2)).to.equal(3);
});

it("modernizer test", () => {
    const instance = new MyClass();
    expect(instance.modern()).to.equal(false);
})