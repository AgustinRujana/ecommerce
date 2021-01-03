import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//Components
import Categories from "../subcomponents/Categories";
import CartIcon from "../icons/CartIcon";
import LogoIcon from "../icons/LogoIcon";
import UserI from '../icons/img/User-2.0_White.svg';

const NavBar = () => {
  return <>
      <Navbar bg="custom" expand="lg" className="Navbar">
        <Navbar.Brand>
          <Link to={"/"}> <LogoIcon /> </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Categorias">
            <Categories />
          </NavDropdown>
        </Nav>
        <Link className="ml-5" to={"/user"}><img className="" height="75px" src={UserI} alt="Icono Usuario" /></Link>
        <Link className="ml-2 LinkFooter" to={"/cart"}> <CartIcon /> </Link>
      </Navbar>
    </>
};
export default NavBar;
