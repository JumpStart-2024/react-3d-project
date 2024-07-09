import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF, Bounds, useBounds, ContactShadows, useTexture } from '@react-three/drei';
import { Popconfirm } from 'antd';


function Model() {
  const { scene } = useGLTF('store/ThriftstoreGLB.glb'); // Make sure to use the correct path to your 3D model
  const modelTextures = useTexture({
    metalnessMap: "3d-react-app/public/textures/walls_Bake1_PBR_Metalness.png", 
    normalMap:"3d-react-app/public/textures/walls_Bake1_PBR_Normal.png",
    roughnessMap: "3d-react-app/public/textures/walls_Bake1_PBR_Roughness.png"
  });
  return (
    <primitive object={scene}>
      <mestStandardMaterial {...modelTextures} /> 
    </primitive>);
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

        <Html scale={0.5} position={[3, 0, 4]} transform occlude >
        <div className="annotation">
          <Popconfirm title="input content here" onConfirm={onClick} okText="Yes" cancelText="No">
            <a href="#">Pants</a>
          </Popconfirm>
          </div>
        </Html>

        <Html scale={0.5} position={[-2, 3, -2]} transform occlude >
        <div className="annotation">
          <Popconfirm title="input content here" onConfirm={onClick} okText="Yes" cancelText="No">
            <a href="#">Tops</a>
          </Popconfirm>
          </div>
        </Html>

        <Html scale={0.5} position={[3, 3, 4]} transform occlude >
          <div className="annotation">
          <Popconfirm title="input content here" onConfirm={onClick} okText="Yes" cancelText="No">
            <a href="#">Dresses</a>
          </Popconfirm>
          </div>
        </Html>

        <Html scale={0.5} position={[1, 0, 0]} transform occlude >
        <div className="annotation">
          <Popconfirm title="input content here" onConfirm={onClick} okText="Yes" cancelText="No">
            <a href="#">Shoes</a>
          </Popconfirm>
          </div>
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




