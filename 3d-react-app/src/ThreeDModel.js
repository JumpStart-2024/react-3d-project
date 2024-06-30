import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('store/ThriftstoreGLB.glb'); // Make sure to use the correct path to your 3D model
  return <primitive object={scene} />;
}

const ThreeDModel = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1.5} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ThreeDModel;




