import React from "react";
import { Modal } from "antd";
import { Card, Row } from "antd";
import ReactFlipCard from "reactjs-flip-card";

const { Meta } = Card;

const CustomModal = ({
  title,
  body,
  isModalVisible,
  handleOk,
  handleCancel,
}) => {
  return (
    <>
      <Modal
        title={title}
        onConfirm={onclick}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        isModalVisible={isModalVisible}
        width={800}
        bodyStyle={{ height: "350px" }}
        mask={true}
        // zIndex={10000000}
        maskClosable={false}
        centered={true}

      >
        <div  style={{ width: '100%' }}>

          <Row justify="space-evenly" style={{ width: '100%', margin: 0 }} >
            {body.map((element, index) => {
              return (
                <div key={index} style={{ padding: '0 8px' }}>
                  <ReactFlipCard
                  flipTrigger="onClick"
                  frontComponent={
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img src={element.image} />}
                    >
                      <Meta title={element.title} />
                    </Card>
                  }
                  backComponent={
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      
                    >
                      <p style={{ width: '100%' , height:'100%'}}>
                        {element.description}
                      </p>
                    </Card>
                  }
                />

                </div>
                
              );
            })}
          </Row>

        </div>
        
      </Modal>
    </>
  );
};

export default CustomModal;
