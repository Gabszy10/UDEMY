import React, { Component } from 'react';
import { connect } from 'react-redux'
import RecipeItem from './RecipetItem';

class RecipeList extends Component {
    state = {  }
    render() { 
        console.log('props', this.props);
        
        return (  
            <div>
                {
                    this.props.recipes.map((recipe, index) => {
                        return(
                           <RecipeItem key={index} recipe={recipe} />
                        )
                    })
                }
            </div>
        );
    }
}
 
const mapStateToProps = (state, ownProps) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeList);