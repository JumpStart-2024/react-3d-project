import { filePath } from "./Constants/filePath";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import StoreButtons from './Utils/StoreButtons';
import {
  OrbitControls,
  useGLTF,
  Bounds,
  ContactShadows,
} from "@react-three/drei";

export default function ThreeDModel() {
  const [currentModel, setCurrentModel] = useState(filePath.exterior);
  const [isLoading, setLoading] = useState(false); 
  const [showButtons, setShowButtons] = useState(false);

  const handleModelClick = () => {
    if (currentModel === filePath.exterior) {
      setLoading(true);
      setShowButtons(true);
      setCurrentModel(filePath.interior);
    } else {
      setCurrentModel(filePath.exterior);
    }
  };

  function Model({ modelPath, onLoad, onClick }) {
    const { scene } = useGLTF(modelPath); // Load the model using useGLTF
    setLoading(onLoad);
    return <primitive object={scene} onClick={onClick} />;
  }

  // Component to manage the camera position dynamically
  function CameraController({ currentModel }) {
    const { camera } = useThree();

    useEffect(() => {
      if (currentModel === filePath.exterior) {
        // Set camera position for the exterior model
        camera.position.set(-7.543824921630986, 27.201460173178525, 41.269495635381254);
      } else if (currentModel === filePath.interior) {
        // Set camera position for the interior model
        camera.position.set(-3.563440580530719, 3.065772026962534, 8.44748608182418);
      }
    }, [currentModel, camera]); // Run this effect whenever the current model changes

    return null; // This component does not render anything
  }

  // Component to log the camera position
  function CameraLogger() {
    useFrame((state) => {
      const { x, y, z } = state.camera.position;
      console.log(`Camera Position: x=${x}, y=${y}, z=${z}`);
    });
    return null; // This component does not render anything
  }

  return (
    <div style={{ overflow: "hidden", width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ background: 'linear-gradient(to top, #a4bcbc, #9cbcac)' }}
        camera={{ position: [1, 1, 1] }}
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
          <Model modelPath={currentModel} onClick={handleModelClick} onLoad={false} />
          
          {showButtons && (
            <StoreButtons />
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
          enableZoom={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
          maxDistance={50} // Increased the max distance for more flexibility
        />

        {/* CameraController component to update the camera based on the current model */}
        <CameraController currentModel={currentModel} />

        {/* CameraLogger component added to log the camera position */}
        <CameraLogger />
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
