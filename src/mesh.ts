import Vector3 from './vector3';

export default class Mesh {
    public name: string;
    public position: Vector3;
    public rotation: Vector3;
    public vertices: Vector3[];

    constructor(name: string, verticesCount: number) {
        this.name = name;
        this.position = new Vector3();
        this.rotation = new Vector3();
        this.vertices = new Array(verticesCount);
    }
}
