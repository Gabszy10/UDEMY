import React, { Component } from 'react';
import {connect} from 'react-redux';
import {latestNews, otherNews, latestGallery} from '../actions';
import {bindActionCreators} from 'redux';
//Components
import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/OtherNews';
import Gallery from '../components/home/Gallery';

class Home extends Component {
    
    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
    }

    render() { 
        return (  
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
                <Gallery latestGallery={this.props.galleries.latestGallery}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles,
        galleries: state.galleries
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, otherNews, latestGallery}, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);