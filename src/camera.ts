import Vector3 from "./vector3";

export default class Camera {
    public position: Vector3;
    public target: Vector3;
    
    constructor() {
        this.position = new Vector3().zero();
        this.target = new Vector3().zero();
    }
}
