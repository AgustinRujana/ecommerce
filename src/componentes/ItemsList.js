import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemList = () => {
  const [items, setItems] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos"); //Nombre de la DataBase

    if (categoryId === "todos"){
      itemCollection.get().then((response) => {
        const aux = response.docs.map((e) => {
          return e.data();
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

  const ReturnItems = () => {
    if (!items) {
      return <p className="text-center">Cargando...</p>;
    }
    const list = items.map((e) => {
      return (
        <Link to={`/item/${e.id}`}> 
          <div key={e.id} className="row justify-content-center">
            <p>{e.title}</p>
            <p>
              <b>${e.price}</b>
            </p>
          </div>
        </Link>
      );
    });
    return list;
  };

  //Salida de ItemList
  return (
    <div>
      <ReturnItems />
    </div>
  );
};

export default ItemList;
