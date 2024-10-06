import { filePath } from "./Constants/filePath";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import StoreButtons from './Utils/StoreButtons';
import {
  OrbitControls,
  useGLTF,
  Bounds,
  ContactShadows,
} from "@react-three/drei";



export default function ThreeDModel () {
  const [currentModel, setCurrentModel] = useState(filePath.exterior);
  const [isLoading, setLoading] = useState(false); 
  const [showButtons, setShowButtons] = useState(false); 

  const handleModelClick = () => {
    if (currentModel === filePath.exterior) {
      setLoading(true); 
      setShowButtons(true);
      setCurrentModel(filePath.interior);
    }
  };

  function Model({ modelPath, onLoad, onClick }) {
    
    const { scene } = useGLTF(modelPath); // Load the model using useGLTF
    setLoading(onLoad)
    return <primitive object={scene} onClick={onClick} />;
  }

  return (
    <div style={{ overflow: "hidden", width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ background: 'linear-gradient(to top, #a4bcbc, #9cbcac)' }}
        camera={{ position: [5, 17, 10], fov: 50}}
        dpr={[1, 2]}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={6}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Model modelPath={currentModel} onClick={handleModelClick} onLoad={false}/>
          </Bounds>
          
          {showButtons&& (
            <StoreButtons/>
          )}
          

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.9}
            width={200}
            height={200}
            blur={1}
            far={50}
          />
        </Suspense>

        <OrbitControls
          makeDefault
          enableZoom={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
          maxDistance={15}
        />
      </Canvas>

      {isLoading && (
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 1 // Ensure it appears above the canvas
        }}>
          Loading Model...
        </div>
      )}
    </div>
  );
};