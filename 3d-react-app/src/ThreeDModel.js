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
    <Canvas camera={{ position: [-3, 5, 10], fov: 50 }} dpr={[1, 2]}>
      <spotLight position={[-100, -100, -100]} intensity={0.2} angle={0.3} penumbra={1} />
      <hemisphereLight color="white" position={[0, 0, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <SelectToZoom>
            <Model />
          </SelectToZoom>
        </Bounds>
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -35, 0]} opacity={0.2} width={200} height={200} blur={1} far={50} />
        <Html scale={0.5} position={[0, 0, 5]} transform occlude>
          <Popconfirm title="Welcome to our shop! click around to explore details :)" onConfirm={onClick} okText="Yes" cancelText="No">
            <a href="#">Click me to learn more!</a>
          </Popconfirm>
        </Html>
      </Suspense>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} maxDistance={15} />
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




