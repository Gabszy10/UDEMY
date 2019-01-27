import React, { Component } from 'react'


// const withClass = (WrappedComponent, className) => {
//     console.log('classname', className);
    
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const withClass = (WrappedComponent, className) => {
    console.log('classname', className);
    
    return class extends Component{
       render(){
        return(
            <div className={className}>
                <WrappedComponent {...this.props}/>
            </div>
        )
       } 
        
    }
}

export default withClass;