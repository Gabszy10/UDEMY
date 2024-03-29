import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/my-app">
        <div>
          <Blog/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
