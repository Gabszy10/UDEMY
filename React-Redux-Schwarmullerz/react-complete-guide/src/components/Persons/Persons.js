import React, { PureComponent } from 'react'

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log('[Persons.js]', props);
  
    }

    componentWillMount(){
        console.log('Persons.js Inside component');
        
      }
    
     componentDidMount(){
       console.log('Persons.js Inside componentDidMount');
       
     }

     componentWillReceiveProps(nextProps){
         console.log('UPDATE Persons.js Inside componentwillReceiveProps', nextProps);
         
     }

    //  shouldComponentUpdate(nextProps, nextState){
    //      console.log('[UPDATE] inside should update', nextProps, nextState);
         
    //      return nextProps.persons !== this.props.persons ||
    //             nextProps.clicked !== this.props.clicked;
    //  }

     componentWillUpdate(nextProps, nextState){
         
     }
    

    render(){
        console.log('Persons.js Render');
        
        return  this.props.persons.map( ( person, index ) => {
            return <Person key={index}
                click={() => this.props.clicked( index )}
                name={person.name}
                position={index}
                age={person.age}   
                changed={( event ) => this.props.changed( event, person.id )} />
          } );
    
    }

}

   
export default Persons;
