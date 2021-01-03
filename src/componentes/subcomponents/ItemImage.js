import React, { useState, useEffect } from "react";
import firebase from 'firebase';

const ItemImage = ( {item} ) => {
  const [source, setImgSource] = useState();

  //Retrieve Images from firebase
  useEffect(() => {
    const storage = firebase.storage();
    const pathReference = storage.ref(item.image)
    
    pathReference.getDownloadURL().then( function(url){
      setImgSource(url)
    })
  }, [item]);

  //This is just for SEO purposes
  const ItemAlt = "Imagen de " + item.title;

  return <>
  <img className="mx-auto" height="95px" src={source} alt={ItemAlt}/>
  </>
}

export default ItemImage;