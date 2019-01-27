import React, { Component } from 'react';
import { connect } from 'react-redux'

class MyMeme extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                {
                    this.props.myMemes.map((meme, index) => {
                        return(
                            <img key={index} src={meme.url} alt=""/>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    
    return {myMemes: state.myMemes}
}
 
export default connect(mapStateToProps)(MyMeme);