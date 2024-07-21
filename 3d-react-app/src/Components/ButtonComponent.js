// ButtonComponent.js
import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ showModal, buttonName }) => {
  return (
    <Button onClick={showModal} >
     {buttonName}
    </Button>
  );
};

export default ButtonComponent;