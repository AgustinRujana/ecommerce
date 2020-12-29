import React, {useState} from 'react';
// import { CartContext } from '../context/CartContext';

const ItemCount = ({initial, min, max, onAdd}) =>{
    const [count, setCount] = useState(parseInt(initial))
    // const Buy = () => {
    //     //Algo pa comprar//
    // }
    const decrement = () => {
        if (count !== min){
            setCount(count - 1);
        }      
        
    } 
    const increment = () => {
        if (count !== max){
            setCount(count + 1);
        }     
    } 
 
    return(
    <div className="row justify-content-center">
        <h1>{count}</h1><br/>
        <button type="button" className="btn btn-dark mx-1" onClick={decrement}>-</button>
        <button type="button" className="btn btn-dark mx-1" onClick={increment}>+</button>
        <button type="button" className="btn btn-dark mx-1" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        {/* <button type="button" className="btn btn-dark mx-1" onClick={Buy}>Comprar {count} </button> */}
    </div>
    )
}

export default ItemCount;