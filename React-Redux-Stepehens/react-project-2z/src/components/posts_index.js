import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchPosts} from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts = (posts) => {
        return _.map(posts, post => {
            return(
                <li key={post.id} className="list-group-item">
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })
    }

    render() { 
        return (  
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts(this.props.posts)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        posts: state.posts
    }
}
 
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);