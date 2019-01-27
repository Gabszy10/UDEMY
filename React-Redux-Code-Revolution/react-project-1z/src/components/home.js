import React, { Component } from 'react';
import Banner from './banner';
import ArtistsList from './artistList';

const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {
    state = {  
        artists: ''
    }

    componentDidMount(){
        fetch(URL_ARTISTS, {
            method:'GET'
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                artists: json
            })
        })
    }

    render() { 
        return (  
            <div>
                <Banner></Banner>
                <ArtistsList allArtists={this.state.artists}></ArtistsList>
            </div>
        );
    }
}
 
export default Home;