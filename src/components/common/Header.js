import React,{PropTypes} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const Header = () =>{
    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
       
     
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
              <NavLink href="/course">Course</NavLink>
            </NavItem>
          
         
          </Nav>
       
      </Navbar>

    );
};
Header.propTypes ={

};
export default Header;