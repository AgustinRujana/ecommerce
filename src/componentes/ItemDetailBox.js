import React from "react";
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

//Images
import ItemImage from "./subcomponents/ItemImage";

const ItemDetailBox = ({item}) => {
    
    //Checks the stock and decides if the user will be able to enter the detail
    const CheckStock = () => {
        if (item.stock === 0){
            return <p>Sin Stock</p>
        } else {
            return <Link to={`/item/${item.id}`}>Ver Detalle</Link>
        }
    }

    //Render Component
    return <>
        <Col xs={6} sm={4} md={3} lg={2} className='ItemDetailBox'>
            <ItemImage item={item}/>
            <p>{item.title}</p>
            <CheckStock/>
        </Col>
    </>
}

export default ItemDetailBox;