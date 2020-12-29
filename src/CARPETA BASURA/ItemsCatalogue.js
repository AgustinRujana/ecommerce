import React from "react";
// import { useParams } from "react-router-dom";
// import { getFirestore } from "../firebase";
import ItemsList from "./ItemsList";
import ItemsCatHeading from "../CARPETA BASURA/ItemsCatHeadings";

const ItemsCatalogue = () =>{
    return (
        <div>
            <ItemsCatHeading/>
            <ItemsList/>
        </div>
    )

}

export default ItemsCatalogue;