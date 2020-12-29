import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import ItemDetail from "../CARPETA BASURA/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos");
    const idItem = itemCollection.doc(id);

    idItem.get().then((response) => {
      const aux = response.data()
      if(aux === undefined) {
        setItem("Empty");
      } else {
        setItem(response.data());
      }
    });
  }, [id]);

    const ReturnItems = () => {
      if (item) {
        if (item === "Empty"){
          return <h4>Ups! No encontramos el articulo buscado</h4>
        }
        return <ItemDetail item={item} />;
      }
      return <p>Cargando...</p>;
    };

    //Salida de ItemDetailContainer
    return (
      <div>
        <ReturnItems />
      </div>
    );
};

export default ItemDetailContainer;
