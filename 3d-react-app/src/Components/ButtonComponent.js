// ButtonComponent.js
import React from "react";
import { Button } from "antd";

const ButtonComponent = ({ showModal, buttonName, display }) => {
  return (
    <Button onClick={showModal} style={{ display: display }}>
      {buttonName}
    </Button>
  );
};

export default ButtonComponent;
