import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  useGLTF,
  Bounds,
  useBounds,
  ContactShadows,
  useTexture,
} from "@react-three/drei";
import ButtonComponent from "./Components/ButtonComponent";
import CustomModal from "./Components/ModalComponent";
import { clothingItemsData } from "./Data/ClothingData";
import { Clothes } from "./Constants/Clothes";

function Model() {
  const { scene } = useGLTF("store/ThriftstoreGLB.glb"); // Make sure to use the correct path to your 3D model
  const modelTextures = useTexture({
    extraBake1DiffuseMap: "./store/textures/extra_Bake1_PBR_Diffuse.png",
    extraBake1MetalnessMap: "./store/textures/extra_Bake1_PBR_Metalness.png",
    extraBake1NormalMap: "./store/textures/extra_Bake1_PBR_Normal.png",
    extraBake1RoughnessMap: "./store/textures/walls_Bake1_PBR_Roughness.png",
    extraBake1SpecularMap: "./store/textures/extra_Bake1_PBR_Specular.png",
  });
  return (
    <primitive object={scene}>
      <meshStandardMaterial {...modelTextures} />
    </primitive>
  );
}

//i disabled orbit controls so zooming on model works
const ThreeDModel = ({ onClick }) => {
  const [isPantsModalVisible, setPantsModalVisible] = useState(false);
  const [isDressesModalVisible, setDressesModalVisible] = useState(false);
  const [isJacketsModalVisible, setJacketsModalVisible] = useState(false);
  const [isShoesModalVisible, setShoesModalVisible] = useState(false);
  const showModal = (setVisibility) => {
    setVisibility(true);
  };

  const handleOk = (setVisibility) => {
    setVisibility(false);
  };

  const handleCancel = (setVisibility) => {
    setVisibility(false);
  };

  const isButtonDisplay = () => {
    const test = isDressesModalVisible
      ? "none"
      : isPantsModalVisible
      ? "none"
      : isJacketsModalVisible
      ? "none"
      : isShoesModalVisible
      ? "none"
      : "inline";
    return test;
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Canvas camera={{ position: [-3, 5, 10], fov: 50 }} dpr={[1, 2]}>
        <spotLight
          position={[-100, -100, -100]}
          intensity={0.2}
          angle={0.3}
          penumbra={1}
        />
        <hemisphereLight color="white" position={[0, 0, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
              <Model />
            </SelectToZoom>
          </Bounds>
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.2}
            width={200}
            height={200}
            blur={1}
            far={50}
          />

          <Html scale={0.5} position={[3, 0, 4]} transform occlude>
            <ButtonComponent
              showModal={() => showModal(setPantsModalVisible)}
              buttonName={Clothes.Pants}
              display={isButtonDisplay()}
            />
            <CustomModal
              title={Clothes.Pants}
              isModalVisible={isPantsModalVisible}
              body={clothingItemsData.Pants}
              handleOk={() => handleOk(setPantsModalVisible)}
              handleCancel={() => handleCancel(setPantsModalVisible)}
            />
          </Html>

          <Html scale={0.5} position={[-2, 3, -2]} transform occlude>
            <ButtonComponent
              showModal={() => showModal(setJacketsModalVisible)}
              buttonName={Clothes.Jackets}
              display={isButtonDisplay()}
            />
            <CustomModal
              title={Clothes.Jackets}
              isModalVisible={isJacketsModalVisible}
              body={clothingItemsData.Jackets}
              handleOk={() => handleOk(setJacketsModalVisible)}
              handleCancel={() => handleCancel(setJacketsModalVisible)}
            />
          </Html>

          <Html scale={0.5} position={[3, 3, 4]} transform occlude>
            <ButtonComponent
              showModal={() => showModal(setDressesModalVisible)}
              buttonName={Clothes.Dresses}
              display={isButtonDisplay()}
            />
            <CustomModal
              title={Clothes.Dresses}
              isModalVisible={isDressesModalVisible}
              body={clothingItemsData.Dresses}
              handleOk={() => handleOk(setDressesModalVisible)}
              handleCancel={() => handleCancel(setDressesModalVisible)}
            />
          </Html>

          <Html scale={0.5} position={[1, 0, 0]} transform occlude>
            <ButtonComponent
              showModal={() => showModal(setShoesModalVisible)}
              buttonName={Clothes.Shoes}
              display={isButtonDisplay()}
            />
            <CustomModal
              title={Clothes.Shoes}
              isModalVisible={isShoesModalVisible}
              body={clothingItemsData.Shoes}
              handleOk={() => handleOk(setShoesModalVisible)}
              handleCancel={() => handleCancel(setShoesModalVisible)}
            />
          </Html>
        </Suspense>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};

function SelectToZoom({ children }) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  );
}

export default ThreeDModel;
