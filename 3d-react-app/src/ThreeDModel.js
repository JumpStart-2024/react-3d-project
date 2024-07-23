import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/store/ThriftStore.glb'); // Ensure the path is correct
  scene.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed
  scene.position.set(0, 0, 0); // Center the model
  return <primitive object={scene} />;
}

const ThreeDModel = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1.5} />
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={75} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ThreeDModel;
