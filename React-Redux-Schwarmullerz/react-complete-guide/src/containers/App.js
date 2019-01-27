import React, { PureComponent } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props){
      super(props);
      console.log('[App.js]', props);

      this.state = {
        persons: [
          { id: 'asfa1', name: 'Max', age: 28 },
          { id: 'vasdf1', name: 'Manu', age: 29 },
          { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        toggleClicked: 0
      }
      
  }

  componentWillMount(){
    console.log('App.js Inside component');
    
  }

 componentDidMount(){
   console.log('App.js Inside componentDidMount');
   
 }

componentWillUpdate(nextProps, nextState){
  console.log('[UPDATE] inside componentWillUpdate', nextProps, nextState);
}

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => { 
      return {
        showPersons: !doesShow,
        toggleClicked: this.state.toggleClicked + 1
      }
    } );
  }

  render () {
    console.log('App js Inside render');
    
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}/>
      );

    }

    return (
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit appTitle={this.props.title} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler} persons={this.state.persons}/>
          {persons}
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
