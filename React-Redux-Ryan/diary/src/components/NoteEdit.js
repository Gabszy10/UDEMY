import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import {editNote} from '../actions/notesAction';

class NoteEdit extends Component {

    state = {
      title: this.props.note.title,
      body: this.props.note.body
    }
  
    // componentDidMount(){
    //   this.props.getNotes();
    //   this.props.getUser();
    // }
  
    handleChange = (e) => {  
       this.setState({
         [e.target.name] : e.target.value
       })
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        const note = {
          title: this.state.title,
          body: this.state.body,
          uid: this.props.uid
        }
        this.props.editNote(this.props.match.params.id, note);
        this.setState({
          title: '',
          body: ''
        });
        this.props.history.push('/')
    }

    render() {
      return (
        <div className="App">
          <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input type="text" name="title" className="form-control" value={this.state.title}  onChange={this.handleChange} no-border="true" placeholder="Title" required/>
                    </div>
  
                    <div className="form-group">
                      <textarea type="text" name="body" className="form-control no-border" value={this.state.body} onChange={this.handleChange} placeholder="Body" required />
                    </div>
  
                    <div className="form-group">
                      <button className="btn btn-primary col-sm-12">Save</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      );
    }
  }

function mapStateToProps(state, ownProps){
    console.log('state', state);
    
    return{
        note: state.notes[ownProps.match.params.id], 
        uid:state.user.uid
    }
}
 
export default connect(mapStateToProps, {editNote})(NoteEdit);