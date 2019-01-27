import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Recipe Finder</h2>
          <SearchRecipes/>
          <RecipeList/>
      </div>
    );
  }
}

export default App;
