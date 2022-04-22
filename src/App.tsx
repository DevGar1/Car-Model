import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./App.css";

function App() {
  const { scene } = useLoader(GLTFLoader, "/model/scene.gltf");
  return (
    <div className="App">
      <h1>Modelado de carrod</h1>
      <Canvas>
        <ambientLight />
        <primitive object={scene} />
        <Environment preset="night" background />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
