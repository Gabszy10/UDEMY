import React, { Component } from 'react';
import {connect} from 'react-redux';
import MemeItem from './MemeItem';

import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import MyMeme from './MyMeme';
class App extends Component {

  state = {
     memeLimit: 10,
     text0: ' ',
     text1: ' '
  }
  render() {
    console.log(this.props);
    
    return (
      <div className="App">
        <h2>Welcome to the Meme Generator!</h2>
        <h4><i>Write Some Text</i></h4>
        <Form inline>
           <FormGroup>
             <ControlLabel>Top</ControlLabel>
             {' '}
             <FormControl type="text" onChange={event => this.setState({text0 : event.target.value})}>

             </FormControl>
              {' '}
             <FormGroup>
               <ControlLabel>Bottom</ControlLabel>
               {' '} 
               <FormControl type="text" onChange={event => this.setState({text1 : event.target.value})}>

               </FormControl>
             </FormGroup>
           </FormGroup>
        </Form>
        <MyMeme/>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return(
              <MemeItem text0={this.state.text0} text1={this.state.text1} key={index} meme={meme}/>
            )
          })
        }
        <div className="meme-button" onClick={() => this.setState({memeLimit: this.state.memeLimit + 10})}>Load 10 more memes...</div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
      memes: state.memes
    }
}

export default connect(mapStateToProps)(App);
