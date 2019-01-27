import React, { Component } from 'react';
import Search from '../containers/search';
import ListOfCars from '../containers/list_of_cars';
import './App.css';
class App extends Component {

  render() {
    return (
        <div className="App">
            <Search/>
            <ListOfCars/>
        </div>
    );
  }
}

export default App;
