import React, { Component } from 'react';

class Products extends Component {
    constructor() {
      super();
      this.state =  {
          works: [],
          prodesc:[],
          image:[],
          featured:[]
      };

  }
  add() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) { dd = '0'+dd } 
    if(mm<10) { mm = '0'+mm } 
    today = mm + '/' + dd + '/' + yyyy;

    var ptitle = this.refs.pname.value;
    var pdesc = this.refs.pdesc.value;
    var image = this.refs.imageUrl.value;
    var featured = this.refs.featured.value;
    if(
        localStorage.getItem('works') == null 
        && localStorage.getItem('prodesc') == null 
        && localStorage.getItem('image') == null
        && localStorage.getItem('featured') == null
        && localStorage.getItem('time') == null) {

        var works = [];
        var prodesc = [];
        var imageUrl = [];
        var prodFeatured = [];
        var time = [];
        works.push(ptitle);
        prodesc.push(pdesc);
        imageUrl.push(image);
        prodFeatured.push(featured);
        time.push(today);
        localStorage.setItem('works', JSON.stringify(works));
        localStorage.setItem('prodesc', JSON.stringify(prodesc));
        localStorage.setItem('image', JSON.stringify(imageUrl));
        localStorage.setItem('featured', JSON.stringify(prodFeatured));
        localStorage.setItem('time', JSON.stringify(time));

    } else {
        var work = JSON.parse(localStorage.getItem('works'));
        var Prodesc = JSON.parse(localStorage.getItem('prodesc'));
        var ImageUrl = JSON.parse(localStorage.getItem('image'));
        var ProdFeatured = JSON.parse(localStorage.getItem('featured'));
        var Time = JSON.parse(localStorage.getItem('time'));

        work.push(ptitle);
        Prodesc.push(pdesc);
        ImageUrl.push(image);
        ProdFeatured.push(featured);
        Time.push(today);

        localStorage.setItem('works', JSON.stringify(work));
        localStorage.setItem('prodesc', JSON.stringify(Prodesc));
        localStorage.setItem('image', JSON.stringify(ImageUrl));
        localStorage.setItem('featured', JSON.stringify(ProdFeatured));
        localStorage.setItem('time', JSON.stringify(Time));
    }
      this.setState({
        works: JSON.parse(localStorage.getItem('works')),
        prodesc: JSON.parse(localStorage.getItem('prodesc')),
        imageUrl:JSON.parse(localStorage.getItem('image'))
      });
  }
  delete(e) {
    var index = e.target.getAttribute('data-key');
    var list = JSON.parse(localStorage.getItem('works'));
    var prodesclist = JSON.parse(localStorage.getItem('prodesc'));
    var imgList = JSON.parse(localStorage.getItem('image'));
    var featuredList = JSON.parse(localStorage.getItem('featured'));
    var timeList = JSON.parse(localStorage.getItem('time'));
    list.splice(index, 1);
    prodesclist.splice(index, 1);
    imgList.splice(index, 1);
    featuredList.splice(index, 1);
    timeList.splice(index, 1);
    this.setState({
      works: list,
      prodesc: prodesclist,
      imageUrl: imgList,
      FeaturedList: featuredList,
      TimeList: timeList
    });
    localStorage.setItem('works', JSON.stringify(list));
    localStorage.setItem('prodesc', JSON.stringify(prodesclist));
    localStorage.setItem('image', JSON.stringify(imgList));
    localStorage.setItem('featured', JSON.stringify(featuredList));
    localStorage.setItem('time', JSON.stringify(timeList));
  }

  render() {
    return (
    <div className="container">  
      <div className="row">
        <div className="col-sm-4">
        <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control" ref="pname"  aria-describedby="emailHelp" placeholder="Product Name"/>
            
            <label>Product Description</label>
            <input type="text" className="form-control" ref="pdesc"  aria-describedby="emailHelp" placeholder="Product Description"/>

            <label>ImageUrl</label>
            <input type="text" className="form-control" ref="imageUrl"  aria-describedby="Url" placeholder="select image url"/>

            <label>Feature the Product</label>
            <div className="radio">
              <label><input type="radio" name="optradio" ref="featured" value="no" />No</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="optradio" ref="featured" value="yes"/>Yes</label>
            </div>
           
            <button type="button" className="btn btn-primary" onClick= {this.add.bind(this)}>Submit</button>
          </div>
        </div>

        <div className="col-sm-8">
        
        <h2>Product List</h2>  
        <div class="table-responsive">          
        <table class="table">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Options</th>
            </tr>
          </thead>
          <tbody>
              {this.state.works.map(function (works, index){
              return (
                    <tr> 
                        <td><img width="25%" height="10%" src={this.state.imageUrl[index]} alt="product"/></td>
                        <td>{works}</td>
                        <td>{this.state.prodesc[index]}</td>
                        <td><button className="btn btn-warning" onClick={this.delete.bind(this)} data-key={index} >Delete</button> </td>
                    </tr>
              );},this)}
          </tbody>
        </table>
        </div>


      </div>
    </div>
    </div>
    );
  }
}

export default Products;

