import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getCars } from '../actions';
import {bindActionCreators} from 'redux'; 

class Search extends Component {
    state = {  
        keyword: ''
    }

    searchCars = (e) => {
        e.preventDefault();
        this.props.getCars(this.state.keyword);
        
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    componentDidMount(){
        
    }

    render() { 
        return (  
            <div className="main_search">
                <form onSubmit={this.searchCars}>
                    <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars}, dispatch)
}
 
export default connect(null, mapDispatchToProps)(Search);