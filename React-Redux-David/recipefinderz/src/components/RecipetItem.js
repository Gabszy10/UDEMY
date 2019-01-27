import React, { Component } from 'react';
import { connect } from 'react-redux'
import {favoriteRecipe} from '../actions';

class RecipeItem extends Component {

    state = {
        favorited: false
    }

    favorite(recipe){
        this.props.favoriteRecipe(recipe)
        this.setState({favorited: true})
    }

    render() {
        let {recipe} = this.props
        
        return (  
            <div className="recipe-item">
                {
                    this.state.favorited 
                    ? 
                    <div className="star">&#9733;</div>
                    :  
                    <div className="star" onClick={() => this.favorite(recipe)}>
                        &#9734; 
                    </div>
                }
                
                <div  className="recipe-text">
                    <a href={recipe.href}><h4>{recipe.title}</h4></a>
                    <p>{recipe.ingredients}</p>
                    <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title}/>
                </div>
            </div>
            
        );
    }
}
 
export default connect(null, {favoriteRecipe})(RecipeItem);