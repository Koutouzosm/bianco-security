import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


const Navi = () => {
    return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Bianco Security</NavbarBrand>
            {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar> */}
              <Nav navbar>
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