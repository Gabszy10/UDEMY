import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Artist from './components/artist';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/artist/:artistid" component={Artist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
