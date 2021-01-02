import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

//Context
import { CartContext } from ".././componentes/context/CartContext";

//Components
import ItemCount from "../componentes/subcomponents/ItemCount";
import ItemImage from "../componentes/subcomponents/ItemImage";

const ItemDetail = ({ item }) => {
  const [cartItems, setCartItem] = useContext(CartContext);

  //Cart logic and operations
  const onAdd = (amount) => {
    const sameId = cartItems.some((e) => e.Item.id === item.id);
    const newOrder = { Quantity: amount, Item: item };

    if (sameId) {
      cartItems.forEach((ele) => {
        if (ele.Item.id === item.id) {
          const newCartItems = cartItems.filter((e) => e.Item.id !== item.id);
          setCartItem([...newCartItems, newOrder]);
        }
      });
    } else {
      setCartItem([...cartItems, newOrder]);
    }
  };

  const unitType = (itemCategory) => {
    switch(itemCategory){
        case 'aceites':
            return '100ml';
        case 'semillas':
            return '100gr';
        default:
            return 'Unidad';  
    }
}

  //Render de Item Detail
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md='1' xs='0' lg='1' className='Row_ItemDetail-Side'></Col>
        <Col xs lg="2" className='Row_ItemDetail' >
          <ItemImage item={item} />
        </Col>
        <Col md="auto" className='Row_ItemDetail Row_ItemDetail-R'>
          <p className='mt-3'>{item.title} <b>${item.price} x {unitType(item.categoryId)} </b></p>
          <ItemCount itemCategory={item.categoryId} initial="1" max={item.stock} onAdd={onAdd}/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md='auto' className='mt-2'>
          <Link className='FooterLink' to={`/categories/${item.categoryId}`}>Volver a {item.categoryId}.</Link>
        </Col>
      </Row>
    </Container>

    // <Container fluid="lg">
    //   <Row>
    //     <Col xs='3' >
    //       <ItemImage item={item}/>
    //     </Col>
    //     <Col xs='9'>
    //       <ItemCount itemCategory={item.categoryId} initial="1" max={item.stock} onAdd={onAdd} />
    //     </Col>
    //   </Row>
    // </Container>
    // <div className="mt-5 row justify-content-center">
    //   <div>
    //     <p>{item.title}</p>
    //     <p>{item.size}</p>
    //     <p>
    //       <b>${item.price}</b>
    //     </p>
    //     <ItemImage item={item}/>
    //   </div>
    //   <ItemCount itemCategory={item.categoryId} initial="1" max={item.stock} onAdd={onAdd} />
    // </div>
  );
};
export default ItemDetail;
