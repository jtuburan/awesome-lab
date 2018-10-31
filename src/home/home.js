import React, { Component } from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class Home extends Component {
  render() {
    let products = [{
      name: "Gundam Unicorn",
      content: "gundam1",
      imageUrl: "https://3.bp.blogspot.com/-5hXr0S19AOs/WXGHctZPQTI/AAAAAAAGsLc/OylmXsRDba4Pjs7ZNbpkuKKMPNwmpH71gCLcBGAs/s1600/rg-unicorn-gundam%2B%25281%2529.jpg", 
      featured: true,
      price: "2500",
      date: ""
    }, {
      name: "Gundam Barbatos",
      content: "gundam2",
      imageUrl: "https://i.redd.it/8g0i6s7susby.jpg",
      featured: false,
      price: "2000",
      date: ""
    }]

    let productsList = products.map(product => 
    <Carousel.Item>
      <img width={500} height={550} alt="900x500" src={product.imageUrl} />
      <Carousel.Caption>
        <h3>{product.name}</h3>
      </Carousel.Caption>
    </Carousel.Item>
    );

    let productsCatalog = products.map(product => 
       <Row>
        <Col sm="6" md="6">  
          <Card>
            <CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />
            <CardBody>
              <CardTitle>{product.namel} </CardTitle>
              <CardText>{product.content}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        </Row>
    );

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <Carousel>
                {productsList}
            </Carousel>
          </Col>
          <Col xs={6} md={8}>
            {productsCatalog}
          </Col>
        </Row>
      </Grid>
     
    );
  }
}


export default Home;
