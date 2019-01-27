import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

//CONTAINERS
import Home from '../containers/Home';
import News from '../containers/News';
import GalleryItem from '../containers/GalleryItem'

//COMPONENTS
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Header/>
              <Switch>
                  <Route exact path="/news/:id" component={News}></Route>
                  <Route exact path="/galleries/:id" component={GalleryItem}></Route>    
                  <Route exact path="/" component={Home}></Route>    
              </Switch>
              <Footer/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
