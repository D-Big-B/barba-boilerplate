import { BoxBufferGeometry, MathUtils, Mesh, MeshNormalMaterial } from "three";

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += delta * radiansPerSecond;
    cube.rotation.x += delta * radiansPerSecond;
    cube.rotation.y += delta * radiansPerSecond;
  };

  return cube;
}

export { createCube };
