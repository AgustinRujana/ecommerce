import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {Col} from 'react-bootstrap';

import ItemImage from "./subcomponents/ItemImage";

const ItemDetailBox = ({item}) => {
    
    const CheckStock = () => {
        if (item.stock === 0){
            return <p>Sin Stock</p>
        } else {
            return <Link to={`/item/${item.id}`}>Ver Detalle</Link>
        }
    }

    return <>
        <Col xs={6} sm={4} md={3} lg={2} className='ItemDetailBox'>
            <ItemImage item={item}/>
            <p>{item.title}</p>
            <CheckStock/>
        </Col>
    </>
}

export default ItemDetailBox;