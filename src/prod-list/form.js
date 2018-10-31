import React, { Component } from 'react';
import { FormGroup, ControlLabel,  Button } from 'react-bootstrap';

class Forms extends Component {
  constructor() {
      super();
      this.state =  {
          works: []
      };
  }
  add() {
    var ptitle = this.refs.pname.value;
    if(localStorage.getItem('works') == null) {
        var works = [];
        works.push(ptitle);
        localStorage.setItem('works', JSON.stringify(works))
    } else {
        var work = JSON.parse(localStorage.getItem('works'));
        work.push(ptitle);
        localStorage.setItem('works', JSON.stringify(work))
    }
  }
  render() {
    return (
        <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Product Name</ControlLabel>
          <input type="text" ref="pname"/>
          <input type="text" ref="pdesc"/>
          <Button bsStyle="primary" onClick= {this.add.bind(this)}>Submit</Button>
        </FormGroup>
      </form>
    );
  }
}

export default Forms;


<div>
<ul>
    {this.state.works.map(function(work, index){
        return (
          <li key={index}>{work}
            <input type="button" value="x" onClick={this.delete.bind(this)} data-key={index}/>
          </li>
        );
    },this)}
</ul>
</div>

<div className="card" >
<image className="card-img-top" src=" " alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button className="btn btn-primary">Go somewhere</button>
</div>
</div>


<Grid>
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <div class="form-group">
            <label>Product Name</label>
            <input type="text" class="form-control" ref="pname"  aria-describedby="emailHelp" placeholder="Product Name"/>
            
            <label>Product Description</label>
            <input type="text" class="form-control" ref="pdesc"  aria-describedby="emailHelp" placeholder="Product Description"/>
            <button type="button" class="btn btn-primary" onClick= {this.add.bind(this)}>Submit</button>
          </div>
        </Col>
        <Col xs={6} md={8}>
          <div class="card" >
            <img class="card-img-top" src=" " alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>


{this.state.works.map(function(work, index){
  return (
    <div className="card" key={index}>
      <h5 className="card-title">{work}</h5> 
    </div>
  );
  
  },this)}

   {this.state.prodesc.map(function(prodesc, index){
     return (  
        <div>
          <p>{prodesc}</p>
          <button className="btn btn-warning" onClick={this.delete.bind(this)} data-key={index} >Delete</button> 
        </div>
    );
    },this)}

    {this.state.works.map(function (work, index){
      return (
            <div>{work}</div>
      );},this)}

      {this.state.works.map(function (work, index){
        return (
              <td>{work}</td>
        );},this)}

        {this.state.works.map(function (prodesc, index){
        return (
              <td>{prodesc}</td>
        );},this)}


        {this.state.imageUrl[index]}