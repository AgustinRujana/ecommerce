import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext.js';

//Images
import CartIco from './img/CartIcon-Bag_White.svg';

const CartIcon = () => {
  const [cartItems] = useContext(CartContext);

  //Calculate how many items are in the cart
  const getQuantity = () => {
    let result=0
    cartItems.forEach(e => {
      result = result + e.Quantity      
    });
    return result
  };

  return <div>
    <img className="ml-auto mr-5" height="75px" src={CartIco} alt="Carrito" />
    <div className="CartIndicator">{getQuantity()}</div>
  </div>
}

export default CartIcon;