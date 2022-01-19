import vertexShader from "./../shaders/vertex.glsl";
import fragmentShader from "./../shaders/fragment.glsl";
import { Mesh, ShaderMaterial, Vector2, PlaneBufferGeometry } from "three";

const debugObject = {
  progress: 0.0,
};
function createPlane() {
  const geometry = new PlaneBufferGeometry(350, 350);
  const material = new ShaderMaterial({
    uniforms: {
      uTime: { value: 1.0 },
      uProgress: { value: 1.0 },
      uResolution: { value: new Vector2() },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });
  const plane = new Mesh(geometry, material);

  plane.tick = (delta) => {
    material.uniforms.uTime.value += delta;
    material.uniforms.uProgress.value = debugObject.progress;
  };

  plane.debug = (gui) => {
    gui.add(debugObject, "progress", 0, 1, 0.001);
  };
  return plane;
}

export { createPlane };
