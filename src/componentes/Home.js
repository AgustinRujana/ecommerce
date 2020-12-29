import React from 'react';
import { Link } from 'react-router-dom';
// import ItemList from './ItemList';

const Home = ({titulo}) => { 
    return (
      <div>
        <div className="mt-5 row justify-content-center">
            <h1 className="text-center">{titulo}</h1>
        </div>
        <Link to={`/items/Todos`}>Ir al catalogo</Link>
        {/* <ItemList/> */}
      </div>
    )
  }
export default Home;