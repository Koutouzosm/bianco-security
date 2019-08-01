import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Navi = () => {
    return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Bianco Security</NavbarBrand>
            {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar> */}
              <Nav navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Products/">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/DIY">DIY</NavLink>
                </NavItem>
              </Nav>
            {/* </Collapse> */}
          </Navbar>
        </div>
      );
};
                    
export default Navi;