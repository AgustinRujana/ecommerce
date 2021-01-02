import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Row, Container, Col} from 'react-bootstrap';

//Context
import { CartContext } from "./context/CartContext";
import { UserContext } from "./context/UserContext";

//Firebase
import { getFirestore } from "../firebase";
import firebase from "firebase/app";
import "firebase/firestore";

function CartDetail() {
  const [cartItems] = useContext(CartContext);
  const [user] = useContext(UserContext);

  const CloseTransaction = () => {

    // //Seteo de variables
    // const buyerData = {
    //   name: "Pepe Juarez",
    //   phone: "2804321102",
    //   email: "email@Yahoo.ong",
    // };

    let SumTotal = 0;
    cartItems.forEach((e) => {
      SumTotal = SumTotal + e.Quantity * e.Item.price;
    });

    const FinishOrder = {
      buyer: user,
      items: cartItems,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: SumTotal,
    };

    //Logica
    const db = getFirestore();
    db.collection("Ordenes").add(FinishOrder).then(({ id }) => {
      alert(id);
    });
  };

  if (cartItems.length === 0){
    return(
      <Container>
        <Row className='justify-content-md-center'>
          <Col md='auto'>
          <p>Todavia no tienes productos en tu carrito.</p>
          <img/>
          <Link className='FooterLink Link_Home' to={"/"}>Volver al Home</Link>
          </Col>
        </Row>
      </Container>
    )
  } else {

  }

  return (
    <div>
      {cartItems.length === 0 && (
        <div>
          No hay productos. <Link to={"/"}>Volver Al Home</Link>
        </div>
      )}
      {cartItems.map((order, index) => {
        return (
          <div key={index}>
            <p>{order.Item.title}</p>
            <p><b>${order.Item.price}</b></p>
            <p>{order.Quantity}</p>
            <button onClick={CloseTransaction}>Salir y Pagar</button>
          </div>
        )}
      )}
    </div>
  );
}

export default CartDetail;
