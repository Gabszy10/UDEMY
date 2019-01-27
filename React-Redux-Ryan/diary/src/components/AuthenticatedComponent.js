import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';

class AuthenticatedComponent extends Component {
   componentDidMount(){
       const {userLoading, user} = this.props;
        console.log(userLoading, user, '**********88888');
        
       if(!user){
           console.log('tae');
           
           this.props.history.push('/login');
       }
   }
    render() { 
        const {user, userLoading, children} = this.props;
        return (userLoading === false && user) ? <div>{children}</div> : null
    } 
}

function mapStateToProps(state){
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    }
}
 
export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));

