import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

//import { AmbientLight } from "three";
import { Ground } from "./components/Ground";

function App() {
  return (
    <>
      {/* <div>Outside Canvas</div> */}
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
