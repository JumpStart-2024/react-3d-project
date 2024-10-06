// ButtonComponent.js
import React from "react";
import { Button } from "antd";

export default function ButtonComponent ({ showModal, buttonName, display })  {
  return (
    <Button onClick={showModal} style={{ display: display }}>
      {buttonName}
    </Button>
  );
};