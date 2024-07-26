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
        zIndex={10000000}
        maskClosable={false}
      >
        <Row justify="space-evenly">
          {body.map((element) => {
            return (
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
                    cover={<img src={element.image} />}
                  >
                    <Meta title="TEST" />
                  </Card>
                }
              />
            );
          })}
        </Row>
      </Modal>
    </>
  );
};

export default CustomModal;
