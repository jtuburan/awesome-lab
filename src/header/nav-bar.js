import React, { Component } from 'react';
import { Nav,Navbar,NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './nav-bar.css';


class NavbarHeader extends Component {
  render() {
    return (
      <div className="nav-style">
        <Navbar  inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#home">Awesome Exam</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>        
                <NavItem > <NavLink to='/' style={{textDecoration: 'none' }}> Home </NavLink></NavItem>
                <NavItem > <NavLink to='/products' style={{textDecoration: 'none'}}> Products </NavLink> </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarHeader;
