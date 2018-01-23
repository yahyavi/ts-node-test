import * as Modernizr from "modernizr";

export class MyClass {
    public sum(a: number, b: number) {
        return a + b;
    }

    public modern(): boolean {
        if (Modernizr.webgl) {
            return true;
        }
        return false;
    }
}