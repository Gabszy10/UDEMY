import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import {connect} from 'react-redux';
import * as actions from './actions'
import Landing from './components/Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurbeyNew</h2>
const Surveys = () => <h2>Surveys</h2>

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div>
           <Header/>
           <Route exact path="/" component={Landing}/>
           <Route path="/dashboard" component={Dashboard}/>
           <Route path="/surveys/new" component={SurveyNew}/>
           <Route path="/surveys" component={Surveys}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
