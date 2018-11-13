import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
     } from 'reactstrap';

const Header = () =>{
    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {" | "}
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            {" | "}
            <NavItem>
              <NavLink href="/courses">Course</NavLink>
            </NavItem>
          </Nav>
      </Navbar>

    );
};
// Header.propTypes = {
// // myProps:PropTypes.func.isRequired,
// };
export default Header;