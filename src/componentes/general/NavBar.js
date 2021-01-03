import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//Components
import Categories from "../subcomponents/Categories";
import CartIcon from "../icons/CartIcon";
import LogoIcon from "../icons/LogoIcon";
import UserIcon from "../icons/UserIcon";

const NavBar = () => {
  return (
    <>
      <Navbar bg="custom" expand="lg" className="Navbar">
        <Navbar.Brand>
          <Link to={"/"}> <LogoIcon /> </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Categorias">
            <Categories />
          </NavDropdown>
        </Nav>
        <Link className="ml-5" to={"/user"}> <UserIcon /> </Link>
        <Link className="ml-2" style={{ textDecoration: 'none' }} to={"/cart"}> <CartIcon /> </Link>
      </Navbar>
    </>
  );
};
export default NavBar;
