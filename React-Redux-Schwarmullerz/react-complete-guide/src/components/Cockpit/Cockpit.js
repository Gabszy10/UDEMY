import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

        return(
           <Aux>
                <div>
                    <h1>Hi, I'm a {props.appTitle}</h1>
                    <p className={assignedClasses.join( ' ' )}>This is really working!</p>
                    <button
                        className={btnClass}
                        onClick={props.clicked}>Toggle Persons
                    </button>
                </div>
            </Aux> 
        );
};

export default cockpit;
