import React, { Component } from 'react';
import './nav-bar.css';


class NavbarHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h2><a className="navbar-brand" href='/'>AWESOME LABS</a></h2>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <h4><a className="nav-link" href='/'  >Home <span className="sr-only">(current)</span></a></h4>
          </li>
          <li className="nav-item">
            <h4><a className="nav-link" href='/products'>Products</a></h4>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default NavbarHeader;
