import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterbyId} from '../actions';

class CharacterList extends Component {
    state = {  }
    render() { 
        
        return (  
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {
                        this.props.characters.map(character => {
                            return(
                                <li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.addCharacterbyId(character.id)}>
                                        +
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterbyId}, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);