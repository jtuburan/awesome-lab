import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Products extends Component {
  render() {
    return (
      <Grid>
      <Row className="show-grid">
        <Col xs={12} md={4}>
              asdasasd
        </Col>
        <Col xs={6} md={8}>
          <code>{'<Col xs={6} md={4} />'}</code>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Products;
