import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import CartIco from './Carrito.png';

const CartIcon = () => {
  const [cartItems] = useContext(CartContext);
  const getQuantity = () => {
    let result=0
    cartItems.forEach(e => {
      result = result + e.Quantity      
    });
    return result
  };

    return (
      <>
      <img className="ml-auto mr-5" height="75px" src={CartIco} alt="Carrito" />
      {getQuantity()}
      </>
    )
  }
export default CartIcon;