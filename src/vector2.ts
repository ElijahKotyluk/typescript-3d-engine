/**
 * 2D Vector
 * @param x {Number}
 * @param y {Number}
 */
export default class Vector2 {
    x: number;
    y: number;

    constructor(x:number, y: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    public toString(): string {
        return `x: ${this.x}, y: ${this.y}`;
    }

    public length(): number {
        return this.x + this.y;
    }

    public lengthSquared(): number {
        return (this.x * this.x) + (this.y * this.y);
    }

    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }
}
