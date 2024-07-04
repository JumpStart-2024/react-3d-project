import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF, Preload } from '@react-three/drei';
import { Popconfirm } from 'antd'
import * as THREE from 'three'


function Model() {
  const { scene } = useGLTF('store/ThriftstoreGLB.glb'); // Make sure to use the correct path to your 3D model
  return <primitive object={scene} />;
}

const ThreeDModel = ({onClick }) => {
  return (
    <Canvas camera={{ position: [-3, 5, 10] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1.5} />
        <Model />
        <Html scale={2} position={[-3, 5, 7]} transform occlude>
          <Popconfirm title="Welcome to our shop! click around to explore details :)" onConfirm={onClick} okText="Yes" cancelText="No">
            <a href="#">Click me to learn more!</a>
          </Popconfirm>
        </Html>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ThreeDModel;




