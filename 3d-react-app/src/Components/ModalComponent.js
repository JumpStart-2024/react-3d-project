import React from 'react';
import { Modal } from 'antd';
import { Card, Row} from 'antd';

const { Meta } = Card;

const CustomModal = (
  { 
    title,
    body,
    isModalVisible, 
    handleOk, 
    handleCancel


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
        height={500}
        mask={true}
        
      >


        <Row justify='space-evenly'>

          { body.map(element => 
            {
              return (
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img src={element.image} />}
                  >
                  <Meta title={element.title}/>
                </Card>

              )
            })
          }
          
        </Row>
      </Modal>
    </> 
  );
};

export default CustomModal;


