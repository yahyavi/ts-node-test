import * as Modernizr from "modernizr";

export class MyClass {
    public sum(a: number, b: number) {
        console.log(atob("abc"));
        return a + b;
    }

    public modern(): boolean {
        if (Modernizr.webgl) {
            return true;
        }
        return false;
    }

    public asyncSum(a: number, b: number, c) {
        setTimeout(() => {
            c(a + b);
        }, 3100);
    }

    public log() {
        return "real";
    }

    public async awaitSum(a: number, b: number): Promise {
        return new Promise((res, rej) => {res(a + b);});
    }
}