import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(70, 1, 10, 1000);

  camera.position.set(0, 0, 600);

  return camera;
}

export { createCamera };
