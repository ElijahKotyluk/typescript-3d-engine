/**
 * 3D Vector
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 */
export default class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x?: number, y?: number, z?: number) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  public toString(): string {
    return `x: ${this.x}, y: ${this.y}, z: ${this.z}`;
  }

  public length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  public lengthSquared(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  public clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  public copy(vector: Vector3): Vector3 {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;

    return this;
  }

  public add(vector: Vector3): Vector3 {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;

    return this;
  }

  public subtract(vector: Vector3): Vector3 {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;

    return this;
  }

  public multiply(vector: Vector3): Vector3 {
    this.x *= vector.x;
    this.y *= vector.y;
    this.z *= vector.z;

    return this;
  }

  public divide(vector: Vector3): Vector3 {
    this.x /= vector.x;
    this.y /= vector.y;
    this.z /= vector.z;

    return this;
  }

  public negate(): Vector3 {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;

    return this;
  }

  public zero(): Vector3 {
    this.x = 0;
    this.y = 0;
    this.z = 0;

    return this;
  }
}
