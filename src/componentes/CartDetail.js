import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col, Button } from "react-bootstrap";

//Context
import { CartContext } from "./context/CartContext";
import { UserContext } from "./context/UserContext";

//Firebase
import { getFirestore } from "../firebase";
import firebase from "firebase/app";
import "firebase/firestore";

//Images
import EmptyCartImg from "./icons/img/EmptyCart.png";
import BottomBanner from "./icons/img/BottomBanner.jpg";

function CartDetail() {
  const [cartItems] = useContext(CartContext);
  const [user] = useContext(UserContext);

  //Checks for items on cart
  if (cartItems.length === 0) {

    //If cart is empty renders:
    return <>
      <Container className="my-3">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p className="Link_Home"> Todavia no tienes productos en tu carrito.</p>
            <img src={EmptyCartImg} className="" alt="Imagen Carrito Vacio" />
            <Link className="Link_Home" to={"/"}> Volver al Home </Link>
          </Col>
        </Row>
      </Container>
    </>
  } else {
    
    //If items are detected, trigger this:
    let SumTotal = 0;
    cartItems.forEach((e) => { SumTotal = SumTotal + e.Quantity * e.Item.price; });

    //Then checks if the user is already register
    const UserCheckBtn = () => {
      if (user.length !== 0){
        //If registered
        return <Button className="my-1" variant="warning" onClick={CloseTransaction}> Salir y Pagar</Button>
      } else {
        //If not send to /user
        return <Link to={`/user`}><Button className="my-1" variant="warning">Cargar Usuario</Button></Link>
      }
    }

    //Saving the order on Firebase
    const CloseTransaction = () => {
              
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
        
        //Alert the Order id
        const db = getFirestore();
        db.collection("Ordenes")
        .add(FinishOrder)
        .then(({ id }) => {
          alert(id);
        });
    };
      
    //Rendering the Rows for the table
    const CartDetailRows = () => {
      const list = cartItems.map((order) => {
        return (
          <Row className="Row_CartItemDetail">
            <Col md="8">
              <p>
                {order.Item.title} <b>${order.Item.price}</b> x {order.Quantity}
              </p>
            </Col>
            <Col md="1">
              <p>${order.Quantity * order.Item.price}</p>
            </Col>
          </Row>
        );
      });
      return list;
    };

    //Renders the Component
    return <>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Row className="Row_CartItemDetail-Heading pt-2">
              <Col md="8">
                <p><b>Detalle del Carrito</b></p>
              </Col>
              <Col md="1">
                <p><b>Subtotal</b></p>
              </Col>
            </Row>
            <CartDetailRows />
          </Col>
          <Col md="3" className="Row_CartDetail-Side"></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="6">
            <Row className="Row_CartItemDetail-Foot Row_CartItemDetail-Foot-Tot py-1">
              <Col md="8">
                <p><b>Total</b></p>
              </Col>
              <Col md="1">
                <p>${SumTotal}</p>
              </Col>
            </Row>
          </Col>
          <Col md="3" className="Row_CartItemDetail-Foot Row_CartItemDetail-Foot-Btn">
            <UserCheckBtn/>
          </Col>
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
  }
}

export default CartDetail;
