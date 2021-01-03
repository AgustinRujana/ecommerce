import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import {Row, Container} from 'react-bootstrap';

//Components
import ItemDetailBox from './ItemDetailBox';

const ItemList = () => {
  const [items, setItems] = useState();
  const { categoryId } = useParams();

  // Retrieve data from Firebase and saving in in State
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos"); //Nombre de la DataBase

    if (categoryId === "todos"){
      itemCollection.get().then((response) => {
        const aux = response.docs.map((e) => {
          return {...e.data(), id:e.id};
        });
        setItems(aux);
      });
    } else {
      const ItemsCategory = itemCollection.where('categoryId', '==', categoryId )
      ItemsCategory.get().then((response) => {
        const aux = response.docs.map((e) => {
          return {...e.data(), id:e.id};
        });
        setItems(aux);
      });
    }
  }, [categoryId]);

  //Conditional Render
  const ReturnItems = () => {
    if (!items) {
      return <p className="text-center">Cargando...</p>;
    }
    const list = items.map((e) => {
      return (        
          <ItemDetailBox item={e}/>
      );
    });
    return list;
  };

  //Salida de ItemList
  return (
    <Container lg className='ItemList'>
      <Row className='justify-content-center'>
      <ReturnItems />
      </Row>
    </Container>
  );
};

export default ItemList;
