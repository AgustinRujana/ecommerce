import { BrowserRouter, Switch, Route } from "react-router-dom";

//Context
import { CartProvider } from "./componentes/context/CartContext";
import { UserProvider } from "./componentes/context/UserContext";

//General
import NavBar from "./componentes/general/NavBar";
import Footer from './componentes/general/Footer';

//Components
import Home from "./componentes/Home";
import CartDetail from "./componentes/CartDetail";
import ItemsList from './componentes/ItemsList';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import UserForm from './componentes/UserForm';

import "./App.css";

function App() {
  return (
    <CartProvider>
      <UserProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/cart">
            <CartDetail/>
          </Route>
          //Final
          <Route exact path="/categories/:categoryId">
            <ItemsList/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/user">
            <UserForm/>
          </Route>
        </Switch>
       <Footer/>  
      </BrowserRouter>
    </UserProvider>
    </CartProvider>
  );
}

export default App;
