import React, {useState} from 'react';
import {Row, Button} from 'react-bootstrap';

const ItemCount = ({itemCategory, initial, max, onAdd}) =>{
    const [count, setCount] = useState(parseInt(initial))
    
    //Here we declare the functions for the buttons
    const decrement = () => {
        if (count !== 1){ setCount(count - 1) }         
    } 
    const increment = () => {
        if (count !== max){ setCount(count + 1) }     
    } 

    //Select which unit will follow the Category shown for a better user experience
    const addaptedCount = (count, itemCategory) => {
        switch(itemCategory){
            case 'aceites':
                return String(count*100) + ' ml';
            case 'semillas':
                return String(count*100) + ' gr';
            default:
                return String(count) + ' U.';  
        }
    }
 
    return <>
        <Row className='ml-5 mr-1 mb-3'>
            <Button variant="outline-success" onClick={ decrement }>-</Button>
            <p className='ItemDetailCounter mx-1 my-auto'>{addaptedCount(count, itemCategory)}</p>
            <Button variant="outline-success" onClick={ increment } >+</Button>
            <Button variant="outline-warning ml-1" onClick={ () => onAdd(count) }>Agregar al Carrito</Button>
        </Row>
    </>
}

export default ItemCount;