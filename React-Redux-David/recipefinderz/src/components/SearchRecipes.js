import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import {setRecipes} from '../actions';
import {connect} from 'react-redux';

class SearchRecipes extends Component {

    state = {
        ingredients: '',
        dish: ''
    }

    search = () => {
        let {ingredients, dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
        
        axios.get(url).then(res => {
            this.props.setRecipes(res.data.results)
            
        }).catch(err => {
            throw err;
        })
        
    }
    render() { 
        return (  
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="garlic, chicken" onChange={event => this.setState({ingredients: event.target.value})} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="adobo" onChange={event => this.setState({dish: event.target.value})} />
                </FormGroup>
                {' '}
                <Button onClick={this.search}>Submit</Button>
            </Form>
        );
    }
}
 
export default connect(null, {setRecipes})(SearchRecipes);