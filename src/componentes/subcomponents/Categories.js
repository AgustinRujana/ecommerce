import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from '../../firebase';
import NavDropdown from 'react-bootstrap/NavDropdown'
 
const Categories = () => {
  const [categories, setCategories] = useState();

  //Get Categories from Firebase and save it on state
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
  
  //Renders the Categories saved on state
  const ReturnCategories = () => {
    if (!categories) {
      return <NavDropdown.Item>Cargando...</NavDropdown.Item>
    }
    const list = categories.map((e) => {
      return (
        <NavDropdown.Item key={e.key}><Link to={`/categories/${e.key}`}>{e.description}</Link></NavDropdown.Item>
      );
    });
    return list;
  };

  //Renders the component
  return (
      <ReturnCategories/>
  );
};

export default Categories;