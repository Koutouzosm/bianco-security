import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, InputGroup, InputGroupAddon, Button, } from 'reactstrap';


const Navi = () => {
    return (
        <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="" className="mr-auto"> <img src="./images/biancologo.bmp" width="75" height="50" className="d-inline-block align-top" alt="Bianco Logo"/> </NavbarBrand>
            {/* to toggle navbar */}
            {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar> */}
              <Nav className="mlauto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/products/">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/diy">DIY</NavLink>
                </NavItem>
              </Nav>
            {/* </Collapse> */}
          </Navbar>
        </div>
      );
};
                    
export default Navi;