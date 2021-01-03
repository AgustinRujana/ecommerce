import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

//Context
import { CartContext } from "./context/CartContext";

//Components
import ItemCount from "./subcomponents/ItemCount";
import ItemImage from "./subcomponents/ItemImage";

const ItemDetail = ( {item} ) => {
  const [cartItems, setCartItem] = useContext(CartContext);

  //Cart logic and operations
  const onAdd = (amount) => {
    const sameId = cartItems.some((e) => e.Item.id === item.id);
    const newOrder = { Quantity: amount, Item: item };

    //Checks if item about to be add is already on the cart
    if (sameId) {
      cartItems.forEach((ele) => {
        //If so update the array
        if (ele.Item.id === item.id) {
          const newCartItems = cartItems.filter((e) => e.Item.id !== item.id);
          setCartItem([...newCartItems, newOrder]);
        }
      });
    } else {
      //If not push the order in the existing array
      setCartItem([...cartItems, newOrder]);
    }
  };
  
  //Selecting the unit type of the product
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

  //Render the component
  return <>
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
          <Link className='FooterLink mr-5' to={`/categories/${item.categoryId}`}>Volver a {item.categoryId}.</Link>
          <Link className='FooterLink' to={`/categories/todos`}>Volver a todos.</Link>
        </Col>
      </Row>
    </Container>
  </>
};
export default ItemDetail;
