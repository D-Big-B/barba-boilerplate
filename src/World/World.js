import { createCamera } from "./components/camera.js";
import { createPlane } from "./components/plane.js";
import { createScene } from "./components/scene.js";
import { createDebugger } from "./components/debugger";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls.js";

let camera;
let renderer;
let scene;
let loop;

const debugObject = {
  progress: 0,
};
class World {
  constructor(container) {
    const debugGui = createDebugger();
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();

    loop = new Loop(camera, scene, renderer);
    const controls = createControls(camera, renderer.domElement);
    container.append(renderer.domElement);

    const plane = createPlane();

    plane.debug(debugGui);

    loop.updatables.push(plane);

    scene.add(plane);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  debug() {}
}

export { World };
