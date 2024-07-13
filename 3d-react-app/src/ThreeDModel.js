import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF, Bounds, useBounds, ContactShadows, useTexture } from '@react-three/drei';
import { Popconfirm } from 'antd';
import Modal from "react-bootstrap/Modal";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';


function Model() {
  const { scene } = useGLTF('store/ThriftstoreGLB.glb'); // Make sure to use the correct path to your 3D model
  const modelTextures = useTexture({
    extraBake1DiffuseMap: "./store/textures/extra_Bake1_PBR_Diffuse.png", 
    extraBake1MetalnessMap: "./store/textures/extra_Bake1_PBR_Metalness.png", 
    extraBake1NormalMap: "./store/textures/extra_Bake1_PBR_Normal.png", 
    extraBake1RoughnessMap: "./store/textures/walls_Bake1_PBR_Roughness.png", 
    extraBake1SpecularMap: "./store/textures/extra_Bake1_PBR_Specular.png"
  });
  return (
    <primitive object={scene}>
      <meshStandardMaterial {...modelTextures} /> 
    </primitive>);
    
}

//i disabled orbit controls so zooming on model works
const ThreeDModel = ({onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [show2, setShow2] = useState(false);

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
          
          <button onClick={showModal}>Pants</button>
        <Modal show={isOpen} onHide={hideModal} dialogClassName="myModal" >
          <Modal.Header closeButton>
            <Modal.Title class="modal-title w-100 text-center">Pants</Modal.Title>
          </Modal.Header>
          <Modal.Body className="grid-example">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
            <img src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg" className="d-block mx-auto img-fluid w-50"/>
              <button variant="primary" onClick={() => setShow2(true)}>
                Item 1
              </button>
              <Modal show={show2} onHide={() => setShow2(false)}>
                <Modal.Header closeButton />
                <img src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg" className="d-block mx-auto img-fluid w-50"/>
                <Modal.Title class="text-center">TITLE</Modal.Title>
                <Modal.Body class="text-center">
                  lorem ipsum
                </Modal.Body>
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
            <img src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg" className="d-block mx-auto img-fluid w-50"/>
              item 2
            </Col>
            <Col xs={6} md={4}>
            <img src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg" className="d-block mx-auto img-fluid w-50"/>
              item 3
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
            <img src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg" className="d-block mx-auto img-fluid w-50"/>
              item 4
            </Col>
            <Col xs={6} md={4}>
            <img src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg" className="d-block mx-auto img-fluid w-50"/>
              item 5
            </Col>
            <Col xs={6} md={4}>
            <img src="https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg" className="d-block mx-auto img-fluid w-50"/>
              item 6
            </Col>
          </Row>
        </Container>
      </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
          </Modal.Footer>
        </Modal>

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




