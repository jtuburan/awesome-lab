import React, { Component } from 'react';


class Home extends Component {
  constructor() {
    super();
    this.state =  {
      works: JSON.parse(localStorage.getItem('works')),
      prodesc: JSON.parse(localStorage.getItem('prodesc')),
      imageUrl:JSON.parse(localStorage.getItem('image')),
      time:JSON.parse(localStorage.getItem('time'))
    };
   // console.log(this.state.works.map(function(works, index){ return {works} }).sort(function(time, index){ return {time} }));
}
  render() { 
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg">
              <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" width={500} height={550} src="https://i.redd.it/8g0i6s7susby.jpg" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                  <h1>Featured Product</h1>
                  <h2>prodesc</h2>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" width={500} height={550} src="https://i.redd.it/8g0i6s7susby.jpg" alt="Second slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg">
          {this.state.time.map(function (time, index){
            return (
              <div class = "col-sm-3">
              <div class="card">
              <img class="card-img-top"  src={this.state.imageUrl[index]} alt="Card  cap"/>
              <div class="card-body">
                <h5 class="card-title">{this.state.works[index]}</h5>
                <p class="card-text">{this.state.prodesc[index]}</p>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
              </div>
              </div>
            );},this)}
          </div>
        </div>
      </div>
     
    );
  }
}


export default Home;
