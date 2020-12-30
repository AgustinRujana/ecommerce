import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";

import Categories from "../subcomponents/Categories";
import CartIcon from "../icons/CartIcon";
import LogoIcon from "../icons/LogoIcon";
import UserIcon from "../icons/UserIcon";

const NavBar = () => {
  return (
    <>
      <Navbar bg="custom" expand="lg" className="NavbarFooter">
        <Navbar.Brand>
          <Link to={"/"}> <LogoIcon /> </Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavDropdown title="Categorias">
              <Categories />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link className="ml-5" to={"/user"}> <UserIcon /> </Link>
        <Link className="ml-2" style={{ textDecoration: 'none' }} to={"/cart"}> <CartIcon /> </Link>
      </Navbar>
    </>
  );
};
export default NavBar;
