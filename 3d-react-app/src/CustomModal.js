import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";

const CustomModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);

  <div className="annotation">
    <button
      style={{
        backgroundColor: "#FFFFFF",
        color: "#0000FF",
        border: 0,
      }}
      onClick={showModal}
    >
      Pants
    </button>
    <Modal show={isOpen} onHide={hideModal} dialogClassName="myModal">
      <Modal.Header closeButton>
        <Modal.Title class="modal-title w-100 text-center">Pants</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-grid gap-3" class="text-center">
        <Container>
          <Row className="justify-content-md-center p-2 border">
            <Col xs={6} md={4}>
              <img
                src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                className="d-block mx-auto img-fluid w-50"
              />
              <button variant="primary" onClick={() => setShow2(true)}>
                Item 1
              </button>
              <Modal show={show2} onHide={() => setShow2(false)}>
                <Modal.Header closeButton />
                <img
                  src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                  className="d-block mx-auto img-fluid w-50"
                />
                <Modal.Title class="text-center">TITLE</Modal.Title>
                <Modal.Body class="text-center">lorem ipsum</Modal.Body>
                <Modal.Footer>
                  <button variant="danger" onClick={() => setShow2(false)}>
                    Back
                  </button>
                  <button variant="danger" onClick={() => setShow2(false)}>
                    Learn More
                  </button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col xs={6} md={4}>
              <img
                src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                className="d-block mx-auto img-fluid w-50"
              />
              <button variant="primary" onClick={() => setShow3(true)}>
                Item 2
              </button>
              <Modal show={show3} onHide={() => setShow3(false)}>
                <Modal.Header closeButton />
                <img
                  src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                  className="d-block mx-auto img-fluid w-50"
                />
                <Modal.Title class="text-center">TITLE 2</Modal.Title>
                <Modal.Body class="text-center">lorem ipsum</Modal.Body>
                <Modal.Footer>
                  <button variant="danger" onClick={() => setShow3(false)}>
                    Back
                  </button>
                  <button variant="danger" onClick={() => setShow3(false)}>
                    Learn More
                  </button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col xs={6} md={4}>
              <img
                src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                className="d-block mx-auto img-fluid w-50"
              />
              <button variant="primary" onClick={() => setShow4(true)}>
                Item 3
              </button>
              <Modal show={show4} onHide={() => setShow4(false)}>
                <Modal.Header closeButton />
                <img
                  src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                  className="d-block mx-auto img-fluid w-50"
                />
                <Modal.Title class="text-center">TITLE 3</Modal.Title>
                <Modal.Body class="text-center">lorem ipsum</Modal.Body>
                <Modal.Footer>
                  <button variant="danger" onClick={() => setShow4(false)}>
                    Back
                  </button>
                  <button variant="danger" onClick={() => setShow4(false)}>
                    Learn More
                  </button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>

          <Row className="justify-content-md-center ">
            <Col xs={6} md={4}>
              <img
                src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                className="d-block mx-auto img-fluid w-50"
              />
              <button variant="primary" onClick={() => setShow5(true)}>
                Item 4
              </button>
              <Modal show={show5} onHide={() => setShow5(false)}>
                <Modal.Header closeButton />
                <img
                  src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                  className="d-block mx-auto img-fluid w-50"
                />
                <Modal.Title class="text-center">TITLE 4</Modal.Title>
                <Modal.Body class="text-center">lorem ipsum</Modal.Body>
                <Modal.Footer>
                  <button variant="danger" onClick={() => setShow5(false)}>
                    Back
                  </button>
                  <button variant="danger" onClick={() => setShow5(false)}>
                    Learn More
                  </button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col xs={6} md={4}>
              <img
                src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                className="d-block mx-auto img-fluid w-50"
              />
              <button variant="primary" onClick={() => setShow6(true)}>
                Item 5
              </button>
              <Modal show={show6} onHide={() => setShow6(false)}>
                <Modal.Header closeButton />
                <img
                  src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                  className="d-block mx-auto img-fluid w-50"
                />
                <Modal.Title class="text-center">TITLE 5</Modal.Title>
                <Modal.Body class="text-center">lorem ipsum</Modal.Body>
                <Modal.Footer>
                  <button variant="danger" onClick={() => setShow6(false)}>
                    Back
                  </button>
                  <button variant="danger" onClick={() => setShow6(false)}>
                    Learn More
                  </button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col xs={6} md={4}>
              <img
                src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                className="d-block mx-auto img-fluid w-50"
              />
              <button variant="primary" onClick={() => setShow7(true)}>
                Item 6
              </button>
              <Modal show={show7} onHide={() => setShow7(false)}>
                <Modal.Header closeButton />
                <img
                  src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg"
                  className="d-block mx-auto img-fluid w-50"
                />
                <Modal.Title class="text-center">TITLE 6</Modal.Title>
                <Modal.Body class="text-center">lorem ipsum</Modal.Body>
                <Modal.Footer>
                  <button variant="danger" onClick={() => setShow7(false)}>
                    Back
                  </button>
                  <button variant="danger" onClick={() => setShow7(false)}>
                    Learn More
                  </button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  </div>;
};

export default CustomModal;
