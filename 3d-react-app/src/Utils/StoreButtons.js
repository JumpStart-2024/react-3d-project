import React, { useState } from "react";
import {
  Html,
} from "@react-three/drei";

import CustomModal from "../Components/ModalComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { clothingItemsData } from "../Data/ClothingData";
import { Clothes } from "../Constants/Clothes";


export default function StoreButtons() {
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
    <>

      <Html scale={0.5} position={[10, 1, 5]} transform occlude>
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

      <Html scale={0.5} position={[5, 3, -2]} transform occlude>
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

      <Html scale={0.5} position={[10, 3, 4]} transform occlude>
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

      <Html scale={0.5} position={[8, 0, 0]} transform occlude>
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
    </>
  )
}
