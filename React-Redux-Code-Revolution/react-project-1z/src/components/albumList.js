import React from 'react';

const AlbumList = (props) => {

    const showList = ({albumList}) => {
        if(albumList){
            return albumList.map((item ,i) => {
                return(
                    <img key={i} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }   

    return(
        <div className="albums_list">
            {showList(props)}
        </div>
    )

}

export default AlbumList;