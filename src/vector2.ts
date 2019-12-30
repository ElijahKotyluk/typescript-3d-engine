/**
 * 2D Vector
 * @param x {Number}
 * @param y {Number}
 */
export default class Vector2 {
    x: number;
    y: number;

    constructor(x?:number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    };

    public toString(): string {
        return `x: ${this.x}, y: ${this.y}`;
    };

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    public lengthSquared(): number {
        return (this.x * this.x) + (this.y * this.y);
    };

    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    };

    public copy(vector: Vector2): Vector2 {
        this.x = vector.x;
        this.y = vector.y;

        return this;
    };

    public add(vector: Vector2): Vector2 {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    };

    public subtract(vector: Vector2): Vector2 {
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    };

    public multiply(vector: Vector2): Vector2 {
        this.x *= vector.x;
        this.y *= vector.y;

        return this;
    };

    public divide(vector: Vector2): Vector2 {
        this.x /= vector.x;
        this.y /= vector.y;

        return this;
    };

    public negate(): Vector2 {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    };

    public zero(): Vector2 {
        this.x = 0;
        this.y = 0;

        return this;
    };
};
