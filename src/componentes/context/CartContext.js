import React, { useState } from 'react';
export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItem] = useState([]);

    return <CartContext.Provider value={[cartItems, setCartItem]}>
        {children}
    </CartContext.Provider>
}