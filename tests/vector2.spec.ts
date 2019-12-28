import { default as Vector2 } from "../src/vector2";

describe("Vector2", () => {
    it("initializes a new Vector2", () => {
        const v = new Vector2();

        expect(v.x).toBe(0);
        expect(v.y).toBe(0);
    });

    it("toString() method", () => {
        const v = new Vector2();
        const string = v.toString();

        expect(typeof string).toBe("string");
        expect(string).toBe("x: 0, y: 0");
    });

    it("length() method", () => {
        const v = new Vector2(15, 20);
        const length = v.length();

        expect(typeof length).toBe("number");
        expect(length).toBe(35);
    });
});