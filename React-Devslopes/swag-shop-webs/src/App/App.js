import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service'
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

const http = new HttpService();

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: []
    }

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
        this.setState({products})
        
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) => {
        return(
          <div className="col-sm-4" key={product._id}>
              <Product product={product}/>
          </div>
        )
    })

    return list;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container App-main">
            <div className="row">
              <div className="col-sm-8">
                  <div className="row">
                      {this.productList()}
                  </div>
              </div>
              <div className="col-sm-4">
                  <WishList/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
