import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import { Link } from 'react-router-dom';
import { Row, Container, Col } from "react-bootstrap";

//Components
import ItemDetail from "./ItemDetail";

//Images
import EmptyCartImg from "./icons/img/EmptyCart.png";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  //Retrieve "Productos" data from firebase
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos");
    const idItem = itemCollection.doc(id);

    idItem.get().then((response) => {
      const aux = response.data()

      //Checks if the Item is on Firebase
      if(aux === undefined) {
        //If not
        setItem("Empty");
      } else {
        //If detected
        setItem(response.data());
      }
    });
  }, [id]);

  const ReturnItems = () => {
    if (item) {
      if (item === "Empty"){
        //If there is no item matching on Firebase this will render
        return <>
        <Container className="my-3">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h5>Lo sentimos, no encontramos el producto que buscaste.</h5>
              <img src={EmptyCartImg} className="" alt="Imagen Carrito Vacio" />
              <Link className="Link_Home" to={"/"}>
                Volver al Home
              </Link>
            </Col>
          </Row>
        </Container>
      </>
      }
      //If the item we have exist
      return <ItemDetail item={item} />;
      }
    
    return <>
      <Container className="my-3">
        <Row className="justify-content-md-center">
          <Col md="auto">
          <p>Cargando...</p>
          </Col>
        </Row>
      </Container>
    </> 
  };

  //Render component
  return <div>
    <ReturnItems />
  </div>
};

export default ItemDetailContainer;
