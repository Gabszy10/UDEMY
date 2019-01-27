import React, { Component } from 'react';
import{Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {

  state = {
    newDate: '',
    birthday: '1998-03-17'
  }

  changeBirthday = () => {
    this.setState({birthday: this.state.newDate})
  }
  render() {
    return (
      <div className="App">
          <Form inline>
            <h2>Input your Birthday!</h2>
            <FormControl type="date" onChange={event => this.setState({newDate: event.target.value})}></FormControl>
            {' '}
            <Button onClick={this.changeBirthday}>Submit</Button>
            <AgeStats date={this.state.birthday}/>
          </Form>
      </div>
    );
  }
}

export default App;
