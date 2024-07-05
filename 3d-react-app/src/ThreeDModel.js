import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF, Bounds, useBounds, ContactShadows } from '@react-three/drei';
import { Popconfirm } from 'antd';


function Model() {
  const { scene } = useGLTF('store/ThriftstoreGLB.glb'); // Make sure to use the correct path to your 3D model
  return <primitive object={scene} />;
}

//i disabled orbit controls so zooming on model works
const ThreeDModel = ({onClick }) => {
  return (
    <Canvas camera={{ position: [-3, 5, 10] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1.5} />
        <Bounds fit clip observe margin={1.2}>
          <SelectToZoom>
            <Model />
          </SelectToZoom>
        </Bounds>
        <Html scale={0.5} position={[-3, 5, 7]} transform occlude>
          <Popconfirm title="Welcome to our shop! click around to explore details :)" onConfirm={onClick} okText="Yes" cancelText="No">
            <a href="#">Click me to learn more!</a>
          </Popconfirm>
        </Html>
      </Suspense>
    </Canvas>
  );
};

function SelectToZoom({ children }) {
  const api = useBounds()
  return (
    <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
      {children}
    </group>
  )
}

export default ThreeDModel;




