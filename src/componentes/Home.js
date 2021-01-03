import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { getFirestore } from "../firebase";

//Components
import ItemDetailBox from './ItemDetailBox';

//Images
import BottomBanner from "./icons/img/BottomBanner.jpg";
import Img_1 from './icons/img/Carrousel_1.jpg';
import Img_2 from './icons/img/Carrousel_2.jpg';
import Img_3 from './icons/img/Carrousel_3.jpg';

const Home = () => {
  const [items, setItems] = useState();

  //Select and render the items with higher stock to show in Home.js (Cause I want to sell those products)
  useEffect(() => {
    const db = getFirestore();
    const ItemCollection = db.collection('Productos');

    ItemCollection.orderBy('stock', 'desc').limit(4).get().then((response) =>{
      const aux = response.docs.map((e) => {
        return {...e.data(), id:e.id};
      });
      setItems(aux);
    });
  }, [])

  //Render the items saved on state
  const ReturnItems = () => {
    if (!items) {
      return <p className="text-center">Cargando...</p>;
    }
    const list = items.map((e) => {
      return (
          <ItemDetailBox item={e}/>    
      );
    });
    return list;
  };

  //Renders the Component
  return <>
    <Container fluid >
      <Row className="justify-content-md-center my-3">
        <Col md='auto'>
        <Carousel>
          <Carousel.Item>
            <img className="d-block img-fluid" src={Img_3} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid" src={Img_2} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid" src={Img_1} alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
        </Col>
      </Row>
    </Container>
    <Container className="ContainerItems_Home Row-SocialMediaIcons py-3">
      <Row className="justify-content-center">
        <h1 className='Recomendaciones'>Nuestras recomendaciones de la semana.</h1>
      </Row>
      <Row className="justify-content-center">
        <ReturnItems/>
      </Row>
    </Container>
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="auto">
          <img className="img-fluid my-3" src={BottomBanner} alt="Bottom Banner"/>
        </Col>
      </Row>
    </Container>
  </>
};
export default Home;
