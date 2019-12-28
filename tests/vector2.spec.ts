import { default as Vector2 } from "../src/vector2";

describe("Vector2", () => {
    it("should initialize a new Vector2", () => {
        const v = new Vector2();

        expect(v.x).toBe(0);
        expect(v.y).toBe(0);
    });
});