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
        const v = new Vector2(2, 3);
        const length = v.length();

        expect(typeof length).toBe("number");
        expect(length).toBe(5);
    });

    it("lengthSquared() method", () => {
        const v = new Vector2(1, 1);
        const lengthSquared = v.lengthSquared();

        expect(typeof lengthSquared).toBe("number");
        expect(lengthSquared).toBe(2);
    });

    it("clone() method", () => {
        const v = new Vector2();
        const cloned = v.clone();

        expect(cloned).toBeInstanceOf(Vector2);
        expect(cloned.x && cloned.y).toBe(0);
    });

    it("copy() method", () => {
        const v = new Vector2();
        const copied = v.copy(new Vector2(1, 2));

        expect(copied).toBeInstanceOf(Vector2);
        expect(copied.x).toBe(1);
        expect(copied.y).toBe(2);
    });

    it("add() method", () => {
        const v = new Vector2(2, 3);
        const v2 = new Vector2(1, 3);

        const added = v.add(v2);

        expect(added).toBeInstanceOf(Vector2);
        expect(added.x).toBe(3);
        expect(added.y).toBe(6);
    });

    it("subtract() method", () => {
        const v = new Vector2(2, 3);
        const v2 = new Vector2(1, 3);

        const subtracted = v.subtract(v2);

        expect(subtracted).toBeInstanceOf(Vector2);
        expect(subtracted.x).toBe(1);
        expect(subtracted.y).toBe(0);
    });

    it("multiply() method", () => {
        const v = new Vector2(1, 2);
        const v2 = new Vector2(1, 1);

        const multiplied = v.multiply(v2);

        expect(multiplied).toBeInstanceOf(Vector2);
        expect(multiplied.x).toBe(1);
        expect(multiplied.y).toBe(2);
    });

    it("divide() method", () => {
        const v = new Vector2(1, 2);
        const v2 = new Vector2(1, 1);

        const divided = v.divide(v2);

        expect(divided).toBeInstanceOf(Vector2);
        expect(divided.x).toBe(1);
        expect(divided.y).toBe(2);
    });

    it("negate() method", () => {
        const v = new Vector2(2, 1);
        const negated = v.negate();

        expect(negated).toBeInstanceOf(Vector2);
        expect(negated.x).toBe(-2);
        expect(negated.y).toBe(-1);
    });

    it("zero() method", () => {
        const v = new Vector2(1, 2);
        const zero = v.zero();

        expect(zero).toBeInstanceOf(Vector2);
        expect(zero.x && zero.y).toBe(0);
    });
});