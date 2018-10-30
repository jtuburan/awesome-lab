import React, { Component } from 'react';

class Featured extends Component {
  render() {
    return (
        <li>
            {this.props.products.name}
        </li>
    );
  }
}

export default Featured;
