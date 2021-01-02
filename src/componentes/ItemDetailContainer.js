import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import { Link } from 'react-router-dom';
import { Row, Container, Col, Button } from "react-bootstrap";

import ItemDetail from "./ItemDetail";

import EmptyCartImg from "./icons/img/EmptyCart.png";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos");
    const idItem = itemCollection.doc(id);

    idItem.get().then((response) => {
      const aux = response.data()
      if(aux === undefined) {
        setItem("Empty");
      } else {
        setItem(response.data());
      }
    });
  }, [id]);

    const ReturnItems = () => {
      if (item) {
        if (item === "Empty"){
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

    //Salida de ItemDetailContainer
    return (
      <div>
        <ReturnItems />
      </div>
    );
};

export default ItemDetailContainer;
