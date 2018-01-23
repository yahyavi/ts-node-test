import "mocha";
import {expect} from "chai";
import {MyClass} from "./myclass";

it("test", () => {
    const instance = new MyClass();
    expect(instance.sum(1, 2)).to.equal(3);
});