import React, { useContext } from "react";
import ItemCount from "../componentes/subcomponents/ItemCount";
import { CartContext } from ".././componentes/context/CartContext";

const ItemDetail = ({ item }) => {
  const [cartItems, setCartItem] = useContext(CartContext)
  
  const onAdd = (amount) => {
    const sameId = cartItems.some((e) => e.Item.id === item.id);
    const newOrder = { Quantity: amount, Item: item };

    if(sameId){
      cartItems.forEach(ele => {
        if (ele.Item.id === item.id){
          const newCartItems = cartItems.filter((e) => e.Item.id !== item.id)
          setCartItem([... newCartItems, newOrder])
        }
      });
    } else {
      setCartItem([...cartItems, newOrder]);
    }
  };

  return (
    <div className="mt-5 row justify-content-center">
      <div>
        <p>{item.title}</p>
        <p>{item.size}</p>
        <p>
          <b>${item.price}</b>
        </p>
      </div>
      <ItemCount initial="1" min="1" max={item.stock} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
