import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getNotes, saveNotes, deleteNote} from './actions/notesAction';
import NoteCard from './components/NoteCard'
import {getUser} from './actions/userAction';
import { Link } from 'react-router-dom';

class App extends Component {

  state = {
    title: '',
    body: ''
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
        uid: this.props.user.uid
      }
      this.props.saveNotes(note);
      this.setState({
        title: '',
        body: ''
      })
  }

  //render notes 
  // renderNotes = () =>{
  //   return _.map(this.props.notes, (note, key) => {
  //     return(
  //       <NoteCard key={key}>
  //           <h2>{note.title}</h2>
  //           <p>{note.body}</p>
  //           {note.uid === this.props.user.uid &&
  //             <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>Delete</button>}
            
  //       </NoteCard>
  //     )
  //   });
  // }

   renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
      <NoteCard key={key}>
        <Link to={`/${key}`}>
        <h2>{note.title}</h2>
        </Link>
          <p>{note.body}</p>
          {note.uid === this.props.user.uid && (
            <div>
              <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>Delete</button>
              <button className="btn btn-info btn-xs pull-right"><Link to={`/${key}/edit`}>Update</Link></button>
            </div>
          )}
      </NoteCard>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2 text-center">
                   <img src={this.props.user.photoURL}
                   height="100px"
                   className="img img-responsive circle"
                   style={{padding: '20px'}}
                   alt="Gab"  
                   />
                   <h4 className="username">Welcome back {this.props.user.displayName}</h4>
              </div>
              <div className="col-sm-10">
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

                  {this.renderNotes()}

              </div>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
      notes: state.notes,
      user: state.user
  }
}

export default connect(mapStateToProps, {getNotes, saveNotes, deleteNote, getUser })(App);
