import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = (props) => {

    const list = ({allArtists}) => {
        if(allArtists){
            return allArtists.map((item) => {

                const style = {
                    background: `url('/images/covers/${item.cover}.jpg')
                    no-repeat`
                }

                return(
                    <Link key={item.id} to={`/artist/${item.id}`} className="artist_item" style={style}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }
    
    console.log(props);
    return(
        <div className="artists_list">
            <h4>Browse the artists</h4>
            {list(props)}
        </div>
    )
    

}

export default ArtistsList;