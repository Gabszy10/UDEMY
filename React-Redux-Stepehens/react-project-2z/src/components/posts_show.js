import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost} from '../actions';

class PostsShow extends Component {
    componentDidMount(){
        if(!this.props.posts){
            this.props.fetchPost(this.props.match.params.id);
        }
    }
    render() { 

        if(!this.props.posts){
            return <div>Loading ...</div>
        }

        return (  
            <div>
                <Link to="/">Back To Index</Link>
                <h3>{this.props.posts.title}</h3>
                <h6>Categories: {this.props.posts.categories}</h6>
                <p>{this.props.posts.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    console.log(state.posts);
    
    return{
        posts : state.posts[ownProps.match.params.id]
    }
}
 
export default connect(mapStateToProps, {fetchPost})(PostsShow);