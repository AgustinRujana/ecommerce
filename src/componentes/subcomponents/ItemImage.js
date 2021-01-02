import React, { useState, useEffect } from "react";
import firebase from 'firebase';

const ItemImage = ({item}) => {
    const [source, setImgSource] = useState();

    //Retrieve Images from firebase
  useEffect(() => {
    const storage = firebase.storage();
    const pathReference = storage.ref(item.image)
    
    pathReference.getDownloadURL().then( function(url){
      setImgSource(url)
    })
  }, [item]);

  const ItemAlt = "Imagen de " + item.title

  return <>
  <img className="mr-2" height="100px" src={source} alt={ItemAlt}/>
  </>
}

export default ItemImage;