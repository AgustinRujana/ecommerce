import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemsCatHeading = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const db = getFirestore();
    const CategoriasCollection = db.collection("Categorias");

    CategoriasCollection.get().then((response) => {
      const aux = response.docs.map((e) => {
        return e.data();
      });
      setCategories(aux);
    });
  }, []);

  const ReturnCategories = () => {
    if (!categories) {
      return <p className="text-center">Cargando...</p>;
    }
    const list = categories.map((e, index) => {
      return (
        <Link to={`/items/${e.id}`}>
          <div key={index} className="row justify-content-center">
            <p>{e.id}</p>
          </div>
        </Link>
      );
    });
    return list;
  };

  return (
    <div>
      <ReturnCategories />
    </div>
  );
};

export default ItemsCatHeading;
