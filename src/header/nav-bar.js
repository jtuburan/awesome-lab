import React, { Component } from 'react';
import { Button,Nav,Navbar,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

class NavbarHeader extends Component {
  render() {
    return (
      <div className="App">
    <Navbar  inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="#home">Awesome Exam</a>
            </Navbar.Brand>
        </Navbar.Header>
    <Nav>
        <NavItem eventKey={1} href="#">Link1</NavItem>
        <NavItem eventKey={2} href="#">Link2</NavItem>
    </Nav>
</Navbar>
      </div>
    );
  }
}

export default NavbarHeader;
