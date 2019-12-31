import Mesh from '../src/mesh';

describe('Mesh class', () => {
    it('should instantiate a new class', () => {
        const mesh = new Mesh('mesh', 6);

        expect(mesh.vertices).toHaveLength(6);
        expect(mesh.name).toBe('mesh');
    });
});